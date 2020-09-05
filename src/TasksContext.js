import React, { useState, createContext } from 'react';

export const TasksContext = createContext();

export const TasksProvider = props => {
    const [tasks, setTasks] = useState([
        {
            title: 'Task 1',
            description: 'Desc 1',
            urgency: 0,
            id: 123
        },
        {
            title: 'Task 2',
            description: 'Desc 2',
            urgency: 0,
            id: 124
        }
    ])
    return (
        <TasksContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TasksContext.Provider>
    )
}

