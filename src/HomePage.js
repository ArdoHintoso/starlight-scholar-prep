import { useState, useEffect } from "react";
import {
  Center,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import WorksheetDetail from "./components/WorksheetDetail";
import { Link } from "react-router-dom";

const HomePage = () => {
  const date = new Date();
  const [wksheets, setWksheets] = useState([]);

  const onSubmitForm = async () => {
    try {
      const body = { date: date.toString() };
      const response = await fetch("http://localhost:5000/worksheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const getWorksheets = async () => {
      try {
        const response = await fetch("http://localhost:5000/allWorksheets");
        const jsonData = await response.json();

        setWksheets(jsonData);
      } catch (error) {
        console.error(error.message);
      }
    };

    getWorksheets();
  }, []);

  return (
    <div>
      <Center>
        <Link to="/worksheet">
          <Button
            onClick={() => {
              onSubmitForm();
            }}
          >
            Start New Worksheet
          </Button>
        </Link>
      </Center>

      <TableContainer color="teal">
        <Table variant="simple" colorScheme="teal">
          <TableCaption> __________&apos;s Past Worksheets</TableCaption>
          <Thead>
            <Tr>
              <Th>Date, Time, and Region</Th>
              <Th>Status</Th>
              <Th>Accuracy</Th>
            </Tr>
          </Thead>
          <Tbody>
            {wksheets.map((x) => {
              return <WorksheetDetail key={x.w_id} worksheet={x} />;
            })}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HomePage;
