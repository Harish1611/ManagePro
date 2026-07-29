import { useNavigate } from "react-router-dom";
import {
    FiFolder,
    FiCheckCircle,
    FiClock,
} from "react-icons/fi";

function Avatar({ member }) {
    if (member.avatar) {
        return (
            <img
                src={member.avatar}
                alt={member.name}
                className="
                    h-11
                    w-11
                    rounded-full
                    object-cover
                    ring-2
                    ring-gray-200
                    dark:ring-gray-700
                "
            />
        );
    }

    return (
        <div
            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-blue-500
                to-indigo-600
                text-sm
                font-bold
                text-white
            "
        >
            {member.name?.charAt(0)?.toUpperCase()}
        </div>
    );
}

function StatusBadge({ active }) {
    return (
        <span
            className={`
                inline-flex
                items-center
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                ${
                    active
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }
            `}
        >
            <span
                className={`
                    mr-2
                    h-2
                    w-2
                    rounded-full
                    ${
                        active
                            ? "bg-green-500"
                            : "bg-red-500"
                    }
                `}
            />

            {active ? "Active" : "Inactive"}
        </span>
    );
}

function RoleBadge({ role }) {
    return (
        <span
            className="
                inline-flex
                rounded-full
                bg-blue-100
                px-3
                py-1
                text-xs
                font-semibold
                text-blue-700
                dark:bg-blue-900/30
                dark:text-blue-300
            "
        >
            {role}
        </span>
    );
}

