import React from "react";
import { addResultSchema } from "schemas/validation";
import { useFormik } from "formik";
import styles from "./AddResult.module.css";
import {
  Select,
  FormControl,
  FormLabel,
  Button,
  Stack,
} from "@chakra-ui/react";
import {
  darkModeSelector,
  getAllStudents,
  getAllCourses,
} from "app/selectors/selectors";
import { useSelector } from "react-redux";
import { startCase } from "lodash";
import { AiOutlineUserAdd, AiOutlineUndo } from "react-icons/ai";

const AddResult = () => {
  const students = useSelector(getAllStudents);
  const courses = useSelector(getAllCourses);
  const darkMode = useSelector(darkModeSelector);
  const grades = ["A", "B", "C", "D", "E", "F"];
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };

  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    handleReset,
  } = useFormik({
    initialValues: {
      studentName: "",
      courseName: "",
      grade: "",
    },
    validationSchema: addResultSchema,
    onSubmit,
  });
  return (
    <div className={styles.container}>
      <h1>Add Result</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Select Student</FormLabel>
            <Select
              variant="flushed"
              placeholder="--Select--"
              onChange={handleChange}
              onBlur={handleBlur}
              name="studentName"
              value={values.studentName}
            >
              {students.data.map((student) => (
                <option key={student._id} className={styles.options}>
                  {startCase(student.firstName)} {startCase(student.lastName)}
                </option>
              ))}
            </Select>
            {touched.studentName && errors.studentName && (
              <p className={styles.error}>{errors.studentName}</p>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Select Course</FormLabel>
            <Select
              variant="flushed"
              placeholder="--Select--"
              onChange={handleChange}
              onBlur={handleBlur}
              name="courseName"
              value={values.courseName}
            >
              {courses.data.map((course) => (
                <option key={course._id} className={styles.options}>
                  {startCase(course.courseName)}
                </option>
              ))}
            </Select>
            {touched.courseName && errors.courseName && (
              <p className={styles.error}>{errors.courseName}</p>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Select Grade</FormLabel>
            <Select
              variant="flushed"
              placeholder="--Select--"
              onChange={handleChange}
              onBlur={handleBlur}
              name="grade"
              value={values.grade}
            >
              {grades.map((grade) => (
                <option key={grade} className={styles.options}>
                  {grade}
                </option>
              ))}
            </Select>
            {touched.grade && errors.grade && (
              <p className={styles.error}>{errors.grade}</p>
            )}
          </FormControl>
          <Stack
            direction="row"
            spacing={10}
            align="center"
            justify="space-around"
          >
            <Button
              type="reset"
              leftIcon={<AiOutlineUndo />}
              colorScheme="teal"
              size="lg"
            >
              Reset
            </Button>
            <Button
              type="submit"
              leftIcon={<AiOutlineUserAdd />}
              isLoading={isSubmitting}
              colorScheme="teal"
              size="lg"
            >
              Add
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default AddResult;
