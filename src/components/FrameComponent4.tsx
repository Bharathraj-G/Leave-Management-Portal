import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.approversDetailsWrapper}>
          <div className={styles.approversDetails}>Approvers Details</div>
        </div>
      </div>
      <FrameComponent2
        classAdvisor="Class Advisor"
        drMalathiM="Dr. Malathi M"
      />
      <div className={styles.frameContainer}>
        <FrameComponent2
          propAlignSelf="unset"
          propFlex="1"
          propWidth="188px"
          classAdvisor="Hostel Warden"
          propWidth1="111px"
          drMalathiM="Sabareeswaran"
        />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.guidelinesWrapper}>
          <div className={styles.approversDetails}>Guidelines</div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.frameGroup}>
          <div className={styles.approvedLeaveCanBeCanceledParent}>
            <div className={styles.approvedLeaveCan}>
              Approved leave can be canceled by a class advisor before
              transaction completion.
            </div>
            <div className={styles.policyIcon}>
              <div className={styles.policyIconChild} />
            </div>
          </div>
          <div className={styles.approvedLeaveCanBeCanceledParent}>
            <div className={styles.approvedLeaveCan}>
              Sick leave can be canceled anytime when applying for another leave
              type.
            </div>
            <div className={styles.policyIcon}>
              <div className={styles.policyIconChild} />
            </div>
          </div>
          <div className={styles.approvedLeaveCanBeCanceledParent}>
            <div className={styles.approvedLeaveCan}>
              Overlapping of any leave, including sick leave, is not allowed.
            </div>
            <div className={styles.policyIcon}>
              <div className={styles.policyIconChild} />
            </div>
          </div>
          <div className={styles.approvedLeaveCanBeCanceledParent}>
            <div className={styles.approvedLeaveCan}>
              General Permission (GP) will be cancelled if the student is in the
              hostel during GP hours.
            </div>
            <div className={styles.policyIcon}>
              <div className={styles.policyIconChild} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
    </div>
  );
};

export default FrameComponent4;
