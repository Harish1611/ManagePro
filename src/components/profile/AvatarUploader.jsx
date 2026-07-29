import {

    useEffect,

    useRef,

    useState,

} from "react";

import {

    Camera,

    ImagePlus,

    LoaderCircle,

    Trash2,

    Upload,

    X,

} from "lucide-react";

import toast from "react-hot-toast";

import useProfile from "@/hooks/useProfile";

import getErrorMessage from "@/utils/getErrorMessage";


const MAX_FILE_SIZE =

    5 *

    1024 *

    1024;


const ALLOWED_IMAGE_TYPES = [

    "image/jpeg",

    "image/jpg",

    "image/png",

    "image/webp",

];


export default function AvatarUploader({

    profile,

}) {

    const fileInputRef = useRef(null);


    /*
    |--------------------------------------------------------------------------
    | Profile
    |--------------------------------------------------------------------------
    */

    const {

        uploadProfileAvatar,

        removeProfileAvatar,

        avatarUploading,

        avatarRemoving,

    } = useProfile();


    /*
    |--------------------------------------------------------------------------
    | Local State
    |--------------------------------------------------------------------------
    */

    const [

        selectedFile,

        setSelectedFile,

    ] = useState(null);


    const [

        previewUrl,

        setPreviewUrl,

    ] = useState("");


    const [

        uploadProgress,

        setUploadProgress,

    ] = useState(0);


    /*
    |--------------------------------------------------------------------------
    | Avatar URL
    |--------------------------------------------------------------------------
    */

    const apiUrl =

        import.meta.env.VITE_API_URL?.replace(

            /\/api\/?$/,

            ""

        ) || "";


    const currentAvatar = profile?.avatar

        ? profile.avatar.startsWith("http")

            ? profile.avatar

            : `${apiUrl}${profile.avatar}`

        : "";


    const displayedAvatar =

        previewUrl ||

        currentAvatar;


    /*
    |--------------------------------------------------------------------------
    | Preview Cleanup
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        return () => {

            if (previewUrl) {

                URL.revokeObjectURL(

                    previewUrl

                );

            }

        };

    }, [previewUrl]);


    /*
    |--------------------------------------------------------------------------
    | Select Image
    |--------------------------------------------------------------------------
    */

    const handleFileChange = (event) => {

        const file = event.target.files?.[0];


        if (!file) {

            return;

        }


        if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {

            toast.error(

                "Only JPG, JPEG, PNG, and WEBP images are allowed."

            );

            event.target.value = "";

            return;

        }


        if (file.size > MAX_FILE_SIZE) {

            toast.error(

                "Avatar image must not exceed 5 MB."

            );

            event.target.value = "";

            return;

        }


        if (previewUrl) {

            URL.revokeObjectURL(

                previewUrl

            );

        }


        setSelectedFile(

            file

        );


        setPreviewUrl(

            URL.createObjectURL(

                file

            )

        );


        setUploadProgress(

            0

        );

    };


    /*
    |--------------------------------------------------------------------------
    | Clear Selection
    |--------------------------------------------------------------------------
    */

    const clearSelection = () => {

        if (previewUrl) {

            URL.revokeObjectURL(

                previewUrl

            );

        }


        setSelectedFile(

            null

        );


        setPreviewUrl(

            ""

        );


        setUploadProgress(

            0

        );


        if (fileInputRef.current) {

            fileInputRef.current.value = "";

        }

    };


    /*
    |--------------------------------------------------------------------------
    | Upload Avatar
    |--------------------------------------------------------------------------
    */

    const handleUpload = async () => {

        if (!selectedFile) {

            toast.error(

                "Please select an image."

            );

            return;

        }


        try {

            await uploadProfileAvatar(

                selectedFile,

                setUploadProgress

            ).unwrap();


            toast.success(

                "Avatar updated successfully."

            );


            clearSelection();

        } catch (error) {

            toast.error(

                getErrorMessage(

                    error

                )

            );

        }

    };


    /*
    |--------------------------------------------------------------------------
    | Remove Avatar
    |--------------------------------------------------------------------------
    */

    const handleRemove = async () => {

        if (!profile?.avatar) {

            return;

        }


        try {

            await removeProfileAvatar().unwrap();


            toast.success(

                "Avatar removed successfully."

            );


            clearSelection();

        } catch (error) {

            toast.error(

                getErrorMessage(

                    error

                )

            );

        }

    };


    const busy =

        avatarUploading ||

        avatarRemoving;


    return (

        <section
            className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                dark:border-gray-700
                dark:bg-gray-900
            "
        >

            <div className="mb-5">

                <h2
                    className="
                        text-lg
                        font-semibold
                        text-gray-900
                        dark:text-white
                    "
                >

                    Profile Picture

                </h2>

                <p
                    className="
                        mt-1
                        text-sm
                        text-gray-500
                        dark:text-gray-400
                    "
                >

                    Upload a JPG, PNG, or WEBP image up to 5 MB.

                </p>

            </div>


            <div
                className="
                    flex
                    flex-col
                    gap-5
                    sm:flex-row
                    sm:items-center
                "
            >

                <div className="relative shrink-0">

                    {

                        displayedAvatar

                            ? (

                                <img

                                    src={displayedAvatar}

                                    alt={profile?.name || "Profile"}

                                    className="
                                        h-28
                                        w-28
                                        rounded-full
                                        border-4
                                        border-gray-100
                                        object-cover
                                        dark:border-gray-800
                                    "

                                />

                            )

                            : (

                                <div
                                    className="
                                        flex
                                        h-28
                                        w-28
                                        items-center
                                        justify-center
                                        rounded-full
                                        border-4
                                        border-gray-100
                                        bg-gray-100
                                        dark:border-gray-800
                                        dark:bg-gray-800
                                    "
                                >

                                    <Camera
                                        size={32}
                                        className="
                                            text-gray-400
                                        "
                                    />

                                </div>

                            )

                    }


                    <button

                        type="button"

                        disabled={busy}

                        onClick={() => {

                            fileInputRef.current?.click();

                        }}

                        className="
                            absolute
                            bottom-0
                            right-0
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-600
                            text-white
                            shadow-md
                            transition
                            hover:bg-blue-700
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "

                        aria-label="Select profile picture"

                    >

                        <ImagePlus size={18} />

                    </button>

                </div>


                <div className="min-w-0 flex-1">

                    <input

                        ref={fileInputRef}

                        type="file"

                        accept="
                            image/jpeg,
                            image/jpg,
                            image/png,
                            image/webp
                        "

                        onChange={handleFileChange}

                        className="hidden"

                    />


                    {

                        selectedFile && (

                            <div
                                className="
                                    mb-4
                                    rounded-xl
                                    border
                                    border-gray-200
                                    bg-gray-50
                                    p-3
                                    dark:border-gray-700
                                    dark:bg-gray-800
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-3
                                    "
                                >

                                    <div className="min-w-0">

                                        <p
                                            className="
                                                truncate
                                                text-sm
                                                font-medium
                                                text-gray-800
                                                dark:text-gray-200
                                            "
                                        >

                                            {selectedFile.name}

                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                text-gray-500
                                                dark:text-gray-400
                                            "
                                        >

                                            {

                                                (

                                                    selectedFile.size /

                                                    1024 /

                                                    1024

                                                ).toFixed(2)

                                            } MB

                                        </p>

                                    </div>


                                    <button

                                        type="button"

                                        disabled={busy}

                                        onClick={clearSelection}

                                        className="
                                            rounded-lg
                                            p-1.5
                                            text-gray-400
                                            transition
                                            hover:bg-gray-200
                                            hover:text-gray-700
                                            disabled:opacity-50
                                            dark:hover:bg-gray-700
                                            dark:hover:text-gray-200
                                        "

                                        aria-label="Clear selected image"

                                    >

                                        <X size={18} />

                                    </button>

                                </div>


                                {

                                    avatarUploading && (

                                        <div className="mt-3">

                                            <div
                                                className="
                                                    mb-1
                                                    flex
                                                    justify-between
                                                    text-xs
                                                    text-gray-500
                                                    dark:text-gray-400
                                                "
                                            >

                                                <span>

                                                    Uploading

                                                </span>

                                                <span>

                                                    {uploadProgress}%

                                                </span>

                                            </div>


                                            <div
                                                className="
                                                    h-2
                                                    overflow-hidden
                                                    rounded-full
                                                    bg-gray-200
                                                    dark:bg-gray-700
                                                "
                                            >

                                                <div

                                                    className="
                                                        h-full
                                                        rounded-full
                                                        bg-blue-600
                                                        transition-all
                                                    "

                                                    style={{

                                                        width:

                                                            `${uploadProgress}%`,

                                                    }}

                                                />

                                            </div>

                                        </div>

                                    )

                                }

                            </div>

                        )

                    }


                    <div
                        className="
                            flex
                            flex-wrap
                            gap-3
                        "
                    >

                        <button

                            type="button"

                            disabled={busy}

                            onClick={() => {

                                fileInputRef.current?.click();

                            }}

                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-gray-300
                                px-4
                                py-2.5
                                text-sm
                                font-medium
                                text-gray-700
                                transition
                                hover:bg-gray-50
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                dark:border-gray-600
                                dark:text-gray-200
                                dark:hover:bg-gray-800
                            "

                        >

                            <ImagePlus size={18} />

                            {

                                profile?.avatar

                                    ? "Replace Image"

                                    : "Select Image"

                            }

                        </button>


                        {

                            selectedFile && (

                                <button

                                    type="button"

                                    disabled={busy}

                                    onClick={handleUpload}

                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        bg-blue-600
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-medium
                                        text-white
                                        transition
                                        hover:bg-blue-700
                                        disabled:cursor-not-allowed
                                        disabled:opacity-60
                                    "

                                >

                                    {

                                        avatarUploading

                                            ? (

                                                <LoaderCircle
                                                    size={18}
                                                    className="animate-spin"
                                                />

                                            )

                                            : (

                                                <Upload size={18} />

                                            )

                                    }

                                    {

                                        avatarUploading

                                            ? "Uploading..."

                                            : "Upload Avatar"

                                    }

                                </button>

                            )

                        }


                        {

                            profile?.avatar &&

                            !selectedFile && (

                                <button

                                    type="button"

                                    disabled={busy}

                                    onClick={handleRemove}

                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-red-200
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-medium
                                        text-red-600
                                        transition
                                        hover:bg-red-50
                                        disabled:cursor-not-allowed
                                        disabled:opacity-60
                                        dark:border-red-900
                                        dark:text-red-400
                                        dark:hover:bg-red-950/30
                                    "

                                >

                                    {

                                        avatarRemoving

                                            ? (

                                                <LoaderCircle
                                                    size={18}
                                                    className="animate-spin"
                                                />

                                            )

                                            : (

                                                <Trash2 size={18} />

                                            )

                                    }

                                    {

                                        avatarRemoving

                                            ? "Removing..."

                                            : "Remove"

                                    }

                                </button>

                            )

                        }

                    </div>

                </div>

            </div>

        </section>

    );

}