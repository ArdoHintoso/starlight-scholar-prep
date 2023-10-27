import useMathProblem from "../useMathProblem";
import DisplayMathProblem from "./DisplayMathProblem";
import DisplayMathResults from "./DisplayMathResults";

const MathExerciseContainer = () => {
  let [
    x,
    operator,
    y,
    totalCount,
    totalQuestions,
    operandsAndOperators,
    checkerFn,
    handleClick,
  ] = useMathProblem(10, 1, 0, 10);

  return totalCount < totalQuestions ? (
    <DisplayMathProblem
      totalCount={totalCount}
      totalQuestions={totalQuestions}
      x={x}
      operator={operator}
      y={y}
      operandsAndOperators={operandsAndOperators}
      checkerFn={checkerFn}
      handleClick={handleClick}
    />
  ) : (
    <DisplayMathResults />
  );
};

export default MathExerciseContainer;
