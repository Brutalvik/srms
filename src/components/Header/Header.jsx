import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Squash as Hamburger } from "hamburger-react";
import {
  darkModeSelector,
  hamburgerIsOpenSelector,
} from "app/selectors/selectors";
import { toggleDarkMode, toggleHamburger } from "app/reducers/theme";

const Header = () => {
  const dispatch = useDispatch();
  const hamburgerIsOpen = useSelector(hamburgerIsOpenSelector);
  const darkMode = useSelector(darkModeSelector);

  const toggleThemeIcon = () => {
    import("features/functions").then((module) => {
      module.handleToggle(dispatch, toggleDarkMode);
    });
  };

  return (
    <div className={styles.container}>
      <div className={hamburgerIsOpen ? styles.menudark : styles.menu}>
        <Hamburger
          onToggle={() => {
            import("features/functions").then((module) => {
              module.handleToggle(dispatch, toggleHamburger);
            });
          }}
          toggled={hamburgerIsOpen}
        />
      </div>
      <div className={styles.theme}>
        {darkMode ? (
          <BsMoonFill onClick={toggleThemeIcon} />
        ) : (
          <BsSunFill onClick={toggleThemeIcon} />
        )}
      </div>
      <div className={styles.drawer}>{/* <DrawerItem /> */}</div>
    </div>
  );
};

export default Header;
