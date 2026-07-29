import {
    FiMail,
    FiPhone,
    FiCalendar,
    FiClock,
    FiFolder,
    FiCheckCircle,
} from "react-icons/fi";

export default function MemberProfileCard({ user }) {
    return (
        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                shadow-sm
                dark:border-gray-700
                dark:bg-gray-900
            "
        >
            {/* Top Banner */}

            <div
                className="
                    h-28
                    bg-gradient-to-r
                    from-blue-600
                    via-indigo-600
                    to-purple-600
                "
            />

            <div className="px-8 pb-8">

                {/* Avatar */}

                <div className="-mt-14 flex flex-col gap-6 lg:flex-row lg:items-end">

                    {user.avatar ? (
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="
                                h-28
                                w-28
                                rounded-full
                                border-4
                                border-white
                                object-cover
                                shadow-lg
                                dark:border-gray-900
                            "
                        />
                    ) : (
                        <div
                            className="
                                flex
                                h-28
                                w-28
                                items-center
                                justify-center
                                rounded-full
                                border-4
                                border-white
                                bg-gradient-to-br
                                from-blue-500
                                to-indigo-600
                                text-4xl
                                font-bold
                                text-white
                                shadow-lg
                                dark:border-gray-900
                            "
                        >
                            {user.name?.charAt(0)?.toUpperCase()}
                        </div>
                    )}

                    <div className="flex-1">

                        <div className="flex flex-wrap items-center gap-3">

                            <h1
                                className="
                                    text-3xl
                                    font-bold
                                    text-gray-900
                                    dark:text-white
                                "
                            >
                                {user.name}
                            </h1>

                            <StatusBadge active={user.isActive} />

                        </div>

                        <p
                            className="
                                mt-2
                                flex
                                items-center
                                gap-2
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            <FiMail />
                            {user.email}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">

                            <RoleBadge role={user.role} />

                        </div>

                    </div>

                </div>

                {/* Statistics */}

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    <StatCard
                        icon={<FiFolder />}
                        label="Projects"
                        value={user.projectsCount ?? 0}
                        color="blue"
                    />

                    <StatCard
                        icon={<FiCheckCircle />}
                        label="Completed"
                        value={user.completedTasks ?? 0}
                        color="green"
                    />

                    <StatCard
                        icon={<FiClock />}
                        label="Pending"
                        value={user.pendingTasks ?? 0}
                        color="amber"
                    />

                    <StatCard
                        icon={<FiCalendar />}
                        label="Tasks"
                        value={user.tasksCount ?? 0}
                        color="purple"
                    />

                </div>

                {/* Details */}

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                    <InfoItem
                        icon={<FiPhone />}
                        label="Phone"
                        value={user.phone || "-"}
                    />

                    <InfoItem
                        icon={<FiCalendar />}
                        label="Joined"
                        value={new Date(user.createdAt).toLocaleDateString()}
                    />

                    <InfoItem
                        icon={<FiClock />}
                        label="Last Updated"
                        value={
                            user.updatedAt
                                ? new Date(user.updatedAt).toLocaleDateString()
                                : "-"
                        }
                    />

                </div>

            </div>
        </div>
    );
}

function RoleBadge({ role }) {

    const colors = {
        Admin:
            "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",

        Manager:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",

        Member:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    };

    return (
        <span
            className={`
                rounded-full
                px-4
                py-1.5
                text-sm
                font-semibold
                ${colors[role] || colors.Member}
            `}
        >
            {role}
        </span>
    );
}

function StatusBadge({ active }) {
    return (
        <span
            className={`
                inline-flex
                items-center
                gap-2
                rounded-full
                px-4
                py-1.5
                text-sm
                font-semibold
                ${
                    active
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                }
            `}
        >
            <span
                className={`
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

function StatCard({
    icon,
    label,
    value,
    color,
}) {

    const colors = {
        blue:
            "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",

        green:
            "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",

        amber:
            "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300",

        purple:
            "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300",
    };

    return (
        <div
            className="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-5
                transition
                hover:shadow-md
                dark:border-gray-700
                dark:bg-gray-800
            "
        >
            <div className="flex items-center justify-between">

                <div>

                    <p
                        className="
                            text-sm
                            text-gray-500
                            dark:text-gray-400
                        "
                    >
                        {label}
                    </p>

                    <h3
                        className="
                            mt-2
                            text-3xl
                            font-bold
                            text-gray-900
                            dark:text-white
                        "
                    >
                        {value}
                    </h3>

                </div>

                <div
                    className={`
                        rounded-xl
                        p-3
                        text-xl
                        ${colors[color]}
                    `}
                >
                    {icon}
                </div>

            </div>
        </div>
    );
}

function InfoItem({
    icon,
    label,
    value,
}) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-5
                dark:border-gray-700
                dark:bg-gray-800
            "
        >
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">

                {icon}

                <span className="text-sm">
                    {label}
                </span>

            </div>

            <p
                className="
                    mt-3
                    text-lg
                    font-semibold
                    text-gray-900
                    dark:text-white
                "
            >
                {value}
            </p>
        </div>
    );
}