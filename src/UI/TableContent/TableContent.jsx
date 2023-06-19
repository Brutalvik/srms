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
import { AiFillDelete } from "react-icons/ai";
import styles from "./TableContent.module.css";
import moment from "moment";
import { startCase } from "lodash";

const TableContent = ({
  colorScheme,
  tableCaption,
  tableHeaderData,
  tableRowData,
  deletAction,
  type,
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
        {type === "student" && tableRowData?.length > 0 ? (
          <Tbody>
            {tableRowData.map((row) => (
              <Tr key={row._id}>
                <Td>{`${startCase(row.firstName)} ${startCase(
                  row.lastName
                )}`}</Td>
                <Td>{moment(row.dateOfBirth).format("DD/MM/YYYY")}</Td>
                <Td>{row.email}</Td>
                <Td>
                  <AiFillDelete
                    className={styles.delete}
                    onClick={() => deletAction(row)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        ) : type === "courses" && tableRowData?.length > 0 ? (
          <Tbody>
            {tableRowData.map((row) => (
              <Tr key={row._id}>
                <Td>{`${startCase(row.courseName)}`}</Td>
                <Td>
                  <AiFillDelete
                    className={styles.delete}
                    onClick={() => deletAction(row)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        ) : (
          type === "results" &&
          tableRowData?.length > 0 && (
            <Tbody>
              {tableRowData.map((row) => {
                return (
                  <Tr key={row._id}>
                    <Td>{`${startCase(row.studentName)}`}</Td>
                    <Td>{`${startCase(row.courseName)}`}</Td>
                    <Td>{`${startCase(row.grade)}`}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          )
        )}
      </Table>
    </TableContainer>
  );
};

export default TableContent;
