import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkModeSelector, getAllResults } from "app/selectors/selectors";
import { isEmpty } from "lodash";
import TableContent from "UI/TableContent/TableContent";
import styles from "./ResultsTable.module.css";
// import { deleteCourseThunk } from "app/thunks/deleteCourseThunk";
import { getAllResultsThunk } from "app/thunks/getAllResultsThunk";

const ResultsTable = () => {
  const dispatch = useDispatch();
  const results = useSelector(getAllResults);
  const darkMode = useSelector(darkModeSelector);

  const caption = "Results Table";
  const tableHeaderData = ["Student Name", "Course Name", "Result", "Actions"];

  const deleteCourse = (course) => {
    // dispatch(deleteCourseThunk({ id: course._id, dispatch }));
  };

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
          tableRowData={results.data}
          deletAction={deleteCourse}
          type="results"
        />
      ) : (
        <h1>No Results found</h1>
      )}
    </div>
  );
};

export default ResultsTable;
