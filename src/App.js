import styles from "./App.module.css";
import Header from "components/Header/Header";
import { useSelector } from "react-redux";
import { darkModeSelector } from "app/selectors/selectors";
import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Spinner from "UI/Spinner/Spinner";

const App = () => {
  const darkMode = useSelector(darkModeSelector);
  const Home = lazy(() => import("pages/Home/Home"));
  const AddStudent = lazy(() => import("pages/AddStudent/AddStudent"));
  const StudentTable = lazy(() => import("pages/StudentTable/StudentTable"));
  const AddCourse = lazy(() => import("pages/AddCourse/AddCourse"));

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/students" element={<StudentTable />} />
          <Route path="/addcourse" element={<AddCourse />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
