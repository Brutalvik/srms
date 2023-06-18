import { lazy, startTransition, Suspense } from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Squash as Hamburger } from "hamburger-react";
import {
  darkModeSelector,
  hamburgerIsOpenSelector,
} from "app/selectors/selectors";
import { toggleDarkMode, toggleHamburger } from "app/reducers/theme";
import DrawerItem from "components/Drawer/DrawerItem";

const Header = () => {
  const dispatch = useDispatch();
  const hamburgerIsOpen = useSelector(hamburgerIsOpenSelector);
  const darkMode = useSelector(darkModeSelector);

  const toggleThemeIcon = () => {
    startTransition(() => {
      import("features/functions").then((module) => {
        module.handleToggle(dispatch, toggleDarkMode);
      });
    });
  };

  const handleHamburgerToggle = () => {
    startTransition(() => {
      import("features/functions").then((module) => {
        module.handleToggle(dispatch, toggleHamburger);
      });
    });
  };

  const Spinner = lazy(() => import("UI/Spinner/Spinner"));

  return (
    <Suspense fallback={<Spinner />}>
      <div className={styles.container}>
        <div className={hamburgerIsOpen ? styles.menudark : styles.menu}>
          <Hamburger
            onToggle={handleHamburgerToggle}
            toggled={hamburgerIsOpen}
          />
        </div>
        <div className={styles.theme}>
          {darkMode ? (
            <BsSunFill onClick={toggleThemeIcon} />
          ) : (
            <BsMoonFill onClick={toggleThemeIcon} />
          )}
        </div>
        <div className={styles.drawer}>
          <DrawerItem />
        </div>
      </div>
    </Suspense>
  );
};

export default Header;
