import React from "react";
import styles from "./AddCourse.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { addCourseSchema } from "schemas/validation";
import { useDispatch, useSelector } from "react-redux";
import useDidMountEffect from "customHooks/useDidMountEffect";
import { addCourseThunk } from "app/thunks/addCourseThunk";
import { resetCourse } from "app/reducers/course";
import { addCourseConfirmation } from "app/selectors/selectors";
import { AiOutlineClose } from "react-icons/ai";

const AddCourse = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { message, status } = useSelector(addCourseConfirmation);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(resetCourse());
    dispatch(addCourseThunk({ values, dispatch }));
    setSubmitting(false);
    resetForm();
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
          <InputGroup>
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
            <InputRightElement width="4.5rem">
              <AiOutlineClose
                className={styles.closebtn}
                onClick={handleReset}
              />
            </InputRightElement>
          </InputGroup>
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
