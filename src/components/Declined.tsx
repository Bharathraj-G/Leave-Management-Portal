import { FunctionComponent } from "react";
import styles from "./Declined.module.css";

export type DeclinedType = {
  className?: string;
};

const Declined: FunctionComponent<DeclinedType> = ({ className = "" }) => {
  return (
    <button className={[styles.declined, className].join(" ")}>
      <div className={styles.approved}>
        <div className={styles.approved1}>Declined</div>
      </div>
    </button>
  );
};

export default Declined;
