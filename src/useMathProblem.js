import { useState } from "react";
import operandsAndOperators from "./mathOperations";

const useMathProblem = (xStart, yStart, currentCount, totalQuestions) => {
  let xRange = xStart;

  let operator =
    Object.keys(operandsAndOperators)[
      Math.floor(Math.random() * Object.keys(operandsAndOperators).length)
    ];
  let [totalCount, setTotalCount] = useState(currentCount);
  const [lastQuestion, updateLast] = useState("");
  const [completed, setCompleted] = useState([]);

  const genVal = function (range) {
    return Math.floor(Math.random() * range) + 1;
  };

  let x = genVal(xRange);
  let y = genVal(yStart);

  // to prevent the same question from being asked again back-to-back:
  while (
    operandsAndOperators[operator].templateLiteral(x, y) === lastQuestion
  ) {
    x = genVal(xRange);
    y = genVal(yStart);
  }

  const checkerFn = function (x, operator, y, usrInput) {
    return usrInput === operandsAndOperators[operator].expression(x, y)
      ? true
      : false;
  };

  const handleClick = () => {
    updateLast(operandsAndOperators[operator].templateLiteral(x, y));
    totalCount++;
    setTotalCount(totalCount);
  };

  return [
    x,
    operator,
    y,
    totalCount,
    totalQuestions,
    operandsAndOperators,
    completed,
    checkerFn,
    setCompleted,
    handleClick,
  ];
};

export default useMathProblem;
