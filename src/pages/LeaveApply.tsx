import { FunctionComponent } from "react";
import IndicatorsHeader from "../components/IndicatorsHeader";
import HistoryTable from "../components/HistoryTable";
import Header1 from "../components/Header1";
import FieldLabels from "../components/FieldLabels";
import ContactRoles from "../components/ContactRoles";
import styles from "./LeaveApply.module.css";

const LeaveApply: FunctionComponent = () => {
  return (
    <div className={styles.leaveApply}>
      <div className={styles.applyContentParent}>
        <div className={styles.applyContent}>
          <h3 className={styles.leaveSummary}>Leave Summary</h3>
          <div className={styles.indicators}>
            <IndicatorsHeader
              group42="/group-42@2x.png"
              emptyIndicatorValues="2"
              pendingRequests="Pending Requests"
            />
            <IndicatorsHeader
              group42="/group-42-1@2x.png"
              emptyIndicatorValues="3"
              pendingRequests="Available Leave"
              propWidth="116px"
            />
            <IndicatorsHeader
              group42="/group-42-2@2x.png"
              emptyIndicatorValues="5"
              pendingRequests="Total Leave"
              propWidth="85px"
            />
            <IndicatorsHeader
              group42="/group-42-3@2x.png"
              emptyIndicatorValues="0"
              pendingRequests="On-duty"
              propWidth="66px"
            />
          </div>
        </div>
        <div className={styles.historyContentParent}>
          <div className={styles.historyContent}>
            <h3 className={styles.leaveSummary}>Leave History</h3>
          </div>
          <HistoryTable />
        </div>
      </div>
      <main className={styles.headerContentWrapper}>
        <section className={styles.headerContent}>
          <Header1 />
          <div className={styles.applyFormWrapper}>
            <div className={styles.applyForm}>
              <div className={styles.formFields}>
                <FieldLabels
                  leaveType="Leave Type"
                  selectLeaveType="Select leave type"
                  arrowDropDown="/arrow-drop-down.svg"
                />
                <FieldLabels
                  leaveType="Date"
                  selectLeaveType="Select leave date"
                  arrowDropDown="/calendar-month.svg"
                />
                <FieldLabels
                  leaveType="Time"
                  selectLeaveType="Select leave time"
                  arrowDropDown="/calendar-clock.svg"
                />
                <div className={styles.fieldLabels}>
                  <div className={styles.reason}>
                    <span>Reason</span>
                    <span className={styles.span}>{` `}</span>
                    <span className={styles.span1}>*</span>
                  </div>
                  <textarea
                    className={styles.fieldLabelsChild}
                    placeholder="Enter a reason"
                    rows={6}
                    cols={23}
                  />
                </div>
                <div className={styles.fieldLabels}>
                  <div className={styles.reason}>
                    <span>{`Attachment `}</span>
                    <span className={styles.ifApplicable}>(if applicable)</span>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.cloudUploadWrapper}>
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
                      <p className={styles.uploadAnImage}>
                        PNG, JPG or PDF upto 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.formButtons}>
                  <button className={styles.buttonNames}>
                    <div className={styles.reset}>Reset</div>
                  </button>
                  <button className={styles.buttonNames1}>
                    <div className={styles.submit}>Submit</div>
                  </button>
                </div>
              </div>
              <div className={styles.contactDetailsParent}>
                <div className={styles.applyContent}>
                  <div className={styles.contactDetailsInner}>
                    <button className={styles.approversDetailsWrapper}>
                      <div className={styles.approversDetails}>
                        Approvers Details
                      </div>
                    </button>
                  </div>
                  <ContactRoles
                    classAdvisor="Class Advisor"
                    drMalathiM="Dr. Malathi M"
                  />
                  <ContactRoles
                    classAdvisor="Hostel Warden"
                    propMinWidth="111px"
                    drMalathiM="Sabareeswaran"
                    propMinWidth1="116px"
                  />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.guidelinesWrapper}>
                    <div className={styles.guidelines}>Guidelines</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.policyBulletsParent}>
                    <div className={styles.policyBullets}>
                      <div className={styles.policyBulletsChild} />
                    </div>
                    <div className={styles.approvedLeaveCan}>
                      Approved leave can be canceled by a class advisor before
                      transaction completion.
                    </div>
                  </div>
                  <div className={styles.policyBulletsParent}>
                    <div className={styles.policyBullets}>
                      <div className={styles.policyBulletsChild} />
                    </div>
                    <div className={styles.approvedLeaveCan}>
                      Sick leave can be canceled anytime when applying for
                      another leave type.
                    </div>
                  </div>
                  <div className={styles.policyBulletsParent}>
                    <div className={styles.policyBullets}>
                      <div className={styles.policyBulletsChild} />
                    </div>
                    <div className={styles.approvedLeaveCan}>
                      Overlapping of any leave, including sick leave, is not
                      allowed.
                    </div>
                  </div>
                  <div className={styles.policyBulletsParent}>
                    <div className={styles.policyBullets}>
                      <div className={styles.policyBulletsChild} />
                    </div>
                    <div className={styles.approvedLeaveCan}>
                      General Permission (GP) will be cancelled if the student
                      is in the hostel during GP hours.
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv} />
                <div className={styles.frameChild1} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LeaveApply;
