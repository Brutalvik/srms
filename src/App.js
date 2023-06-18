import styles from "./App.module.css";
import Header from "components/Header/Header";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
};

export default App;
