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
  Tooltip,
  Stack,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import styles from "./TableContent.module.css";
import moment from "moment";

const TableContent = ({
  colorScheme,
  tableCaption,
  tableHeaderData,
  tableRowData,
  deletAction,
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
              <Td>{`${row.firstName} ${row.lastName}`}</Td>
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
      </Table>
    </TableContainer>
  );
};

export default TableContent;
