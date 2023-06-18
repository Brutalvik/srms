import { useSelector } from "react-redux";
import styles from "./Spinner.module.css";
import { darkModeSelector } from "app/selectors/selectors";

const SpinnerItem = () => {
  const darkMode = useSelector(darkModeSelector);
  return (
    <div className={styles.container}>
      <span className={darkMode ? styles.dark : styles.light}></span>
    </div>
  );
};

export default SpinnerItem;
