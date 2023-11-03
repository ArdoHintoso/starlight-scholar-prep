import {
  Center,
  Text,
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
import { Link } from "react-router-dom";

const HomePage = () => {
  const date = new Date();

  return (
    <div>
      <Center>
        <Link to="/worksheet">
          <Text>Start New Worksheet</Text>
        </Link>
      </Center>

      <TableContainer color="teal">
        <Table variant="simple" colorScheme="teal">
          <TableCaption> __________&apos;s Past Worksheets</TableCaption>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Status</Th>
              <Th isNumeric>Accuracy</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{date.toString()}</Td>
              <Td>Complete</Td>
              <Td isNumeric>100.0%</Td>
            </Tr>
            <Tr>
              <Td>XXX</Td>
              <Td>Incomplete</Td>
              <Td isNumeric>5.0%</Td>
            </Tr>
            <Tr>
              <Td>XXX</Td>
              <Td>Incomplete</Td>
              <Td isNumeric>0.0%</Td>
            </Tr>
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HomePage;
