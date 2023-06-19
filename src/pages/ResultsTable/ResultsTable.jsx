import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  darkModeSelector,
  getAllCourses,
  getAllResults,
  getAllStudents,
} from "app/selectors/selectors";
import { isEmpty } from "lodash";
import TableContent from "UI/TableContent/TableContent";
import styles from "./ResultsTable.module.css";
import { getAllResultsThunk } from "app/thunks/getAllResultsThunk";

const ResultsTable = () => {
  const dispatch = useDispatch();
  const results = useSelector(getAllResults);
  const courses = useSelector(getAllCourses);
  const students = useSelector(getAllStudents);
  const darkMode = useSelector(darkModeSelector);

  const filteredResults = results.data.map((result) => {
    const matchingCourse = courses.data.find(
      (course) => course._id === result.courseId
    );
    const matchingStudent = students.data.find(
      (student) => student._id === result.studentId
    );

    const filteredResult = { ...result };

    if (!matchingCourse) {
      filteredResult.grade = "-";
    }

    if (!matchingStudent) {
      filteredResult.grade = "-";
    }

    return filteredResult;
  });

  const caption = "Results Table";
  const tableHeaderData = ["Student Name", "Course Name", "Result"];

  useEffect(() => {
    dispatch(getAllResultsThunk(dispatch));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={darkMode ? styles.light : styles.dark}>
      {!isEmpty(results.data) ? (
        <TableContent
          tableCaption={caption}
          tableHeaderData={tableHeaderData}
          tableRowData={filteredResults}
          type="results"
        />
      ) : (
        <h1>No Results found</h1>
      )}
    </div>
  );
};

export default ResultsTable;
