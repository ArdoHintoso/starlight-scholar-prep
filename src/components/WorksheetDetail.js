import { Tr, Td } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const WorksheetDetail = ({ worksheet }) => {
  return (
    <Tr>
      <Td>
        <Link to={`/worksheet/${worksheet.w_id}`}>{worksheet.date}</Link>
      </Td>
      <Td>{worksheet.completion}</Td>
      <Td>{worksheet.accuracy}%</Td>
    </Tr>
  );
};

export default WorksheetDetail;
