import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar" role="menu" aria-label="Denver Covid-19 Visualization Options">
        <div>
          <h1 className="title">Denver Covid-19 Dashboard</h1>
        </div>
        <div>
          <Link to="/" role="none">
            <h4 className="option" role="menuitem">Daily Snapshot</h4>
          </Link>
          <h4 className="option">Case Summary</h4>
          <ul className="sub-list" value="Case Summary" role="menuitem">
            <Link to="/daily-cases">
              <li className="sub-option" role="menuitem" aria-label="Daily Cases">Cases</li>
            </Link>
            <Link to="/daily-tested">
              <li className="sub-option" role="menuitem" aria-label="Daily Tested">Tested</li>
            </Link>
            <Link to="/daily-hosp">
              <li className="sub-option" role="menuitem" aria-label="Daily Hospitalized">Hospitalized</li>
            </Link>
            <Link to="/daily-deaths">
              <li className="sub-option" role="menuitem" aria-label="Daily Deaths">Deaths</li>
            </Link>
          </ul>
        </div>
    </nav>
  );
};

export default Sidebar;