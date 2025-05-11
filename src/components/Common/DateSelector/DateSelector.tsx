import { useState } from "react";
import styles from "./DateSelector.module.css";
import { FiCalendar, FiChevronDown, FiLock, FiUnlock } from "react-icons/fi";

const DateSelector = () => {
  const [locked, setLocked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.selector}>
        <FiCalendar />
        <span>01 - 08 Oct, 2023</span>
        <FiChevronDown />
      </div>

      <div className={styles.selector}>
        <span>Comparing To: 24 Sep - 01 Oct, 2023</span>
        <FiChevronDown />
      </div>

      <div className={styles.selector}>
        <span>Daily</span>
        <FiChevronDown />
      </div>

      <div className={styles.lock} onClick={() => setLocked(!locked)}>
        {locked ? <FiLock /> : <FiUnlock />}
      </div>
    </div>
  );
};

export default DateSelector;
