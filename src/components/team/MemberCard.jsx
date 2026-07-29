import { useNavigate } from "react-router-dom";
import {
    FiFolder,
    FiCheckCircle,
    FiClock,
    FiClipboard,
} from "react-icons/fi";

function Avatar({ member }) {
    if (member.avatar) {
        return (
            <img
                src={member.avatar}
                alt={member.name}
                className="
                    h-16
                    w-16
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
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-blue-500
                to-indigo-600
                text-xl
                font-bold
                text-white
            "
        >
            {member.name?.charAt(0)?.toUpperCase()}
        </div>
    );
}

function RoleBadge({ role }) {
    const styles = {
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
                px-3
                py-1
                text-xs
                font-semibold
                ${styles[role] || styles.Member}
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
                px-3
                py-1
                text-xs
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

function Stat({ icon, value, label, color }) {
    return (
        <div
            className="
                rounded-xl
                border
                border-gray-100
                bg-gray-50
                p-3
                text-center
                dark:border-gray-700
                dark:bg-gray-800
            "
        >
            <div
                className={`
                    mb-2
                    flex
                    justify-center
                    text-lg
                    ${color}
                `}
            >
                {icon}
            </div>

            <p className="text-lg font-bold text-gray-900 dark:text-white">
                {value}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
                {label}
            </p>
        </div>
    );
}

export default function MemberCard({ member }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/team/${member._id}`)}
            className="
                group
                cursor-pointer
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:border-gray-700
                dark:bg-gray-900
            "
        >
            {/* Header */}

            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <Avatar member={member} />

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {member.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {member.email}
                        </p>
                    </div>
                </div>

                <StatusBadge active={member.isActive} />
            </div>

            {/* Role */}

            <div className="mt-5">
                <RoleBadge role={member.role} />
            </div>

            {/* Statistics */}

            <div className="mt-6 grid grid-cols-2 gap-3">
                <Stat
                    icon={<FiFolder />}
                    value={member.projectsCount ?? 0}
                    label="Projects"
                    color="text-blue-600"
                />

                <Stat
                    icon={<FiClipboard />}
                    value={member.tasksCount ?? 0}
                    label="Tasks"
                    color="text-indigo-600"
                />

                <Stat
                    icon={<FiCheckCircle />}
                    value={member.completedTasks ?? 0}
                    label="Completed"
                    color="text-green-600"
                />

                <Stat
                    icon={<FiClock />}
                    value={member.pendingTasks ?? 0}
                    label="Pending"
                    color="text-amber-600"
                />
            </div>

            {/* Footer */}

            <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                        Joined
                    </span>

                    <span className="font-medium text-gray-900 dark:text-white">
                        {member.createdAt
                            ? new Date(
                                  member.createdAt
                              ).toLocaleDateString()
                            : "--"}
                    </span>
                </div>
            </div>
        </div>
    );
}