export default function MemberTable({
    members = [],
    pagination,
    onPageChange,
}) {

    const navigate = useNavigate();

    const roleBadge = (role) => {

        switch (role) {

            case "Admin":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";

            case "Manager":
                return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300";

            default:
                return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";

        }

    };

    return (

        <div className="
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-sm
            dark:border-gray-700
            dark:bg-gray-900
        ">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    {/* Header */}

                    <thead className="
                        border-b
                        border-gray-200
                        bg-gray-50
                        dark:border-gray-700
                        dark:bg-gray-800
                    ">

                        <tr>

                            <th className="
                                px-6
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                dark:text-gray-400
                            ">
                                Member
                            </th>

                            <th className="
                                px-6
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                dark:text-gray-400
                            ">
                                Role
                            </th>

                            <th className="
                                px-6
                                py-4
                                text-center
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                dark:text-gray-400
                            ">
                                Projects
                            </th>

                            <th className="
                                px-6
                                py-4
                                text-center
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                dark:text-gray-400
                            ">
                                Tasks
                            </th>

                            <th className="
                                px-6
                                py-4
                                text-center
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                dark:text-gray-400
                            ">
                                Completed
                            </th>

                            <th className="
                                px-6
                                py-4
                                text-center
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                dark:text-gray-400
                            ">
                                Pending
                            </th>

                            <th className="
                                px-6
                                py-4
                                text-center
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-gray-500
                                dark:text-gray-400
                            ">
                                Status
                            </th>

                        </tr>

                    </thead>

                    {/* Body */}

                    <tbody className="
                        divide-y
                        divide-gray-200
                        dark:divide-gray-700
                    ">

                        {members.map((member) => (

                            <tr

                                key={member._id}

                                onClick={() =>
                                    navigate(`/team/${member._id}`)
                                }

                                className="
                                    cursor-pointer
                                    transition-all
                                    duration-200
                                    hover:bg-blue-50/60
                                    dark:hover:bg-gray-800
                                "

                            >

                                {/* Member */}

                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-4">

                                        {member.avatar ? (

                                            <img
                                                src={member.avatar}
                                                alt={member.name}
                                                className="
                                                    h-12
                                                    w-12
                                                    rounded-full
                                                    object-cover
                                                    ring-2
                                                    ring-gray-100
                                                    dark:ring-gray-700
                                                "
                                            />

                                        ) : (

                                            <div className="
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-gradient-to-br
                                                from-blue-500
                                                to-indigo-600
                                                text-lg
                                                font-bold
                                                text-white
                                            ">

                                                {member.name
                                                    ?.charAt(0)
                                                    .toUpperCase()}

                                            </div>

                                        )}

                                        <div>

                                            <h3 className="
                                                font-semibold
                                                text-gray-900
                                                dark:text-white
                                            ">
                                                {member.name}
                                            </h3>

                                            <p className="
                                                text-sm
                                                text-gray-500
                                                dark:text-gray-400
                                            ">
                                                {member.email}
                                            </p>

                                        </div>

                                    </div>

                                </td>

                                {/* Role */}

                                <td className="px-6 py-5">

                                    <span className={`
                                        rounded-full
                                        px-3
                                        py-1
                                        text-xs
                                        font-semibold
                                        ${roleBadge(member.role)}
                                    `}>

                                        {member.role}

                                    </span>

                                </td>

                                {/* Projects */}

                                <td className="
                                    px-6
                                    py-5
                                    text-center
                                ">

                                    <div className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-gray-700
                                        dark:text-gray-300
                                    ">

                                        <FiFolder className="text-blue-500" />

                                        <span className="font-semibold">

                                            {member.projectsCount ?? 0}

                                        </span>

                                    </div>

                                </td>

                                {/* Tasks */}

                                <td className="
                                    px-6
                                    py-5
                                    text-center
                                ">

                                    <span className="
                                        font-semibold
                                        text-gray-800
                                        dark:text-gray-200
                                    ">

                                        {member.tasksCount ?? 0}

                                    </span>

                                </td>

                                {/* Completed */}

                                <td className="
                                    px-6
                                    py-5
                                    text-center
                                ">

                                    <div className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-green-600
                                        dark:text-green-400
                                    ">

                                        <FiCheckCircle />

                                        <span className="font-semibold">

                                            {member.completedTasks ?? 0}

                                        </span>

                                    </div>

                                </td>

                                {/* Pending */}

                                <td className="
                                    px-6
                                    py-5
                                    text-center
                                ">

                                    <div className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-amber-600
                                        dark:text-amber-400
                                    ">

                                        <FiClock />

                                        <span className="font-semibold">

                                            {member.pendingTasks ?? 0}

                                        </span>

                                    </div>

                                </td>

                                {/* Status */}

                                <td className="
                                    px-6
                                    py-5
                                    text-center
                                ">

                                    <span className={`
                                        inline-flex
                                        rounded-full
                                        px-3
                                        py-1
                                        text-xs
                                        font-semibold
                                        ${
                                            member.isActive
                                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                        }
                                    `}>

                                        {member.isActive
                                            ? "Active"
                                            : "Inactive"}

                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* Pagination */}

{pagination && pagination.totalPages > 1 && (
    <div
        className="
            flex
            items-center
            justify-between
            border-t
            border-gray-200
            bg-gray-50
            px-6
            py-4
            dark:border-gray-700
            dark:bg-gray-800
        "
    >
        <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing page{" "}
            <span className="font-semibold">
                {pagination.page}
            </span>{" "}
            of{" "}
            <span className="font-semibold">
                {pagination.totalPages}
            </span>
        </p>

        <div className="flex items-center gap-2">
            <button
                disabled={pagination.page === 1}
                onClick={() =>
                    onPageChange(pagination.page - 1)
                }
                className="
                    rounded-lg
                    border
                    border-gray-300
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition
                    hover:bg-gray-100
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    dark:border-gray-600
                    dark:hover:bg-gray-700
                "
            >
                Previous
            </button>

            {Array.from(
                { length: pagination.totalPages },
                (_, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            onPageChange(index + 1)
                        }
                        className={`h-9 w-9 rounded-lg text-sm font-medium transition ${
                            pagination.page === index + 1
                                ? "bg-blue-600 text-white"
                                : "border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        }`}
                    >
                        {index + 1}
                    </button>
                )
            )}

            <button
                disabled={
                    pagination.page ===
                    pagination.totalPages
                }
                onClick={() =>
                    onPageChange(pagination.page + 1)
                }
                className="
                    rounded-lg
                    border
                    border-gray-300
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition
                    hover:bg-gray-100
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    dark:border-gray-600
                    dark:hover:bg-gray-700
                "
            >
                Next
            </button>
        </div>
    </div>
)}

        </div>

    );

}