import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar">
        <h1 className="title">Covid-19 Dashboard</h1>
        <Link to="/">
          <h4 className="option">Daily Snapshot</h4>
        </Link>
        <h4 className="option">Case Summary</h4>
        <ul className="sub-list" value="Case Summary">
          <Link to="/daily-cases">
            <li className="sub-option">Cases</li>
          </Link>
          <Link to="/daily-tested">
            <li className="sub-option">Tested</li>
          </Link>
          <Link to="/daily-hosp">
            <li className="sub-option">Hospitalized</li>
          </Link>
          <Link to="/daily-deaths">
            <li className="sub-option">Deaths</li>
          </Link>
        </ul>
    </section>
  );
};

export default Sidebar;