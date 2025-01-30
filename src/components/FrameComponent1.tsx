import { FunctionComponent } from "react";
import Pending from "./Pending";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.pendingWrapper, className].join(" ")}>
      <Pending />
    </div>
  );
};

export default FrameComponent1;
