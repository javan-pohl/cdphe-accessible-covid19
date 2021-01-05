import React from "react";
import { Nav } from "tabler-react";
import './DropdownSidebar.css'

const DropdownSidebar = () => {
  return (
    <Nav className="sidebar">
        <h1 className="title">Dashboard</h1>
        <Nav.Item hasSubNav value="Case Summary">
            <Nav.SubItem value="Cases" />
            <Nav.SubItem value="Tested" />
            <Nav.SubItem value="Hospitalized" />
            <Nav.SubItem value="Deaths" />
        </Nav.Item>
        <Nav.Item to="">Daily Snapshot</Nav.Item>
    </Nav>
  );
};

export default DropdownSidebar;