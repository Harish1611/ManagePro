import ProjectSearch from "./ProjectSearch";
import ProjectFilters from "./ProjectFilters";
import ViewToggle from "./ViewToggle";

export default function ProjectToolbar({

    filters,

    setFilters,

    view,

    setView,

}) {

    return (

        <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow dark:bg-gray-900 lg:flex-row lg:items-center lg:justify-between">

            <ProjectSearch

                filters={filters}

                setFilters={setFilters}

            />

            <div className="flex flex-wrap items-center gap-3">

                <ProjectFilters

                    filters={filters}

                    setFilters={setFilters}

                />

                <ViewToggle

                    view={view}

                    setView={setView}

                />

            </div>

        </div>

    );

}