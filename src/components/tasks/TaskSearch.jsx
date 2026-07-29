import { Search } from "lucide-react";

export default function TaskSearch({

    value,

    onChange,

}) {

    return (

        <div className="relative w-full md:w-80">

            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input

                type="text"

                value={value}

                onChange={onChange}

                placeholder="Search tasks..."

                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900"

            />

        </div>

    );

}