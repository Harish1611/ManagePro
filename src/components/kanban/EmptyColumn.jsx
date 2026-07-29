export default function EmptyColumn() {

    return (

        <div className="flex h-40 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-center">

            <div>

                <p className="text-sm font-medium text-gray-500">

                    No Tasks

                </p>

                <p className="mt-1 text-xs text-gray-400">

                    Drag a task here

                </p>

            </div>

        </div>

    );

}