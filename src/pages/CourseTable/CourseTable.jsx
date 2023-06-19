import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkModeSelector, getAllCourses } from "app/selectors/selectors";
import { isEmpty } from "lodash";
import TableContent from "UI/TableContent/TableContent";
import styles from "./CourseTable.module.css";
import { deleteCourseThunk } from "app/thunks/deleteCourseThunk";
import { getAllCoursesThunk } from "app/thunks/getAllCoursesThunk";

const CourseTable = () => {
  const dispatch = useDispatch();
  const courses = useSelector(getAllCourses);
  const darkMode = useSelector(darkModeSelector);

  const caption = "Courses Table";
  const tableHeaderData = ["Course Name", "Actions"];

  const deleteCourse = (course) => {
    dispatch(deleteCourseThunk({ id: course._id, dispatch }));
  };

  useEffect(() => {
    dispatch(getAllCoursesThunk(dispatch));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={darkMode ? styles.light : styles.dark}>
      {!isEmpty(courses.data) ? (
        <TableContent
          tableCaption={caption}
          tableHeaderData={tableHeaderData}
          tableRowData={courses.data}
          deletAction={deleteCourse}
          type="courses"
        />
      ) : (
        <h1>No courses found</h1>
      )}
    </div>
  );
};

export default CourseTable;
