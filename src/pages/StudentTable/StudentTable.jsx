import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentsThunk } from "app/thunks/getAllStudentsThunk";
import { darkModeSelector, getAllStudents } from "app/selectors/selectors";
import { Tab } from "@chakra-ui/react";
import { isEmpty } from "lodash";

const StudentTable = () => {
  const dispatch = useDispatch();
  const students = useSelector(getAllStudents);
  const darkMode = useSelector(darkModeSelector);
  const TableContent = lazy(() => import("UI/TableContent/TableContent"));

  const caption = "Student Table";
  const tableHeaderData = [
    "First Name",
    "Last Name",
    "Email",
    "Date of Birth",
    "Actions",
  ];

  useEffect(() => {
    dispatch(getAllStudentsThunk(dispatch));
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!isEmpty(students) && (
        <TableContent
          colorScheme={darkMode ? "teal" : "gray"}
          tableCaption={caption}
          tableHeaderData={tableHeaderData}
          tableRowData={students.data}
        />
      )}
    </Suspense>
  );
};

export default StudentTable;
