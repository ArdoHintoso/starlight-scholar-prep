import useMathProblem from "./useMathProblem";
import DisplayMathProblem from "./DisplayMathProblem";
import DisplayMathResults from "./DisplayMathResults";

const MathExerciseContainer = () => {
  let [
    x,
    operator,
    y,
    operandsAndOperators,
    totalCount,
    handleClick,
    totalQuestions,
    answerLog,
  ] = useMathProblem(10, 1, 0, 0, 20);

  return totalCount < totalQuestions ? (
    <DisplayMathProblem
      totalCount={totalCount}
      totalQuestions={totalQuestions}
      x={x}
      operator={operator}
      y={y}
      operandsAndOperators={operandsAndOperators}
      handleClick={handleClick}
    />
  ) : (
    <DisplayMathResults answerLog={answerLog} />
  );
};

export default MathExerciseContainer;
