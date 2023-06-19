import React, { useEffect } from "react";
import { addResultSchema } from "schemas/validation";
import { useFormik } from "formik";
import styles from "./AddResult.module.css";
import {
  Select,
  FormControl,
  FormLabel,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";
import {
  getAllStudents,
  getAllCourses,
  addResultConfirmation,
} from "app/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { startCase } from "lodash";
import { AiOutlineUserAdd, AiOutlineUndo } from "react-icons/ai";
import { resetResults } from "app/reducers/results";
import { addResultThunk } from "app/thunks/addResultThunk";
import useDidMountEffect from "customHooks/useDidMountEffect";
import { getAllStudentsThunk } from "app/thunks/getAllStudentsThunk";
import { getAllCoursesThunk } from "app/thunks/getAllCoursesThunk";

const AddResult = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const students = useSelector(getAllStudents);
  const courses = useSelector(getAllCourses);
  const { message, status } = useSelector(addResultConfirmation);
  const grades = ["A", "B", "C", "D", "E", "F"];

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(resetResults());
    dispatch(addResultThunk({ values, dispatch }));
    setSubmitting(false);
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
    setFieldValue,
  } = useFormik({
    initialValues: {
      studentName: "",
      studentId: "",
      courseName: "",
      courseId: "",
      grade: "",
    },
    validationSchema: addResultSchema,
    onSubmit,
  });

  useEffect(() => {
    const selectedStudent = students.data.find(
      (student) =>
        `${startCase(student.firstName)} ${startCase(student.lastName)}` ===
        values.studentName
    );

    if (selectedStudent) {
      setFieldValue("studentId", selectedStudent._id);
    } else {
      setFieldValue("studentId", "");
    }

    const selectedCourse = courses.data.find(
      (course) => startCase(course.courseName) === values.courseName
    );

    if (selectedCourse) {
      setFieldValue("courseId", selectedCourse._id);
    } else {
      setFieldValue("courseId", "");
    }
  }, [
    values.studentName,
    values.courseName,
    students.data,
    courses.data,
    setFieldValue,
  ]);

  useDidMountEffect(() => {
    status === 200
      ? toast({
          title: "Success",
          description: message,
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      : status !== 0 &&
        toast({
          title: "Error",
          description: message ?? "Please try again !",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
  }, [status, message]);

  useEffect(() => {
    dispatch(getAllStudentsThunk());
    dispatch(getAllCoursesThunk());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <h1>Add Result</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit} onReset={handleReset}>
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
