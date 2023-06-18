import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import styles from "./TableContent.module.css";

const TableContent = ({
  colorScheme,
  tableCaption,
  tableHeaderData,
  tableRowData,
}) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme={colorScheme}>
        <TableCaption>{tableCaption}</TableCaption>
        <Thead>
          <Tr>
            {tableHeaderData.map((header) => (
              <Th key={header}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableRowData.map((row) => (
            <Tr>
              <Td>{row.firstName}</Td>
              <Td>{row.lastName}</Td>
              <Td>{row.email}</Td>
              <Td>{row.dateOfBirth}</Td>
              <Td>
                <AiFillDelete className={styles.icon} />
                <AiFillEdit className={styles.icon} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
