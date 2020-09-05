import React, { useContext } from 'react';

import { Card, Button } from 'antd';
import { TasksContext } from '../../TasksContext';


const Task = (props) => {
    console.log(props)
const [tasks, setTasks] = useContext(TasksContext)
    
const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks)
  }
  

    return (
      <>
         <Card title={props.title} style={{ width: 300, margin: 10 }}>
            {props.description}
            <br />
            <Button type="primary" onClick={() => deleteTask(props.id)}>Delete Task</Button>
        </Card>
      </>
    );
}


export default Task;