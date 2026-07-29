import { useEffect, useState } from "react";

import useProjects from "@/hooks/useProjects";
import useProjectFilters from "@/hooks/useProjectFilters";

import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectToolbar from "@/components/projects/ProjectToolbar";

import ProjectSkeleton from "@/components/projects/ProjectSkeleton";
import EmptyProjects from "@/components/projects/EmptyProjects";
import ErrorProjects from "@/components/projects/ErrorProjects";

import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectTable from "@/components/projects/ProjectTable";

import ProjectModal from "@/components/projects/ProjectModal";
import DeleteProjectModal from "@/components/projects/DeleteProjectModal";


export default function Projects() {


   

    const {

projects,
pagination,
loading,
error,
fetchProjects,

} = useProjects();



    const [view, setView] = useState("grid");


    const [
        selectedProject,
        setSelectedProject
    ] = useState(null);



    const [
        showModal,
        setShowModal
    ] = useState(false);



    const [
        deleteModal,
        setDeleteModal
    ] = useState(false);



    const {

        filters,

        setFilters,

    } = useProjectFilters(fetchProjects);



    useEffect(() => {

        fetchProjects(filters);

    }, [filters]);



    /*
        CREATE PROJECT
    */

    const handleCreate = () => {

        setSelectedProject(null);

        setShowModal(true);

    };



    /*
        EDIT PROJECT
    */

    const handleEdit = (project) => {

        setSelectedProject(project);

        setShowModal(true);

    };



    /*
        DELETE PROJECT
    */

    const handleDelete = (project) => {

        setSelectedProject(project);

        setDeleteModal(true);

    };



    return (

        <div className="space-y-6">


            <ProjectHeader

                onCreate={handleCreate}

            />



            <ProjectToolbar

                filters={filters}

                setFilters={setFilters}

                view={view}

                setView={setView}

            />



            {
                loading &&

                <ProjectSkeleton />

            }



            {
                !loading &&
                error &&

                <ErrorProjects

                    message={error}

                    retry={() =>
                        fetchProjects(filters)
                    }

                />

            }



            {
                !loading &&
                !error &&
                projects.length === 0 &&

                <EmptyProjects

                    onCreate={handleCreate}

                />

            }



            {
                !loading &&
                !error &&
                projects.length > 0 &&

                (

                    view === "grid"

                    ?

                    <ProjectGrid

                        projects={projects}

                        onEdit={handleEdit}

                        onDelete={handleDelete}

                    />


                    :


                    <ProjectTable

                        projects={projects}

                        pagination={pagination}

                        filters={filters}

                        setFilters={setFilters}

                        onEdit={handleEdit}

                        onDelete={handleDelete}

                    />

                )

            }



            {/* CREATE / EDIT MODAL */}

            <ProjectModal

                open={showModal}

                project={selectedProject}

                loading={loading}

                onClose={() => {

                    setShowModal(false);

                    setSelectedProject(null);

                }}

            />



            {/* DELETE MODAL */}

            <DeleteProjectModal

                open={deleteModal}

                project={selectedProject}

                loading={loading}

                onClose={() => {

                    setDeleteModal(false);

                    setSelectedProject(null);

                }}

            />


        </div>

    );

}