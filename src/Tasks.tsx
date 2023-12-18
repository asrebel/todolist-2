import React from "react";


type TasksPropsType = {
   tasks: TasksType[]
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}


export const Tasks = (props: TasksPropsType) => {
     props.tasks.map((el) => {
        return (
            <li key={el.id}>
                <input type='checkbox' checked={el.isDone}/>
                <span>{el.title}</span>
            </li>
        )
    })

}