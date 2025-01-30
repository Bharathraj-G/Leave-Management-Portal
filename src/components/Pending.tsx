import { FunctionComponent } from "react";
import styles from "./Pending.module.css";

export type PendingType = {
  className?: string;
};

const Pending: FunctionComponent<PendingType> = ({ className = "" }) => {
  return (
    <button className={[styles.pending, className].join(" ")}>
      <div className={styles.approved}>
        <div className={styles.approved1}>Pending</div>
      </div>
    </button>
  );
};

export default Pending;
