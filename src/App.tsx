import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

function App() {

    const tasks: Array<TaskType> = [
        {id: 1, title: 'HTML', isDone: false},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'JS/TS', isDone: true},
        {id: 4, title: 'React', isDone: true},

    ]

    const todoListTitle = 'What to learn'

    return (
        <div className="App">
            <TodoList title={todoListTitle}
                      tasks={tasks}
            />
        </div>
    );
}

export default App;
