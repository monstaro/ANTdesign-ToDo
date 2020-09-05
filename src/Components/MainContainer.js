import React from 'react';
import AddTask from './AddTask/AddTask';
import AllTasks from './AllTasks/AllTasks';
import './MainContainer.css'

const MainContainer = ({ activePage }) => {
    let pageToDisplay = <AddTask />
        if (activePage === 'addtask') {
            pageToDisplay = <AddTask />
        }
        else if (activePage === 'alltasks') {
            pageToDisplay = <AllTasks />
        }
        return (
            <div className="main-container">
            {pageToDisplay}
            </div>
        )
}

export default MainContainer