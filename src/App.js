import styles from "./App.module.css";
import Header from "components/Header/Header";
import { useSelector } from "react-redux";
import { selectDarkMode, selectHamburgerIsOpen } from "app/selectors/theme";

const App = () => {
  const darkMode = useSelector(selectDarkMode);
  const hamburgerIsOpen = useSelector(selectHamburgerIsOpen);

  console.log(darkMode);
  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <Header />
    </div>
  );
};

export default App;
