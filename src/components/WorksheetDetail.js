import { Tr, Td } from "@chakra-ui/react";

const WorksheetDetail = ({ worksheet }) => {
  return (
    <Tr>
      <Td>{worksheet.w_id}</Td>
      <Td>{worksheet.date}</Td>
      <Td>{worksheet.completion}</Td>
      <Td>{worksheet.accuracy}%</Td>
    </Tr>
  );
};

export default WorksheetDetail;
