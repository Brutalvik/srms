import React from "react";
import styles from "./NotFound.module.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1>404 Not Found </h1>
      <Button onClick={redirect} colorScheme="teal">
        Home
      </Button>
    </div>
  );
};

export default NotFound;
