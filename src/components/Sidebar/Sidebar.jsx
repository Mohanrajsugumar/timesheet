import React from "react";
import "./Sidebar.css";
import {
    LineStyle,
    Timeline,
    AddTask,
    Person,
    Storefront,
    PunchClock,
    Assessment,
    MailOutline,
    Message,
    Assignment,
    DynamicFeed,
    WorkOutline,
    AssignmentTurnedIn,
    Error,
  } from "@mui/icons-material";
  import { Link } from "react-router-dom";
  

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          <Link to="/" className="userlink">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
          </Link>
    
        </ul>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
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
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Apply Leave</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <MailOutline className="sidebarIcon" />
            Mail
          </li>
          <li className="sidebarListItem">
            <DynamicFeed className="sidebarIcon" />
            Feedback
          </li>
          <li className="sidebarListItem">
            <Message className="sidebarIcon" />
            Messages
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <WorkOutline className="sidebarIcon" />
            Manage
          </li>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <Error className="sidebarIcon" />
            Report
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}
