import { useState } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

const updateAnswer = async (e, currentID, latestAnswer) => {
  e.preventDefault();

  try {
    const body = { latestAnswer };
    const response = await fetch(
      `http://localhost:5000/worksheet/${currentID}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
};

const MathProblemCard = ({ problem }) => {
  const [latestAnswer, changeAnswer] = useState(problem.answer);
  const currentID = problem.q_id;

  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md">Question #{problem.q_num}</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="2xl">{problem.statement}</Text>
        <Editable defaultValue={latestAnswer || null} fontSize="4xl" as="b">
          <EditablePreview />
          <Input
            as={EditableInput}
            onChange={(e) => changeAnswer(e.target.value)}
          />
        </Editable>
      </CardBody>
      <CardFooter>
        <Button onClick={(e) => updateAnswer(e, currentID, latestAnswer)}>
          Update Answer
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MathProblemCard;
