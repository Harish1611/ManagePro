import {

    useEffect,

} from "react";


import useProfile from "@/hooks/useProfile";


import ProfileHeader from "@/components/profile/ProfileHeader";

import ProfileStats from "@/components/profile/ProfileStats";

import ProfileSkeleton from "@/components/profile/ProfileSkeleton";

import ProfileForm from "@/components/profile/ProfileForm";

import ChangePasswordForm from "@/components/profile/ChangePasswordForm";

import AvatarUploader from "@/components/profile/AvatarUploader";

export default function Profile() {


    const {

        profile,

        loading,

        error,

        fetchProfile,

    } = useProfile();


    /*
    |--------------------------------------------------------------------------
    | Fetch Profile
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        fetchProfile();

    }, []);


    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (

        loading &&

        !profile

    ) {

        return (

            <ProfileSkeleton />

        );

    }


    /*
    |--------------------------------------------------------------------------
    | Error
    |--------------------------------------------------------------------------
    */

    if (

        error &&

        !profile

    ) {

        return (

            <div
                className="
                    rounded-2xl
                    border
                    border-red-200
                    bg-red-50
                    p-6
                    text-center
                    dark:border-red-900/50
                    dark:bg-red-950/20
                "
            >

                <h2
                    className="
                        text-lg
                        font-semibold
                        text-red-700
                        dark:text-red-400
                    "
                >

                    Unable to load profile

                </h2>

                <p
                    className="
                        mt-2
                        text-sm
                        text-red-600
                        dark:text-red-300
                    "
                >

                    {error}

                </p>

                <button

                    type="button"

                    onClick={fetchProfile}

                    className="
                        mt-4
                        rounded-lg
                        bg-red-600
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:bg-red-700
                    "

                >

                    Try Again

                </button>

            </div>

        );

    }


    return (

        <div className="space-y-6">

            <ProfileHeader

                profile={profile}

            />

            <ProfileStats

                profile={profile}

            />
           

            <ProfileForm

    profile={profile}

/>
 <AvatarUploader

        profile={profile}

    />




<ChangePasswordForm />

        </div>

    );

}