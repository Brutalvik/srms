import React, { useState } from "react";
import useDidMountEffect from "customHooks/useDidMountEffect";
import styles from "./AddStudent.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Stack,
} from "@chakra-ui/react";
import moment from "moment/moment";
import { useFormik } from "formik";
import { addStudentSchema } from "schemas/validation";
import { AiOutlineUserAdd, AiOutlineUndo } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addStudentThunk } from "app/thunks/addStudentThunk";
import { addStudentConfirmation } from "app/selectors/selectors";
import { resetStudent } from "app/reducers/student";

const AddStudent = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { message, status } = useSelector(addStudentConfirmation);

  const onReset = () => {
    dispatch(resetStudent());
  };

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(resetStudent());
    dispatch(addStudentThunk({ values, dispatch }));
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
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
    },
    validationSchema: addStudentSchema,
    onSubmit,
    onReset,
  });

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

  return (
    <div className={styles.container}>
      <h1>Add Student</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit} onReset={handleReset}>
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
              max={moment().subtract(10, "years").format("YYYY-MM-DD")}
              min={moment().subtract(100, "years").format("YYYY-MM-DD")}
              value={values.dateOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.dateOfBirth && errors.dateOfBirth && (
              <p className={styles.error}>{errors.dateOfBirth}</p>
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
              isLoading={isSubmitting}
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

export default AddStudent;
