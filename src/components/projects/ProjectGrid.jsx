import ProjectCard from "./ProjectCard";

export default function ProjectGrid({

    projects = [],

    onEdit,

    onDelete,

    onManageMembers,

}) {

    if (!projects.length) {
        return null;
    }

    return (

        <div
            className="
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-3
                2xl:grid-cols-4
            "
        >

            {
                projects.map((project) => (

                    <div
                        key={project._id}
                        className="
                            animate-in
                            fade-in
                            duration-300
                        "
                    >

                        <ProjectCard

                            project={project}

                            onEdit={onEdit}

                            onDelete={onDelete}

                            onManageMembers={onManageMembers}

                        />

                    </div>

                ))
            }

        </div>

    );

}