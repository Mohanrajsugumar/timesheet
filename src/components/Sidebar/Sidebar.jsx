import React from "react";
import "./Sidebar.css";
import {
    LineStyle,
    AddTask,
    Person,
    PunchClock,
    Assessment,
    Assignment,
    AssignmentTurnedIn,
  } from "@mui/icons-material";
  import { Link } from "react-router-dom";
  

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
    <div className="sidebarMenu">
        <ul className="sidebarList">
        <Link to="/" className="userlink">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
          </Link>
          <Link to="/user" className="userlink">
            <li className="sidebarListItem active">
              <Person className="sidebarIcon" />
              User
            </li>
          </Link>
          <Link to="/products" className="userlink">
            <li className="sidebarListItem">
              <AddTask className="sidebarIcon" />
              Task
            </li>
          </Link>
          <Link to="/time" className="sidebarListItem">
            <PunchClock className="sidebarIcon" />
            Timesheet
          </Link>
          <li className="sidebarListItem">
            <Assignment className="sidebarIcon" />
            Projects
          </li>
          <li className="sidebarListItem">
            <Assessment className="sidebarIcon" />
            Reports
          </li>
          <Link to="/leave"className="sidebarListItem">
            <AssignmentTurnedIn className="sidebarIcon" />
           Apply Leave 
          </Link>
        </ul>
      </div>
    </div>
  </div>
  );
}
