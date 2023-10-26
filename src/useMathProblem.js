import { useState } from "react";
import operandsAndOperators from "./mathOperations";

const useMathProblem = (
  xStart,
  yStart,
  // currentCorrect,
  currentCount,
  totalQuestions,
) => {
  let xRange = xStart;

  let operator =
    Object.keys(operandsAndOperators)[
      Math.floor(Math.random() * Object.keys(operandsAndOperators).length)
    ];
  // let [correctCount, setCorrectCount] = useState(currentCorrect);
  let [totalCount, setTotalCount] = useState(currentCount);
  const [lastQuestion, updateLast] = useState("");
  const [completed, setCompleted] = useState([]);
  // const [yRange, setYrange] = useState(yStart);
  // const [answerLog, updateLog] = useState({
  //   problems: [],
  //   correct: [],
  //   incorrect: [],
  //   accuracy: 0.0,
  // });

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

  const checkerFn = function (x, y, usrInput) {
    return Number(usrInput) === operandsAndOperators[operator].expression(x, y)
      ? true
      : false;
    // correctCount++;
    // setCorrectCount(correctCount);
    // if (totalCount >= 10 && answerLog.accuracy >= 0.8) {
    //   setYrange(yRange + 1);
    // }
  };

  const handleClick = () => {
    // let userInput = document.getElementById("UserInput").value;

    updateLast(operandsAndOperators[operator].templateLiteral(x, y));
    totalCount++;
    setTotalCount(totalCount);

    // if (checkerFn(x, y, userInput)) {
    //   console.log(`nice, that's correct`);
    //   answerLog["correct"].push(
    //     operandsAndOperators[operator].fullEquation(x, y, userInput),
    //   );
    // } else if (yRange > 1) {
    //   setYrange(yRange - 1);
    //   answerLog["incorrect"].push(
    //     operandsAndOperators[operator].fullEquation(x, y, userInput),
    //   );
    // } else {
    //   answerLog["incorrect"].push(
    //     operandsAndOperators[operator].fullEquation(x, y, userInput),
    //   );
    // }

    // answerLog["problems"].push(
    //   operandsAndOperators[operator].templateLiteral(x, y),
    // );
    // answerLog.accuracy = correctCount / totalCount;
    // updateLog(answerLog);
    // console.log(answerLog);
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
