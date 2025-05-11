import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

import HomeIcon from "../../assets/icons/dashboard.svg";
import ReportIcon from "../../assets/icons/report.svg";
import SettingsIcon from "../../assets/icons/settings.svg";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      setCollapsed(isMobileView);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <img src={HomeIcon} alt="Dashboard Icon" height={20} />,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: <img src={ReportIcon} alt="Reports Icon" height={20} />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <img src={SettingsIcon} alt="Settings Icon" height={20} />,
    },
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.logo}>
        {collapsed && <div className={styles.logoText}>SS</div>}
        {!collapsed && <span className={styles.logoText}>SentiSum</span>}
      </div>

      <nav className={styles.menu}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ""}`
            }
          >
            <span className={styles.icon}>{item.icon}</span>
            {!collapsed && <span className={styles.label}>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {!isMobile && (
        <button
          className={styles.collapseButton}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? "⫸" : "⫷"}
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
