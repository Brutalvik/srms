import * as yup from "yup";

export const addStudentSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  dateOfBirth: yup.date().required("Date of birth is required"),
});

export const addCourseSchema = yup
  .object()
  .shape({ courseName: yup.string().required("Course name is required") });

export const addResultSchema = yup.object().shape({
  studentName: yup.string().required("Student name is required"),
  studentId: yup.string(),
  courseName: yup.string().required("Course name is required"),
  courseId: yup.string(),
  grade: yup.string().required("Score is required"),
});
