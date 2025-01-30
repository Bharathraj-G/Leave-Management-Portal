import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header1.module.css";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
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
        <div className={styles.leaveManagementPortalWrapper}>
          <a className={styles.leaveManagementPortal}>
            Leave Management Portal
          </a>
        </div>
      </div>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          <div className={styles.dashboardWrapper}>
            <a className={styles.dashboard} onClick={onDashboardTextClick}>
              Dashboard
            </a>
          </div>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.applyButtonBackgroundParent}>
              <div className={styles.applyButtonBackground} />
              <a className={styles.leaveApply}>Leave Apply</a>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.userProfileWrapper}>
        <div className={styles.userProfile}>
          <div className={styles.bharathRajGWrapper}>
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

export default Header1;
