import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/leave-apply");
  }, [navigate]);

  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.bannariAmmanInstituteOfTecParent}>
        <img
          className={styles.bannariAmmanInstituteOfTecIcon}
          loading="lazy"
          alt=""
          src="/bannari-amman-institute-of-technology-logo-1@2x.png"
        />
        <div className={styles.portalTitle}>
          <a className={styles.leaveManagementPortal}>
            Leave Management Portal
          </a>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navbar}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <a className={styles.dashboard}>Dashboard</a>
          </button>
          <div
            className={styles.rectangleGroup}
            onClick={onGroupContainerClick}
          >
            <div className={styles.frameItem} />
            <a className={styles.leaveApply}>Leave Apply</a>
          </div>
        </div>
      </div>
      <div className={styles.userWrapper}>
        <div className={styles.user}>
          <div className={styles.userDetails}>
            <a className={styles.bharathRajG}>Bharath Raj G</a>
          </div>
          <div className={styles.photo}>
            <a className={styles.bharathRajG1}>Bharath Raj G</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
