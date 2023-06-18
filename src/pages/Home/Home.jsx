import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import { darkModeSelector } from "app/selectors/selectors";

const Home = () => {
  const darkMode = useSelector(darkModeSelector);

  return (
    <div className={styles.container}>
      <h1 className={darkMode ? styles.light : styles.dark}>SRMS</h1>
      <h2>Welcome to Student Result Management System</h2>
    </div>
  );
};

export default Home;
