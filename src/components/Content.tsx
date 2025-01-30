import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.leaveSummaryParent}>
        <h3 className={styles.leaveSummary}>Leave Summary</h3>
        <div className={styles.indicators}>
          <FrameComponent
            group42="/group-42@2x.png"
            emptySummaryItems="2"
            pendingRequests="Pending Requests"
          />
          <FrameComponent
            group42="/group-42-1@2x.png"
            emptySummaryItems="3"
            propDisplay="flex"
            propMinWidth="unset"
            propWidth="30px"
            pendingRequests="Available Leave"
            propDisplay1="inline-block"
            propMinWidth1="116px"
          />
          <FrameComponent
            group42="/group-42-2@2x.png"
            emptySummaryItems="5"
            propDisplay="inline-block"
            propMinWidth="26px"
            propWidth="unset"
            pendingRequests="Total Leave"
            propDisplay1="inline-block"
            propMinWidth1="85px"
          />
          <FrameComponent
            group42="/group-42-3@2x.png"
            emptySummaryItems="0"
            propDisplay="flex"
            propMinWidth="unset"
            propWidth="26px"
            pendingRequests="On-duty"
            propDisplay1="inline-block"
            propMinWidth1="66px"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
