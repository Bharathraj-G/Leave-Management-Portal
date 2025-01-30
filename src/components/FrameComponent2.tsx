import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  classAdvisor?: string;
  drMalathiM?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  propAlignSelf,
  propFlex,
  propWidth,
  classAdvisor,
  propWidth1,
  drMalathiM,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const classAdvisorStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.classAdvisorParent} style={frameDiv1Style}>
        <div className={styles.classAdvisor} style={classAdvisorStyle}>
          {classAdvisor}
        </div>
        <div className={styles.advisorName}>
          <div className={styles.drMalathiM}>{drMalathiM}</div>
          <div className={styles.emptyAdvisor}>(12345)</div>
        </div>
      </div>
      <div className={styles.forwardParent}>
        <div className={styles.forward}>
          <img
            className={styles.phoneForwardedIcon}
            loading="lazy"
            alt=""
            src="/phone-forwarded.svg"
          />
          <div className={styles.callWrapper}>
            <div className={styles.call}>Call</div>
          </div>
        </div>
        <div className={styles.forward1}>
          <img
            className={styles.phoneForwardedIcon}
            loading="lazy"
            alt=""
            src="/forward-to-inbox.svg"
          />
          <div className={styles.callWrapper}>
            <div className={styles.call}>Mail</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
