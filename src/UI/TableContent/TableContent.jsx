import React from "react";
import {
  Table,
  Thead,
  Tbody,
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
  deletAction,
  editAction,
}) => {
  return (
    <TableContainer>
      <Table colorScheme={colorScheme}>
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
            <Tr key={row._id}>
              <Td>{row.firstName}</Td>
              <Td>{row.lastName}</Td>
              <Td>{row.email}</Td>
              <Td>{row.dateOfBirth}</Td>
              <Td className={styles.action}>
                <AiFillDelete
                  className={styles.delete}
                  onClick={() => deletAction(row)}
                />
                <AiFillEdit
                  className={styles.edit}
                  onClick={() => editAction(row)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
