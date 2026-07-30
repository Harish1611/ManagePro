import {

    useEffect,

} from "react";

import {

    useForm,

} from "react-hook-form";

import {

    yupResolver,

} from "@hookform/resolvers/yup";

import {

    taskSchema,

} from "@/validation/taskValidation";


const defaultValues = {

    title: "",

    description: "",

    project: "",

    assignedTo: "",

    priority: "Medium",

    status: "Todo",

    dueDate: "",

};


export default function useTaskForm(

    task = null

) {

    const form = useForm({

        resolver: yupResolver(

            taskSchema

        ),

        defaultValues,

    });


    const {

        reset,

    } = form;


    /*
    |--------------------------------------------------------------------------
    | Create / Edit Values
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (!task) {

            reset(

                defaultValues

            );

            return;

        }


        reset({

            title:

                task.title || "",

            description:

                task.description || "",

            project:

                task.project?._id ||

                task.project ||

                "",

            assignedTo:

                task.assignedTo?._id ||

                task.assignedTo ||

                "",

            priority:

                task.priority ||

                "Medium",

            status:

                task.status ||

                "Todo",

            dueDate:

                task.dueDate

                    ? task.dueDate.slice(

                        0,

                        10

                    )

                    : "",

        });

    }, [

        task,

        reset,

    ]);


    return form;

}