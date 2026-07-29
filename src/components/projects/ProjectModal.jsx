import Modal from "@/components/common/Modal";

import ProjectForm from "./ProjectForm";


export default function ProjectModal({

    open,

    onClose,

    loading,

    project,

}) {


    return (

        <Modal

            open={open}

            onClose={onClose}

            loading={loading}

            title={
                project
                    ? "Edit Project"
                    : "Create Project"
            }

        >

            <ProjectForm

                project={project}

                onSuccess={onClose}

            />

        </Modal>

    );

}