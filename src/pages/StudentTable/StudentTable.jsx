import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentsThunk } from "app/thunks/getAllStudentsThunk";
import { darkModeSelector, getAllStudents } from "app/selectors/selectors";
import { isEmpty } from "lodash";
import TableContent from "UI/TableContent/TableContent";
import styles from "./StudentTable.module.css";
import { deleteStudentThunk } from "app/thunks/deleteStudentThunk";

const StudentTable = () => {
  const dispatch = useDispatch();
  const students = useSelector(getAllStudents);
  const darkMode = useSelector(darkModeSelector);

  const caption = "Student Table";
  const tableHeaderData = ["Name", "Date of Birth", "Email", "Actions"];

  const deleteStudent = (student) => {
    dispatch(deleteStudentThunk({ id: student._id, dispatch }));
  };

  useEffect(() => {
    dispatch(getAllStudentsThunk(dispatch));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={darkMode ? styles.light : styles.dark}>
      {!isEmpty(students.data) ? (
        <TableContent
          tableCaption={caption}
          tableHeaderData={tableHeaderData}
          tableRowData={students.data}
          deletAction={deleteStudent}
          type="student"
        />
      ) : (
        <h1>No students found</h1>
      )}
    </div>
  );
};

export default StudentTable;
