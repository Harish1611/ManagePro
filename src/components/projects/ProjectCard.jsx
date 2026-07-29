import { FiCalendar, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import ProjectStatusBadge from "./ProjectStatusBadge";
import ProjectMembers from "./ProjectMembers";
import ProjectMenu from "./ProjectMenu";

export default function ProjectCard({

    project,

    onEdit,

    onDelete,

    onManageMembers,

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

            {/* Header */}

            <div className="mb-5 flex items-start justify-between">

                <div className="flex items-center gap-3">

                    <div

                        className="h-4 w-4 rounded-full"

                        style={{
                            backgroundColor:
                                project.color || "#3B82F6",
                        }}

                    />

                    <div>

                        <h3 className="text-lg font-semibold">

                            {project.name}

                        </h3>

                        <ProjectStatusBadge
                            status={project.status}
                        />

                    </div>

                </div>

                <div
                    onClick={(e) => e.stopPropagation()}
                >

                    <ProjectMenu

                        project={project}

                        onEdit={onEdit}

                        onDelete={onDelete}

                    />

                </div>

            </div>

            {/* Description */}

            <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">

                {project.description ||

                    "No description available."}

            </p>

            {/* Members */}

            <div className="mt-6">

                <ProjectMembers
                    members={project.members}
                />

            </div>

            {/* Footer */}

            <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-800">

                <div className="mb-3 flex items-center justify-between text-xs text-gray-500">

                    <span className="flex items-center gap-2">

                        <FiCalendar />

                        {new Date(
                            project.createdAt
                        ).toLocaleDateString()}

                    </span>

                    <span>

                        {project.members?.length || 0} Members

                    </span>

                </div>

                <button

                    type="button"

                    onClick={(e) => {

                        e.stopPropagation();

                        onManageMembers?.(project);

                    }}

                    className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        border
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition
                        hover:bg-gray-100
                        dark:border-gray-700
                        dark:hover:bg-gray-800
                    "

                >

                    <FiUsers />

                    Manage Members

                </button>

            </div>

        </div>

    );

}