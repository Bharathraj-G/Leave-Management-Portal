import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  group42?: string;
  emptySummaryItems?: string;
  pendingRequests?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  group42,
  emptySummaryItems,
  propDisplay,
  propMinWidth,
  propWidth,
  pendingRequests,
  propDisplay1,
  propMinWidth1,
}) => {
  const emptySummaryItemsStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propDisplay, propMinWidth, propWidth]);

  const pendingRequestsStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className={[styles.summaryItemsWrapper, className].join(" ")}>
      <div className={styles.summaryItems}>
        <div className={styles.summaryItemTypes}>
          <img
            className={styles.summaryItemTypesChild}
            loading="lazy"
            alt=""
            src={group42}
          />
          <div
            className={styles.emptySummaryItems}
            style={emptySummaryItemsStyle}
          >
            {emptySummaryItems}
          </div>
        </div>
        <div className={styles.pendingRequestsParent}>
          <div className={styles.pendingRequests} style={pendingRequestsStyle}>
            {pendingRequests}
          </div>
          <div className={styles.trackingMentorsApproval}>
            Tracking Mentors Approval
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
