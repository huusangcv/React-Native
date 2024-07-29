import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import "./Admin.scss";
import { useState } from "react";
const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <div className="btn-toggle">
          <FaBars
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
