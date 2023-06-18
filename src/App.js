import styles from "./App.module.css";
import Header from "components/Header/Header";
import { useSelector } from "react-redux";
import { darkModeSelector } from "app/selectors/selectors";

const App = () => {
  const darkMode = useSelector(darkModeSelector);

  console.log(darkMode);
  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <Header />
    </div>
  );
};

export default App;
