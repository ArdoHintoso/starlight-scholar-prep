import MathProblemCard from "./MathProblemCard";
import { SimpleGrid } from "@chakra-ui/react";

const CompletedMathProblems = ({
  completed,
  summaryPage,
  checkerFn,
  getCompleted,
}) => {
  return (
    <SimpleGrid
      spacing={10}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {completed.map((eachQuestion) => {
        return (
          <MathProblemCard
            key={eachQuestion.q_id}
            problem={eachQuestion}
            checkerFn={checkerFn}
            getCompleted={getCompleted}
            summaryPage={summaryPage}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default CompletedMathProblems;
