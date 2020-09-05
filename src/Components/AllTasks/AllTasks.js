import React, { useContext } from 'react';
import './AllTasks.css';
import { TasksContext } from '../../TasksContext';
import Task from '../Task/Task';

const AllTasks = () => {
    const [tasks] = useContext(TasksContext)
    console.log(tasks)
    return (

        <div className="tasks-container">
             {tasks.map(task => (
                 <Task 
                  title={task.title}
                  description={task.description} 
                  urgency={task.urgency}
                  id={task.id}
                   />
             ))}
        </div>
    )
}

export default AllTasks