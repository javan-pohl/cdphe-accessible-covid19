import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar" role="menu" aria-label="Denver Covid-19 Visualization Options">
        <h1 className="title">Colorado Covid-19 Dashboard</h1>
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
        <h4 className="option">Vaccine Summary</h4>
        <ul className="sub-list" value="Vaccine Summary" role="menuitem">
          <Link to="/vaccine-all">
            <li className="sub-option" role="menuitem" aria-label="Vaccine Summary All">All Vaccines</li>
          </Link>
          <Link to="/vaccine-jnj">
            <li className="sub-option" role="menuitem" aria-label="Vaccine Summary Johnson & Johnson">Johnson & Johnson Vaccines</li>
          </Link>
          <Link to="/vaccine-pfizer">
            <li className="sub-option" role="menuitem" aria-label="Vaccine Summary Pfizer">Pfizer Vaccines</li>
          </Link>
          <Link to="/vaccine-moderna">
            <li className="sub-option" role="menuitem" aria-label="Vaccine Summary Moderna">Moderna Vaccines</li>
          </Link>
          <Link to="/vaccine-unspecified">
            <li className="sub-option" role="menuitem" aria-label="Vaccine Summary Unspecified">Unspecified Vaccines</li>
          </Link>
        </ul>
    </nav>
  );
};

export default Sidebar;