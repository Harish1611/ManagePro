import { useEffect, useMemo, useState } from "react";

import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";

import useProjects from "@/hooks/useProjects";
import useUsers from "@/hooks/useUsers";

export default function ProjectMembersModal({

    open,

    onClose,

    project,

}) {

    const {

        projectMembers,

        fetchProjectMembers,

        addProjectMembers,

        removeProjectMember,

        loading,

    } = useProjects();

const {
    users = [],
    fetchUsers,
} = useUsers();

    /*
    |--------------------------------------------------------------------------
    | Selected Users
    |--------------------------------------------------------------------------
    */

    const [

        selectedUsers,

        setSelectedUsers,

    ] = useState([]);

    /*
    |--------------------------------------------------------------------------
    | Load Data
    |--------------------------------------------------------------------------
    */

useEffect(() => {

    console.log("Modal Open:", open);
    console.log("Project:", project);
    console.log("Calling fetchUsers...");

    if (!open || !project?._id) return;

    fetchProjectMembers(project._id);
    fetchUsers();

    setSelectedUsers([]);

}, [open, project]);

    /*
    |--------------------------------------------------------------------------
    | Available Users
    |--------------------------------------------------------------------------
    */

    const availableUsers = useMemo(() => {

        const memberIds = new Set(

            projectMembers.map(
                (member) => member._id
            )

        );

        return users.filter(

            (user) =>
                !memberIds.has(
                    user._id
                )

        );

    }, [

        users,

        projectMembers,

    ]);

    /*
    |--------------------------------------------------------------------------
    | Toggle Checkbox
    |--------------------------------------------------------------------------
    */

    const toggleUser = (userId) => {

        setSelectedUsers((prev) =>

            prev.includes(userId)

                ? prev.filter(
                    (id) =>
                        id !== userId
                )

                : [
                    ...prev,
                    userId,
                ]

        );

    };

    /*
    |--------------------------------------------------------------------------
    | Add Members
    |--------------------------------------------------------------------------
    */

    const handleAddMembers =
        async () => {

            if (
                selectedUsers.length === 0
            )
                return;

            await addProjectMembers(

                project._id,

                selectedUsers

            );

            setSelectedUsers([]);

        };

    /*
    |--------------------------------------------------------------------------
    | Remove Member
    |--------------------------------------------------------------------------
    */

    const handleRemove =
        async (userId) => {

            await removeProjectMember(

                project._id,

                userId

            );

        };

        if (!open || !project) {
    return null;
}

    return (

        <Modal

            open={open}

            onClose={onClose}

            title="Project Members"

            loading={loading}

        >

            <div className="space-y-8">

                {/* -------------------------------- */}

                <div>

                    <h3 className="mb-4 text-lg font-semibold">

                        Current Members

                    </h3>

                    <div className="space-y-3">

                        {

                            projectMembers.map(
                                (member) => (

                                    <div

                                        key={
                                            member._id
                                        }

                                        className="flex items-center justify-between rounded-lg border p-3"

                                    >

                                        <div className="flex items-center gap-3">

                                            <img

                                                src={
                                                    member.avatar ||

                                                    `https://ui-avatars.com/api/?name=${member.name}`
                                                }

                                                alt=""

                                                className="h-10 w-10 rounded-full"

                                            />

                                            <div>

                                                <p className="font-medium">

                                                    {
                                                        member.name
                                                    }

                                                </p>

                                                <p className="text-sm text-gray-500">

                                                    {
                                                        member.email
                                                    }

                                                </p>

                                            </div>

                                        </div>

                                        {

                                            project.owner?._id ===
                                                member._id

                                                ? (

                                                    <span className="rounded bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">

                                                        Owner

                                                    </span>

                                                )

                                                : (

                                                    <Button

                                                        size="sm"

                                                        variant="danger"

                                                        onClick={() =>
                                                            handleRemove(
                                                                member._id
                                                            )
                                                        }

                                                    >

                                                        Remove

                                                    </Button>

                                                )

                                        }

                                    </div>

                                )

                            )

                        }

                    </div>

                </div>

                {/* -------------------------------- */}

                <div>

                    <h3 className="mb-4 text-lg font-semibold">

                        Available Users

                    </h3>

                    {

                        availableUsers.length === 0

                            ? (

                                <div className="rounded-lg border border-dashed p-6 text-center text-gray-500">

                                    No users available

                                </div>

                            )

                            : (

                                <div className="space-y-2 rounded-lg border p-4">

                                    {

                                        availableUsers.map(
                                            (user) => (

                                                <label

                                                    key={
                                                        user._id
                                                    }

                                                    className="flex cursor-pointer items-center gap-3 rounded p-2 hover:bg-gray-50"

                                                >

                                                    <input

                                                        type="checkbox"

                                                        checked={

                                                            selectedUsers.includes(
                                                                user._id
                                                            )

                                                        }

                                                        onChange={() =>
                                                            toggleUser(
                                                                user._id
                                                            )
                                                        }

                                                    />

                                                    <img

                                                        src={
                                                            user.avatar ||

                                                            `https://ui-avatars.com/api/?name=${user.name}`
                                                        }

                                                        alt=""

                                                        className="h-9 w-9 rounded-full"

                                                    />

                                                    <div>

                                                        <p className="font-medium">

                                                            {
                                                                user.name
                                                            }

                                                        </p>

                                                        <p className="text-sm text-gray-500">

                                                            {
                                                                user.email
                                                            }

                                                        </p>

                                                    </div>

                                                </label>

                                            )

                                        )

                                    }

                                </div>

                            )

                    }

                    <div className="mt-6 flex justify-end">

                        <Button

                            disabled={
                                selectedUsers.length === 0 ||
                                loading
                            }

                            onClick={
                                handleAddMembers
                            }

                        >

                            Add Selected
                            {" "}
                            (
                            {
                                selectedUsers.length
                            }
                            )

                        </Button>

                    </div>

                </div>

            </div>

        </Modal>

    );

}