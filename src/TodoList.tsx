import React from 'react';
import Button from "./Button";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}


export const TodoList: React.FC<TodoListPropsType> = (
    {
        title,
        tasks
    }) => {


    const tasksItems: JSX.Element = tasks.length !== 0
        ? <ul>
            {tasks.map(task => {
                return (
                    <li key={task.id}>
                        <input type='checkbox' checked={task.isDone}/>
                        <span>{task.title}</span>
                    </li>
                )
            })}
        </ul>
        : <span>Buy buy!</span>


    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title='+'/>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <Button title='All'/>
                <Button title='Active'/>
                <Button title='Completed'/>
            </div>
        </div>
    );
};

