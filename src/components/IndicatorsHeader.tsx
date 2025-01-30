import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./IndicatorsHeader.module.css";

export type IndicatorsHeaderType = {
  className?: string;
  group42?: string;
  emptyIndicatorValues?: string;
  pendingRequests?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const IndicatorsHeader: FunctionComponent<IndicatorsHeaderType> = ({
  className = "",
  group42,
  emptyIndicatorValues,
  pendingRequests,
  propWidth,
}) => {
  const pendingRequests1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.indicatorsHeader, className].join(" ")}>
      <div className={styles.indicatorsSubheader}>
        <div className={styles.indicatorTypes}>
          <img
            className={styles.indicatorTypesChild}
            loading="lazy"
            alt=""
            src={group42}
          />
          <div className={styles.emptyIndicatorValues}>
            {emptyIndicatorValues}
          </div>
        </div>
        <div className={styles.indicatorDetails}>
          <div className={styles.pendingRequests} style={pendingRequests1Style}>
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

export default IndicatorsHeader;
