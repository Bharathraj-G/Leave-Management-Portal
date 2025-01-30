import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
  approved?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propColor?: CSSProperties["color"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  propBackgroundColor,
  approved,
  propTextDecoration,
  propColor,
}) => {
  const approvedStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const approved1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      color: propColor,
    };
  }, [propTextDecoration, propColor]);

  return (
    <div className={[styles.pendingWrapper, className].join(" ")}>
      <div className={styles.pending}>
        <div className={styles.approved} style={approvedStyle}>
          <a className={styles.approved1} style={approved1Style}>
            {approved}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
