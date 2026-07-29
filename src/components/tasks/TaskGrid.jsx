
import TaskCard from "./TaskCard";

export default function TaskGrid({

    tasks,

    onEdit,

    onDelete,

}) {

    return (

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

            {

                tasks.map((task) => (

                    <TaskCard

                        key={task._id}

                        task={task}

                        onEdit={onEdit}

                        onDelete={onDelete}

                    />

                ))

            }

        </div>

    );

}