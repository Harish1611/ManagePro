import Modal from "@/components/common/Modal";

import {
    useDispatch
} from "react-redux";

import {
    deleteProject
} from "@/redux/slices/projectSlice";

import toast from "react-hot-toast";


export default function DeleteProjectModal({

    open,

    onClose,

    project

}) {


    const dispatch = useDispatch();



    const removeProject = async()=>{


        try{


            await dispatch(

                deleteProject(
                    project._id
                )

            ).unwrap();



            toast.success(
                "Project deleted"
            );


            onClose();


        }
        catch(error){

            toast.error(error);

        }

    };



    return (

        <Modal

            open={open}

            onClose={onClose}

            title="Delete Project"

        >

            <p className="mb-6">

                Are you sure you want to delete

                <b> {project?.name}</b>?

            </p>



            <div className="flex justify-end gap-3">


                <button

                    onClick={onClose}

                    className="rounded-lg border px-5 py-2"

                >

                    Cancel

                </button>



                <button

                    onClick={removeProject}

                    className="
                    rounded-lg
                    bg-red-600
                    px-5
                    py-2
                    text-white
                    "

                >

                    Delete

                </button>


            </div>


        </Modal>

    );

}