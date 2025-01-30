import { FunctionComponent, useCallback } from "react";
import styles from "./LoginPage.module.css";

const LoginPage: FunctionComponent = () => {
  const onBUTNSignInClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.frameParent}>
          <div className={styles.logoParent}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt="Company Logo"
              src="/logo@2x.png"
            />
            <h3 className={styles.leaveManagementPortal}>
              Leave Management Portal
            </h3>
          </div>
          <div className={styles.alertMessageParent}>
            <div className={styles.alertMessage}>
              <input 
                className={styles.alertSquare} 
                type="checkbox" 
                aria-label="Confirm using bitsathy mail"
              />
              <div className={styles.pleaseUseYour}>
                Please use your bitsathy mail id
              </div>
            </div>
            <button 
              className={styles.butnSignIn} 
              onClick={onBUTNSignInClick}
              type="button"
            >
              <div className={styles.signInWith}>Sign in with google</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;