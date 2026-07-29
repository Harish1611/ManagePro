import ProjectStatusBadge from "./ProjectStatusBadge";
import ProjectMenu from "./ProjectMenu";
import ProjectPagination from "./ProjectPagination";

export default function ProjectTable({
    projects,
    pagination,
    filters,
    setFilters,
    onEdit,
    onDelete,
}) {

    return (
       <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow dark:border-gray-800 dark:bg-gray-900">

    <div className="w-full overflow-x-auto">

        <table className="min-w-[800px] w-full">

                    <thead className="bg-gray-100 dark:bg-gray-800">

                        <tr>

                            <th className="px-6 py-4 text-left">
                                Project
                            </th>

                            <th className="px-6 py-4 text-left">
                                Status
                            </th>

                            <th className="px-6 py-4 text-left">
                                Members
                            </th>

                            <th className="px-6 py-4 text-left">
                                Created
                            </th>

                            <th className="px-6 py-4 text-right">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {projects.map((project) => (

                            <tr
                                key={project._id}
                                className="border-t border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
                            >

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="h-4 w-4 rounded-full"
                                            style={{
                                                backgroundColor:
                                                    project.color ||
                                                    "#3B82F6",
                                            }}
                                        />

                                        <div>

                                            <p className="font-medium">

                                                {project.name}

                                            </p>

                                            <p className="text-sm text-gray-500">

                                                {project.description?.slice(0, 40)}

                                            </p>

                                        </div>

                                    </div>

                                </td>

                                <td className="px-6 py-4">

                                    <ProjectStatusBadge
                                        status={project.status}
                                    />

                                </td>

                                <td className="px-6 py-4">

                                    {project.members.length}

                                </td>

                                <td className="px-6 py-4">

                                    {new Date(
                                        project.createdAt
                                    ).toLocaleDateString()}

                                </td>

                                <td className="px-6 py-4 text-right">

                                   <ProjectMenu

project={project}

onEdit={onEdit}

onDelete={onDelete}

/>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            <ProjectPagination
                pagination={pagination}
                filters={filters}
                setFilters={setFilters}
            />

        </div>
    );

}