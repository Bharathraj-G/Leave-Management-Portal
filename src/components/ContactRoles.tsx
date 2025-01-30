import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContactRoles.module.css";

export type ContactRolesType = {
  className?: string;
  classAdvisor?: string;
  drMalathiM?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ContactRoles: FunctionComponent<ContactRolesType> = ({
  className = "",
  classAdvisor,
  propMinWidth,
  drMalathiM,
  propMinWidth1,
}) => {
  const classAdvisor1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const drMalathiMStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.contactRoles, className].join(" ")}>
      <div className={styles.roleNames}>
        <div className={styles.classAdvisor} style={classAdvisor1Style}>
          {classAdvisor}
        </div>
        <div className={styles.drMalathiMParent}>
          <div className={styles.drMalathiM} style={drMalathiMStyle}>
            {drMalathiM}
          </div>
          <div className={styles.emptyContact}>(12345)</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <button className={styles.phoneForwardedParent}>
          <img
            className={styles.phoneForwardedIcon}
            alt=""
            src="/phone-forwarded.svg"
          />
          <div className={styles.callButtons}>
            <div className={styles.call}>Call</div>
          </div>
        </button>
        <button className={styles.forwardToInboxParent}>
          <img
            className={styles.phoneForwardedIcon}
            alt=""
            src="/forward-to-inbox.svg"
          />
          <div className={styles.callButtons}>
            <div className={styles.mail}>Mail</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactRoles;
