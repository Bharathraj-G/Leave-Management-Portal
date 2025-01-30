import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginCard.module.css";

export type LoginCardType = {
  className?: string;
};

const LoginCard: FunctionComponent<LoginCardType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={[styles.loginCard, className].join(" ")}>
      <div className={styles.loginContainer}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1@2x.png"
        />
        <h2 className={styles.leaveManagementPortal}>
          Leave Management Portal
        </h2>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.alertCircleParent}>
          <img
            className={styles.alertCircleIcon}
            loading="lazy"
            alt=""
            src="/alertcircle.svg"
          />
          <div className={styles.alertMessage}>
            <div className={styles.alertMessage}>
              <div className={styles.pleaseUseYour}>
                Please use your Bitsathy Mail ID
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.signInButtonContainerWrapper}
          onClick={onFrameContainerClick}
        >
          <div className={styles.signInButtonContainer}>
            <div className={styles.signIn}>Sign in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
