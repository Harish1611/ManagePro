import {

    FiGrid,

    FiList,

} from "react-icons/fi";

export default function ViewToggle({

    view,

    setView,

}) {

    return (

        <div className="flex overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700">

            <button

                onClick={() => setView("grid")}

                className={`p-2 ${view === "grid"
                    ? "bg-blue-600 text-white"
                    : ""
                    }`}

            >

                <FiGrid />

            </button>

            <button

                onClick={() => setView("list")}

                className={`p-2 ${view === "list"
                    ? "bg-blue-600 text-white"
                    : ""
                    }`}

            >

                <FiList />

            </button>

        </div>

    );

}