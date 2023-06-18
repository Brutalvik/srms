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
