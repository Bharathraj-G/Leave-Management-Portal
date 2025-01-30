import { FunctionComponent } from "react";
import styles from "./FieldLabels.module.css";

export type FieldLabelsType = {
  className?: string;
  leaveType?: string;
  selectLeaveType?: string;
  arrowDropDown?: string;
};

const FieldLabels: FunctionComponent<FieldLabelsType> = ({
  className = "",
  leaveType,
  selectLeaveType,
  arrowDropDown,
}) => {
  return (
    <div className={[styles.fieldLabels, className].join(" ")}>
      <div className={styles.leaveTypeContainer}>
        <span>{leaveType}</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.span1}>*</span>
      </div>
      <div className={styles.fieldInputs}>
        <div className={styles.reasonField}>
          <div className={styles.attachmentField}>
            <div className={styles.selectLeaveType}>{selectLeaveType}</div>
          </div>
          <img
            className={styles.arrowDropDownIcon}
            alt=""
            src={arrowDropDown}
          />
        </div>
      </div>
    </div>
  );
};

export default FieldLabels;
