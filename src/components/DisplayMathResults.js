import { useState } from "react";
import CompletedMathProblems from "./CompletedMathProblems";
import { Text } from "@chakra-ui/react";

const DisplayMathResults = () => {
  const [completed, setResults] = useState([]);
  const getResults = async () => {
    try {
      const response = await fetch("http://localhost:5000/mathResults");
      const jsonData = await response.json();

      setResults(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  getResults();

  let correctSum = completed.reduce(
    (accumulator, current) => accumulator + current.correct,
    0,
  );

  return (
    <div>
      <Text height="40px">
        {" "}
        Accuracy: {(correctSum / completed.length) * 100}%{" "}
      </Text>
      <CompletedMathProblems completed={completed} />
    </div>
  );
};

export default DisplayMathResults;
