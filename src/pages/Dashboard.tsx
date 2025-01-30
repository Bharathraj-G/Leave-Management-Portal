import { FunctionComponent } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import History1 from "../components/History1";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.headerParent}>
        <Header />
        <Content />
        <History1 />
      </main>
      {/* <div className={styles.dashboardInner}>
        <FrameComponent5 />
      </div>
      <div className={styles.dashboardChild}>
        <FrameComponent4 />
      </div> */}
    </div>
  );
};

export default Dashboard;
