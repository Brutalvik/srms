import { Suspense } from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamburger } from "app/reducers/theme";
// import { useNavigate } from "react-router-dom";
import { hamburgerIsOpenSelector } from "app/selectors/selectors";
import styles from "./DrawerItem.module.css";
import Spinner from "UI/Spinner/Spinner";

const DrawerItem = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const hamburgerIsOpen = useSelector(hamburgerIsOpenSelector);

  const lazyImport = () => {
    import("features/functions").then((module) => {
      module.handleToggle(dispatch, toggleHamburger);
    });
  };

  // const navigatePage = async (page) => {
  //   lazyImport();
  //   navigate(page);
  // };
  return (
    <Suspense fallback={<Spinner />}>
      <Drawer
        isOpen={hamburgerIsOpen}
        placement="left"
        onClose={lazyImport}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader textAlign="right">SRMS</DrawerHeader>
          <DrawerBody>
            <div className={styles.menuItem}>
              {/* <p onClick={() => navigatePage("/")}>Home</p>
              <p onClick={() => navigatePage("/about")}>Add New Students</p>
              <p onClick={() => navigatePage("/timeline")}>Students List</p>
              <p onClick={() => navigatePage("/portfolio")}>Add New Courses</p>
              <p onClick={() => navigatePage("/contact")}>Add New Results</p>
              <p onClick={() => navigatePage("/contact")}>Results List</p> */}
            </div>
          </DrawerBody>

          <DrawerFooter textAlign="left">
            Copyright 2023 &copy; Vikram Kumar&reg;
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Suspense>
  );
};

export default DrawerItem;
