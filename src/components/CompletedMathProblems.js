import MathProblemCard from "./MathProblemCard";
import { SimpleGrid } from "@chakra-ui/react";

const CompletedMathProblems = ({ completed }) => {
  return (
    <SimpleGrid
      spacing={10}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {completed.map((eachQuestion) => {
        return (
          <MathProblemCard key={eachQuestion.q_id} problem={eachQuestion} />
        );
      })}
    </SimpleGrid>
  );
};

export default CompletedMathProblems;
