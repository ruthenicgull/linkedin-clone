import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';

function Sidebar() {

  const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
      <div className="sidebar_top">
        <img src="https://bggenerator.com/images/colorful3.jpg" alt="avatar bg" />
        <Avatar src="" className='sidebar_avatar'/>
        <h2>Catchy Fisher</h2>
        <h4>cfisher@bikinibottom.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>6,207</p>
        </div>
        <div className="sidebar_stat">
            <p>Views on post</p>
            <p className='sidebar_statNumber'>2,532</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar
