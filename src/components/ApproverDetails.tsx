import { FunctionComponent } from "react";
import styles from "./ApproverDetails.module.css";

export type ApproverDetailsType = {
  className?: string;
  leaveType?: string;
  selectLeaveType?: string;
  arrowDropDown?: string;
};

const ApproverDetails: FunctionComponent<ApproverDetailsType> = ({
  className = "",
  leaveType,
  selectLeaveType,
  arrowDropDown,
}) => {
  return (
    <div className={[styles.approverDetails, className].join(" ")}>
      <div className={styles.leaveTypeContainer}>
        <span>{leaveType}</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.span1}>*</span>
      </div>
      <div className={styles.approvers}>
        <div className={styles.approver}>
          <div className={styles.dropdown}>
            <div className={styles.leaveTypeContainer}>{selectLeaveType}</div>
          </div>
          <img
            className={styles.arrowDropDownIcon}
            loading="lazy"
            alt=""
            src={arrowDropDown}
          />
        </div>
      </div>
    </div>
  );
};

export default ApproverDetails;
