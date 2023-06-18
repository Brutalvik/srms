import React from "react";
import styles from "./AddStudent.module.css";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import moment from "moment/moment";
import { useFormik } from "formik";
import { addStudentSchema } from "schemas/validation";
import { AiOutlineUserAdd } from "react-icons/ai";

const AddStudent = () => {
  const onSubmit = (values) => {
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
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
    },
    validationSchema: addStudentSchema,
    onSubmit,
  });

  return (
    <div className={styles.container}>
      <h1>Add Student</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              variant="flushed"
              placeholder="First"
              name="firstName"
              size="lg"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.firstName && errors.firstName && (
              <p className={styles.error}>{errors.firstName}</p>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              variant="flushed"
              placeholder="Last"
              name="lastName"
              size="lg"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.lastName && errors.lastName && (
              <p className={styles.error}>{errors.lastName}</p>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              variant="flushed"
              placeholder="someone@example.com"
              name="email"
              size="lg"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className={styles.error}>{errors.email}</p>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Date Of Birth</FormLabel>
            <Input
              type="date"
              variant="flushed"
              placeholder="Select Date"
              name="dateOfBirth"
              size="lg"
              max={moment().format("YYYY-MM-DD")}
              value={values.dateOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.dateOfBirth && errors.dateOfBirth && (
              <p className={styles.error}>{errors.dateOfBirth}</p>
            )}
          </FormControl>
          <Button
            type="submit"
            leftIcon={<AiOutlineUserAdd />}
            isLoading={isSubmitting}
            colorScheme="teal"
            size="lg"
          >
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
