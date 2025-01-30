import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import Approved from "./Approved";
import styles from "./History1.module.css";

export type History1Type = {
  className?: string;
};

const History1: FunctionComponent<History1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.history, className].join(" ")}>
      <div className={styles.historyTable}>
        <div className={styles.historyTableHeader}>
          <h3 className={styles.leaveHistory}>Leave History</h3>
        </div>
        <form className={styles.historyTableContent}>
          <div className={styles.historyTableHeader}>
            <div className={styles.historyTableHeaderRow}>
              <div className={styles.sno}>S.no</div>
            </div>
            <div className={styles.historyTableRowOne}>
              <div className={styles.historyTableRow}>1</div>
            </div>
            <div className={styles.historyTableRowTwo}>
              <div className={styles.historyTableRow1}>2</div>
            </div>
            <div className={styles.historyTableRowTwo}>
              <div className={styles.historyTableRow1}>3</div>
            </div>
            <div className={styles.historyTableRowTwo}>
              <div className={styles.historyTableRow1}>4</div>
            </div>
            <div className={styles.historyTableRowTwo}>
              <div className={styles.historyTableRow1}>5</div>
            </div>
            <div className={styles.historyTableRowTwo}>
              <div className={styles.historyTableRow1}>6</div>
            </div>
          </div>
          <div className={styles.historyTableColumns1}>
            <div className={styles.leaveTypeWrapper}>
              <div className={styles.leaveType}>Leave Type</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>On-Duty</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>Emergency Leave</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>GP</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>Leave</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>Sick Leave</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>Internal OD</div>
            </div>
          </div>
          <div className={styles.historyTableColumns2}>
            <div className={styles.leaveTypeWrapper}>
              <div className={styles.leaveType}>Date From</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>20-05-2024</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>20-05-2024</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>20-05-2024</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>20-05-2024</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>20-05-2024</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>20-05-2024</div>
            </div>
          </div>
          <div className={styles.historyTableColumns2}>
            <div className={styles.leaveTypeWrapper}>
              <div className={styles.leaveType}>Time From</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>06.00.a.m</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
          </div>
          <div className={styles.historyTableColumns4}>
            <div className={styles.dateToWrapper}>
              <input
                className={styles.dateTo}
                placeholder="Date To"
                type="text"
              />
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>30-05-2024</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>30-05-2024</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>30-05-2024</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>30-05-2024</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>30-05-2024</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>30-05-2024</div>
            </div>
          </div>
          <div className={styles.historyTableColumns2}>
            <div className={styles.leaveTypeWrapper}>
              <div className={styles.leaveType}>Time To</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
            <div className={styles.onDutyWrapper}>
              <div className={styles.onDuty}>04.30.p.m</div>
            </div>
          </div>
          <div className={styles.historyTableColumns4}>
            <div className={styles.dateToWrapper}>
              <div className={styles.status}>Status</div>
            </div>
            <FrameComponent1 />
            <FrameComponent1 />
            <div className={styles.approvedWrapper}>
              <Approved />
            </div>
            <div className={styles.approvedWrapper}>
              <Approved />
            </div>
            <div className={styles.approvedWrapper}>
              <Approved />
            </div>
            <div className={styles.approvedWrapper}>
              <Approved />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default History1;
