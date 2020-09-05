import React from 'react';
import AddTask from './AddTask/AddTask';
import AllTasks from './AllTasks/AllTasks';
import Archive from './Archive/Archive';
import './MainContainer.css'

const MainContainer = ({ activePage }) => {
    let pageToDisplay = <AddTask />
        if (activePage === 'addtask') {
            pageToDisplay = <AddTask />
        }
        else if (activePage === 'alltasks') {
            pageToDisplay = <AllTasks />
        }
        else if (activePage === 'archive') {
            pageToDisplay = <Archive />
        }
        else {
            pageToDisplay = 'hi'
        }
    console.log(activePage)
        return (
            <div className="main-container">
            {pageToDisplay}
            </div>
        )
}

export default MainContainer