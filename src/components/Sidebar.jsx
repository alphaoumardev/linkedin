import React from 'react';
import '../css/sidebar.css'
import {Avatar} from "@mui/material";

const Sidebar = () =>
{
    const recentItem =(topic)=>
    (
        <div className="recentItems">
            <p className="hash">#</p>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebarTop">
                <img src="https://source.unsplash.com/1600x900/?nature,photography,technology,sport" alt="" />

                <Avatar className="avatar"/>
                <h2>Alpha</h2>
                <h4>alphaoumardev@outlook.com</h4>
            </div>
            <div className="sidebarStats">
                <div className="stat">
                    <p>Who viewed your</p>
                    <p className="statNumber">13,324</p>
                </div>
                <div className="stat">
                    <p>Views on post</p>
                    <p className="statNumber">13,834</p>
                </div>
            </div>
            <div className="sidebarBotton">
                <p>Recent</p>
                {recentItem("programing")}
                {recentItem("softwareengineering")}
                {recentItem("reactjs")}
                {recentItem("vuejs")}
                {recentItem("nextjs")}
                {recentItem("python")}
                {recentItem("java")}
                {recentItem("javascript")}
                {recentItem("mongo")}
                {recentItem("mysql")}
            </div>
        </div>
    );
}

export default Sidebar;
