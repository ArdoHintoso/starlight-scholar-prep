import React, { useState } from "react";
import { Center, Stack, Text, Input, Button, Progress } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import CompletedMathProblems from "./CompletedMathProblems";

const DisplayMathProblem = ({
  totalCount,
  totalQuestions,
  x,
  operator,
  y,
  operandsAndOperators,
  completed,
  checkerFn,
  setCompleted,
  handleClick,
}) => {
  const [answer, setAnswer] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {
        x,
        operator,
        y,
        answer: parseInt(answer),
        statement: operandsAndOperators[operator].templateLiteral(x, y),
        qNum: totalCount + 1,
        correct: checkerFn(x, y, parseInt(answer)),
      };
      const response = await fetch("http://localhost:5000/worksheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setAnswer("");

      getCompleted();

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getCompleted = async () => {
    try {
      const response = await fetch("http://localhost:5000/worksheet");
      const jsonData = await response.json();

      setCompleted(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form>
        <Center height="200px">
          <Stack direction="row" spacing="24px" align="center">
            <Text fontSize="6xl" as="b">
              {" "}
              {operandsAndOperators[operator].templateLiteral(x, y)}{" "}
            </Text>
            <Input
              width="auto"
              variant="filled"
              inputMode="numeric"
              id="UserInput"
              onChange={(event) => setAnswer(event.target.value)}
              value={answer}
              placeholder="Insert Answer Here"
            />
            <Button
              colorScheme="teal"
              variant="ghost"
              leftIcon={<CheckIcon />}
              onClick={async (e) => {
                await onSubmitForm(e);
                handleClick(e);
              }}
              type="submit"
            >
              {totalCount === totalQuestions - 1
                ? "All Done!"
                : "Next Question"}
            </Button>
          </Stack>
        </Center>
      </form>
      <Text height="50px">
        {" "}
        {`Questions Attempted: ${totalCount}/${totalQuestions}`}
      </Text>
      <Progress
        colorScheme="pink"
        value={(totalCount / totalQuestions) * 100}
      />
      <Text height="30px" />
      <CompletedMathProblems completed={completed} />
    </div>
  );
};

export default DisplayMathProblem;
