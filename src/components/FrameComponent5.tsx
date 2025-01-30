import { FunctionComponent } from "react";
import ApproverDetails from "./ApproverDetails";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.approverDetailsParent, className].join(" ")}>
      <ApproverDetails
        leaveType="Leave Type"
        selectLeaveType="Select leave type"
        arrowDropDown="/arrow-drop-down.svg"
      />
      <ApproverDetails
        leaveType="Date"
        selectLeaveType="Select leave date"
        arrowDropDown="/calendar-month.svg"
      />
      <ApproverDetails
        leaveType="Time"
        selectLeaveType="Select leave time"
        arrowDropDown="/calendar-clock.svg"
      />
      <div className={styles.reasonParent}>
        <div className={styles.reason}>
          <span>Reason</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.span1}>*</span>
        </div>
        <div className={styles.reasonInput}>
          <div className={styles.enterAReason}>Enter a reason</div>
        </div>
      </div>
      <div className={styles.reasonParent}>
        <div className={styles.reason}>Attachment</div>
        <div className={styles.uploadParent}>
          <div className={styles.upload}>
            <img
              className={styles.cloudUploadIcon}
              loading="lazy"
              alt=""
              src="/cloud-upload.svg"
            />
          </div>
          <div className={styles.uploadAnImageContainer}>
            <p className={styles.uploadAnImage}>
              Upload an image or file or drag and drop
            </p>
            <p className={styles.uploadAnImage}>PNG, JPG or PDF upto 10MB</p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.resetButton}>
          <div className={styles.reset}>Reset</div>
        </div>
        <div className={styles.submitButton}>
          <div className={styles.reset}>Submit</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
