import {

    useEffect,

} from "react";

import {

    X,

} from "lucide-react";

import {

    useDispatch,

    useSelector,

} from "react-redux";

import { toast } from "react-hot-toast";

import useTaskForm from "@/hooks/useTaskForm";

import {

    createTask,

    updateTask,

} from "@/redux/slices/taskSlice";

import {

    selectProjects,

} from "@/redux/slices/projectSlice";
import useProjectMembers from "@/hooks/useProjectMembers";
export default function TaskModal({

    open,

    task,

    loading,

    onClose,

}) {

    const dispatch = useDispatch();

    const projects = useSelector(

        selectProjects

    );

   const {

    register,

    handleSubmit,

    reset,

    watch,

    formState: {
        errors,
    },

} = useTaskForm(task);

    const {

    members,

    loading: membersLoading,

    fetchMembers,

    clearMembers,

} = useProjectMembers();
const selectedProject = watch("project");

useEffect(() => {

    if (!selectedProject) {

        clearMembers();

        return;

    }

    fetchMembers(selectedProject);

}, [

    selectedProject,

    fetchMembers,

    clearMembers,

]);

    /*
    |--------------------------------------------------------------------------
    | Reset Form
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (!open) {

            reset();

        }

    }, [

        open,

        reset,

    ]);

    /*
    |--------------------------------------------------------------------------
    | Submit
    |--------------------------------------------------------------------------
    */

    const onSubmit = async (data) => {

        try {

            if (task) {

                await dispatch(

                    updateTask({

                        taskId: task._id,

                        taskData: data,

                    })

                ).unwrap();

                toast.success(

                    "Task updated successfully"

                );

            }

            else {

                await dispatch(

                    createTask(data)

                ).unwrap();

                toast.success(

                    "Task created successfully"

                );

            }

            onClose();

        }

        catch (error) {

            toast.error(error);

        }

    };

    if (!open) {

        return null;

    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl dark:bg-gray-900">

                {/* Header */}

                <div className="flex items-center justify-between border-b px-6 py-4 dark:border-gray-800">

                    <h2 className="text-xl font-semibold">

                        {

                            task

                                ? "Edit Task"

                                : "Create Task"

                        }

                    </h2>

                    <button

                        onClick={onClose}

                    >

                        <X size={22} />

                    </button>

                </div>

                {/* Body */}

                <form

                    onSubmit={handleSubmit(onSubmit)}

                >

                    <div className="grid gap-5 p-6 md:grid-cols-2">

                        {/* Title */}

                        <div className="md:col-span-2">

                            <label className="mb-2 block">

                                Title

                            </label>

                            <input

                                {...register("title")}

                                className="w-full rounded-lg border px-4 py-2 dark:border-gray-700 dark:bg-gray-800"

                            />

                            <p className="mt-1 text-sm text-red-500">

                                {

                                    errors.title?.message

                                }

                            </p>

                        </div>

                        {/* Description */}

                        <div className="md:col-span-2">

                            <label className="mb-2 block">

                                Description

                            </label>

                            <textarea

                                rows={4}

                                {...register("description")}

                                className="w-full rounded-lg border px-4 py-2 dark:border-gray-700 dark:bg-gray-800"

                            />

                            <p className="mt-1 text-sm text-red-500">

                                {

                                    errors.description?.message

                                }

                            </p>

                        </div>

                        {/* Project */}

                        <div>

                            <label className="mb-2 block">

                                Project

                            </label>

                            <select

                                {...register("project")}

                                className="w-full rounded-lg border px-4 py-2 dark:border-gray-700 dark:bg-gray-800"

                            >

                                <option value="">

                                    Select Project

                                </option>

                                {

                                    projects.map(

                                        (project) => (

                                            <option

                                                key={project._id}

                                                value={project._id}

                                            >

                                                {

                                                    project.name

                                                }

                                            </option>

                                        )

                                    )

                                }

                            </select>

                            <p className="mt-1 text-sm text-red-500">

                                {

                                    errors.project?.message

                                }

                            </p>

                        </div>

                        {/* Assigned User */}

<div>

    <label className="mb-2 block">

        Assign To

    </label>

    <select

        {...register("assignedTo")}

        disabled={!selectedProject || membersLoading}

        className="w-full rounded-lg border px-4 py-2 disabled:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:disabled:bg-gray-900"

    >

        <option value="">

            {

                membersLoading

                    ? "Loading members..."

                    : selectedProject

                        ? "Select Member"

                        : "Select Project First"

            }

        </option>

        {

            members.map((member) => (

                <option

                    key={member._id}

                    value={member._id}

                >

                    {member.name}

                </option>

            ))

        }

    </select>

    <p className="mt-1 text-sm text-red-500">

        {errors.assignedTo?.message}

    </p>

</div>

                        {/* Priority */}

                        <div>

                            <label className="mb-2 block">

                                Priority

                            </label>

                            <select

                                {...register("priority")}

                                className="w-full rounded-lg border px-4 py-2 dark:border-gray-700 dark:bg-gray-800"

                            >

                                <option>

                                    Low

                                </option>

                                <option>

                                    Medium

                                </option>

                                <option>

                                    High

                                </option>

                                 <option>

                                    Critical

                                </option>

                            </select>

                        </div>

                        {/* Status */}

                        <div>

                            <label className="mb-2 block">

                                Status

                            </label>

                            <select

                                {...register("status")}

                                className="w-full rounded-lg border px-4 py-2 dark:border-gray-700 dark:bg-gray-800"

                            >

                                <option>

                                    Todo

                                </option>

                                <option>

                                    In Progress

                                </option>

                                <option>

                                    Review

                                </option>

                                <option>

                                    Done

                                </option>

                            </select>

                        </div>

                        {/* Due Date */}

                        <div>

                            <label className="mb-2 block">

                                Due Date

                            </label>

                            <input

                                type="date"

                                {...register("dueDate")}

                                className="w-full rounded-lg border px-4 py-2 dark:border-gray-700 dark:bg-gray-800"

                            />

                        </div>

                    </div>

                    {/* Footer */}

                    <div className="flex justify-end gap-3 border-t px-6 py-4 dark:border-gray-800">

                        <button

                            type="button"

                            onClick={onClose}

                            disabled={loading}

                            className="rounded-lg border px-5 py-2"

                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            disabled={loading}

                            className="rounded-lg bg-blue-600 px-6 py-2 text-white disabled:opacity-50"

                        >

                            {

                                loading

                                    ? "Saving..."

                                    : task

                                        ? "Update Task"

                                        : "Create Task"

                            }

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}