import React from "react";
import { Nav } from "tabler-react";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <Nav className="sidebar">
        <Nav.Item hasSubNav value="Case Summary">
            <Nav.SubItem value="Cases" />
            <Nav.SubItem value="Tested" />
            <Nav.SubItem value="Hospitalized" />
            <Nav.SubItem value="Deaths" />
        </Nav.Item>
        <Nav.Item to="http://www.example.com">Daily Snapshot</Nav.Item>
    </Nav>
  );
};

export default Sidebar;