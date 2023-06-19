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
  const Courses = lazy(() => import("pages/CourseTable/CourseTable"));
  const AddResult = lazy(() => import("pages/AddResult/AddResult"));
  const Results = lazy(() => import("pages/ResultsTable/ResultsTable"));
  const NotFound = lazy(() => import("pages/NotFound/NotFound"));

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/students" element={<StudentTable />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/addresult" element={<AddResult />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
