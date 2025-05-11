import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import styles from "./DashboardLayout.module.css";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.sideBar}>
        <Sidebar />
      </div>
      <main className={styles.mainContent}>
        <Header />
        <div className={styles.pageContent}>{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
