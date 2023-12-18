import React from "react";
import {Tasks} from "./Tasks";

type TodolistPropsType = {
    truck: string
    tasks: TasksType[]
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3> {props.truck} </h3>
            <div>
                <input/>
                <button>+</button>

            </div>

            <Tasks tasks={props.tasks}/>

            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

