import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { FiSearch, FiDownload, FiPlus, FiEdit, FiShare2 } from "react-icons/fi";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [title, setTitle] = useState("Customer");
  const [isEditing, setIsEditing] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleExport = () => {
    // Implement export logic
    alert("Exporting to Excel...");
  };

  const handleCreate = () => {
    // Implement create logic
    alert("Create new entry");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      {!searchActive ? (
        <div className={styles.left}>
          {isEditing ? (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setIsEditing(false)}
              autoFocus
              className={styles.editInput}
            />
          ) : (
            <h1 onClick={() => setIsEditing(true)} className={styles.title}>
              <span className={styles.titleText}>{title}</span>
              <FiEdit />
            </h1>
          )}
        </div>
      ) : (
        <div className={styles.searchBarMobile}>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            autoFocus
          />
          <button onClick={() => setSearchActive(false)}>✖</button>
        </div>
      )}

      {!isMobile ? (
        <div className={styles.right}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className={styles.actions}>
            <div
              className={`${styles.actionItem} ${styles.export}`}
              title="Export data to Excel"
              onClick={handleExport}
            >
              <FiDownload />
              <span className={styles.label}>Export</span>
            </div>

            <div
              className={`${styles.actionItem} ${styles.create}`}
              title="Create a new entry"
              onClick={handleCreate}
            >
              <FiPlus />
              <span className={styles.label}>Create</span>
            </div>

            <div
              className={`${styles.actionItem} ${styles.share}`}
              title="Share this data"
              onClick={() => alert("Share functionality")}
            >
              <FiShare2 />
              <span className={styles.label}>Share</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.right}>
          <button
            className={styles.iconBtn}
            onClick={() => setSearchActive(true)}
          >
            <FiSearch />
          </button>

          <button
            className={styles.iconBtn}
            onClick={() => {
              alert("Export to Excel");
            }}
            onTouchStart={() => alert("Export data to Excel")}
          >
            <FiDownload />
          </button>

          <button
            className={styles.iconBtn}
            onClick={() => {
              alert("Create new entry");
            }}
            onTouchStart={() => alert("Create new entry")}
          >
            <FiPlus />
          </button>
          <button
            className={styles.iconBtn}
            onClick={() => {
              alert("Share");
            }}
            onTouchStart={() => alert("Share")}
          >
            <FiShare2 />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
