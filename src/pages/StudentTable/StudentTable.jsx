import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentsThunk } from "app/thunks/getAllStudentsThunk";
import { darkModeSelector, getAllStudents } from "app/selectors/selectors";
import { isEmpty } from "lodash";
import TableContent from "UI/TableContent/TableContent";
import styles from "./StudentTable.module.css";

const StudentTable = () => {
  const dispatch = useDispatch();
  const students = useSelector(getAllStudents);
  const darkMode = useSelector(darkModeSelector);

  const caption = "Student Table";
  const tableHeaderData = [
    "First Name",
    "Last Name",
    "Email",
    "Date of Birth",
    "Actions",
  ];

  const deleteStudent = (student) => {
    console.log(student);
  };

  const editStudent = (student) => {
    console.log(student);
  };

  useEffect(() => {
    dispatch(getAllStudentsThunk(dispatch));
  }, []);

  return (
    <div className={darkMode ? styles.light : styles.dark}>
      {!isEmpty(students) && (
        <TableContent
          tableCaption={caption}
          tableHeaderData={tableHeaderData}
          tableRowData={students.data}
          deletAction={deleteStudent}
        />
      )}
    </div>
  );
};

export default StudentTable;
