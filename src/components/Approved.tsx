import { FunctionComponent } from "react";
import styles from "./Approved.module.css";

export type ApprovedType = {
  className?: string;
};

const Approved: FunctionComponent<ApprovedType> = ({ className = "" }) => {
  return (
    <button className={[styles.approved, className].join(" ")}>
      <div className={styles.approved1}>Approved</div>
    </button>
  );
};

export default Approved;
