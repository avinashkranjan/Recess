import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css'
function Sidebar() {
    const recentItems =(topic)=>(
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://wallpapercave.com/wp/wp7864479.png" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>
                    Dummy Data
                </h2>
                <h4>dummyy@gmail.com</h4>
            </div>
            <div className="sidebar__bottom">
                <p>Topics</p>
                {recentItems('reactjs')}
                {recentItems('programming')}
                {recentItems('Software Engineering')}
                {recentItems('Design')}
                {recentItems('Developer')}
            </div>
        </div>
    );
}

export default Sidebar
