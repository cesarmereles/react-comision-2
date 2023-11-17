//import { Button } from "../components/button";
import styles from "../styles/Test.module.css";
import { Test } from "../components/Test";
export const HomePages = () => {
  return (
    <div
      // style={{
      //   backgroundColor: "green",
      //   color: "white",
      //   textTransform: "uppercase",
      // }}
      className={styles.container}
    >
      <Test />
      {/* <h1>Bienvenidos a Home</h1> */}
      {/* <Button /> */}
    </div>
  );
};
