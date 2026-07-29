import {

    AlertTriangle,

    Loader2,

} from "lucide-react";

import {

    useDispatch,

} from "react-redux";

import { toast } from "react-hot-toast";

import {

    deleteTask,

} from "@/redux/slices/taskSlice";

export default function DeleteTaskModal({

    open,

    task,

    loading,

    onClose,

}) {

    const dispatch = useDispatch();

    /*
    |--------------------------------------------------------------------------
    | Delete Task
    |--------------------------------------------------------------------------
    */

    const handleDelete = async () => {

        if (!task?._id) return;

        try {

            await dispatch(

                deleteTask(task._id)

            ).unwrap();

            toast.success(
                "Task deleted successfully"
            );

            onClose();

        }

        catch (error) {

            toast.error(
                error ||
                "Failed to delete task"
            );

        }

    };

    if (!open) {

        return null;

    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="w-full max-w-md rounded-xl bg-white shadow-xl dark:bg-gray-900">

                {/* Header */}

                <div className="flex items-center gap-3 border-b border-gray-200 px-6 py-5 dark:border-gray-800">

                    <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">

                        <AlertTriangle

                            size={24}

                            className="text-red-600"

                        />

                    </div>

                    <div>

                        <h2 className="text-lg font-semibold">

                            Delete Task

                        </h2>

                        <p className="text-sm text-gray-500">

                            This action cannot be undone.

                        </p>

                    </div>

                </div>

                {/* Body */}

                <div className="px-6 py-5">

                    <p className="text-gray-700 dark:text-gray-300">

                        Are you sure you want to delete

                        <span className="mx-1 font-semibold">

                            "{task?.title}"

                        </span>

                        ?

                    </p>

                </div>

                {/* Footer */}

                <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4 dark:border-gray-800">

                    <button

                        type="button"

                        onClick={onClose}

                        disabled={loading}

                        className="rounded-lg border border-gray-300 px-5 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800"

                    >

                        Cancel

                    </button>

                    <button

                        type="button"

                        onClick={handleDelete}

                        disabled={loading}

                        className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"

                    >

                        {

                            loading && (

                                <Loader2

                                    size={18}

                                    className="animate-spin"

                                />

                            )

                        }

                        {

                            loading

                                ? "Deleting..."

                                : "Delete Task"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

}