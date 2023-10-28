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
  useBoolean,
} from "@chakra-ui/react";

const updateAnswer = async (
  e,
  currentID,
  latestAnswer,
  x,
  currentOperator,
  y,
  getCompleted,
  checkerFn,
) => {
  e.preventDefault();

  try {
    const body = {
      latestAnswer,
      correct: checkerFn(x, currentOperator, y, parseInt(latestAnswer)),
    };
    const response = await fetch(
      `http://localhost:5000/worksheet/${currentID}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    console.log(response);

    getCompleted();
  } catch (error) {
    console.error(error.message);
  }
};

const MathProblemCard = ({ problem, checkerFn, getCompleted, summaryPage }) => {
  const [latestAnswer, changeAnswer] = useState(problem.answer);
  const [flag, setFlag] = useBoolean();
  const currentID = problem.q_id;
  const x = problem.operand1;
  const y = problem.operand2;
  const currentOperator = problem.operator;

  return (
    <Card align="center" color={problem.correct ? "green" : "red"}>
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
        {summaryPage ? (
          <Text />
        ) : (
          <Button
            onMouseEnter={setFlag.on}
            onMouseLeave={setFlag.off}
            onClick={(e) =>
              updateAnswer(
                e,
                currentID,
                latestAnswer,
                x,
                currentOperator,
                y,
                getCompleted,
                checkerFn,
              )
            }
          >
            {flag ? "Are you Sure?" : "Update Answer!"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MathProblemCard;
