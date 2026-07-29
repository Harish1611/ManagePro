import {
    useForm
} from "react-hook-form";


import {
    yupResolver
} from "@hookform/resolvers/yup";


import {
    projectSchema
} from "@/validation/projectValidation";


import {
    useDispatch
} from "react-redux";
import getErrorMessage from "@/utils/getErrorMessage";


import {
    createProject,
    updateProject
} from "@/redux/slices/projectSlice";


import toast from "react-hot-toast";


export default function ProjectForm({

    project,

    onSuccess

}) {


    const dispatch = useDispatch();



    const {

        register,

        handleSubmit,

        formState:{
            errors,
            isSubmitting
        }

    } = useForm({

        resolver:yupResolver(projectSchema),

        defaultValues:{

            name:
                project?.name || "",


            description:
                project?.description || "",


            status:
                project?.status || "Planning",


            color:
                project?.color || "#2563EB"

        }

    });



    const submitHandler = async(data)=>{


        try {


           if(project){

    await dispatch(

        updateProject({

            projectId: project._id,

            projectData: data

        })

    ).unwrap();


    toast.success(
        "Project updated successfully"
    );

}
else{

    await dispatch(

        createProject(data)

    ).unwrap();


    toast.success(
        "Project created successfully"
    );

}



            onSuccess();


        }
        catch(error){

           toast.error(
    getErrorMessage(error)
);
        }


    };



    return (

        <form

            onSubmit={
                handleSubmit(submitHandler)
            }

            className="space-y-4"

        >


            <input

                {...register("name")}

                placeholder="Project Name"

                className="
                w-full
                rounded-lg
                border
                px-4
                py-2
                dark:bg-gray-800
                "

            />


            {
                errors.name &&
                <p className="text-sm text-red-500">

                    {errors.name.message}

                </p>
            }



            <textarea

                {...register("description")}

                placeholder="Description"

                rows="4"

                className="
                w-full
                rounded-lg
                border
                px-4
                py-2
                dark:bg-gray-800
                "

            />



            <select

                {...register("status")}

                className="
                w-full
                rounded-lg
                border
                px-4
                py-2
                dark:bg-gray-800
                "

            >

                <option>
                    Planning
                </option>

                <option>
                    Active
                </option>

                <option>
                    Completed
                </option>

                <option>
                    Archived
                </option>


            </select>



            <input

                type="color"

                {...register("color")}

                className="h-10 w-full"

            />



           <button

disabled={isSubmitting}

className="
w-full
rounded-lg
bg-blue-600
py-3
font-medium
text-white
disabled:cursor-not-allowed
disabled:opacity-50
"

>

{

isSubmitting

?

"Saving..."

:

project

?

"Update Project"

:

"Create Project"

}

</button>


        </form>

    );

}