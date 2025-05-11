import type { ReactNode } from "react";
import styles from "./Card.module.css";
interface DashboardLayoutProps {
  children: ReactNode;
}

const Card = ({ children }: DashboardLayoutProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;
