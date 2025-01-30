import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import styles from "./HistoryTable.module.css";

export type HistoryTableType = {
  className?: string;
};

const HistoryTable: FunctionComponent<HistoryTableType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.historyTable, className].join(" ")}>
      <div className={styles.historyTableHeader}>
        <div className={styles.historyTableColumns}>
          <div className={styles.sno}>S.no</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div}>1</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div1}>2</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div1}>3</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div1}>4</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div1}>5</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div1}>6</div>
        </div>
      </div>
      <div className={styles.historyTableHeader1}>
        <div className={styles.leaveTypeWrapper}>
          <div className={styles.sno}>Leave Type</div>
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
      <div className={styles.historyTableHeader2}>
        <div className={styles.leaveTypeWrapper}>
          <div className={styles.sno}>Date From</div>
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
      <div className={styles.historyTableHeader2}>
        <div className={styles.leaveTypeWrapper}>
          <div className={styles.sno}>Time From</div>
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
      <div className={styles.historyTableHeader4}>
        <div className={styles.leaveTypeWrapper}>
          <div className={styles.sno}>Date To</div>
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
      <div className={styles.historyTableHeader2}>
        <div className={styles.leaveTypeWrapper}>
          <div className={styles.sno}>Time To</div>
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
      <div className={styles.historyTableHeader6}>
        <div className={styles.statusWrapper}>
          <div className={styles.status}>Status</div>
        </div>
        <FrameComponent3 approved="Pending" />
        <FrameComponent3
          propBackgroundColor="#fff3f3"
          approved="Declined"
          propTextDecoration="unset"
          propColor="#ff5150"
        />
        <div className={styles.approvedWrapper}>
          <div className={styles.approved}>
            <div className={styles.sno}>Approved</div>
          </div>
        </div>
        <div className={styles.approvedWrapper}>
          <div className={styles.approved}>
            <div className={styles.sno}>Approved</div>
          </div>
        </div>
        <div className={styles.approvedWrapper}>
          <div className={styles.approved}>
            <div className={styles.sno}>Approved</div>
          </div>
        </div>
        <div className={styles.approvedWrapper}>
          <div className={styles.approved}>
            <div className={styles.sno}>Approved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
