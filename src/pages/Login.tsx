import { FunctionComponent } from "react";
import LoginCard from "../components/LoginCard";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <LoginCard />
    </div>
  );
};

export default Login;
