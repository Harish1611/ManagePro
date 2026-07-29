import WorkloadStats from "./WorkloadStats";
import WorkloadChart from "./WorkloadChart";

export default function MemberWorkload({

    workload = {},

}) {

    return (

        <div className="space-y-6">

            <div>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">

                    Workload Overview

                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">

                    Member task distribution and productivity.

                </p>

            </div>


            <WorkloadStats

                workload={workload}

            />


            <WorkloadChart

                workload={workload}

            />

        </div>

    );

}