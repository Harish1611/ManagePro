import { FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import ProjectStatusBadge from "./ProjectStatusBadge";
import ProjectMembers from "./ProjectMembers";
import ProjectMenu from "./ProjectMenu";

export default function ProjectCard({

    project,

    onEdit,

    onDelete,

}) {

    const navigate = useNavigate();

    return (

        <div

            onClick={() => navigate(`/projects/${project._id}`)}

           className="
group
cursor-pointer
rounded-xl
border
bg-white
p-5
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
dark:bg-gray-900
"

        >

            <div className="mb-5 flex items-start justify-between">

                <div className="flex items-center gap-3">

                    <div

                        className="h-4 w-4 rounded-full"

                        style={{
                            backgroundColor: project.color || "#3B82F6",
                        }}

                    />

                    <div>

                        <h3 className="font-semibold text-lg">

                            {project.name}

                        </h3>

                        <ProjectStatusBadge

                            status={project.status}

                        />

                    </div>

                </div>

                <ProjectMenu

                    project={project}

                    onEdit={onEdit}

                    onDelete={onDelete}

                />

            </div>

            <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">

                {project.description ||

                    "No description available."}

            </p>

            <div className="mt-6">

                <ProjectMembers

                    members={project.members}

                />

            </div>

            <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-gray-800">

                <span className="flex items-center gap-2">

                    <FiCalendar />

                    {new Date(

                        project.createdAt

                    ).toLocaleDateString()}

                </span>

            </div>

        </div>

    );

}