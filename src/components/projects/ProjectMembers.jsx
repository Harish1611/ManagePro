import { FiUsers } from "react-icons/fi";

export default function ProjectMembers({

    members = [],

}) {

    return (

        <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

                <FiUsers />

                <span className="text-sm">

                    {members.length} Members

                </span>

            </div>

            <div className="flex -space-x-2">

                {members.slice(0, 4).map((member) => (

                    <img

                        key={member._id}

                        src={
                            member.avatar ||

                            `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}`
                        }

                        alt={member.name}

                        className="h-8 w-8 rounded-full border-2 border-white object-cover dark:border-gray-900"

                    />

                ))}

            </div>

        </div>

    );

}