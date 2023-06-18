import React from "react";
import styles from "./AddCourse.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { addCourseSchema } from "schemas/validation";
import { useDispatch, useSelector } from "react-redux";
import useDidMountEffect from "customHooks/useDidMountEffect";
import { addCourseThunk } from "app/thunks/addCourseThunk";
import { resetCourse } from "app/reducers/course";
import { addCourseConfirmation } from "app/selectors/selectors";

const AddCourse = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { message, status } = useSelector(addCourseConfirmation);

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(resetCourse());
    dispatch(addCourseThunk({ values, dispatch }));
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
  } = useFormik({
    initialValues: {
      courseName: "",
    },
    validationSchema: addCourseSchema,
    onSubmit,
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
      <h1>Add Course</h1>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Course Name</FormLabel>
          <Input
            type="text"
            variant="flushed"
            placeholder="Java, C++, etc."
            name="courseName"
            size="lg"
            value={values.courseName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.courseName && errors.courseName && (
            <p className={styles.error}>{errors.courseName}</p>
          )}
        </FormControl>
        <Button
          size="lg"
          type="submit"
          colorScheme="teal"
          isLoading={isSubmitting}
          className={styles.button}
        >
          Add Course
        </Button>
      </form>
    </div>
  );
};

export default AddCourse;
