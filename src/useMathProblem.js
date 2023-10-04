import { useState } from "react";

const useMathProblem = (
  xStart,
  yStart,
  currentCorrect,
  currentCount,
  totalQuestions,
) => {
  let xRange = xStart;
  const operandsAndOperators = {
    addition: {
      expression: (x, y) => x + y,
      templateLiteral: (x, y) => `${x}+${y}=`,
      fullEquation: (x, y, userInput) => `${x}+${y}=${userInput}`,
    },
    subtraction: {
      expression: (x, y) => x - y,
      templateLiteral: (x, y) => `${x}-${y}=`,
      fullEquation: (x, y, userInput) => `${x}-${y}=${userInput}`,
    },
    multiplication: {
      expression: (x, y) => x * y,
      templateLiteral: (x, y) => `${x}*${y}=`,
      fullEquation: (x, y, userInput) => `${x}*${y}=${userInput}`,
    },
    division: {
      expression: (x, y) => x / y,
      templateLiteral: (x, y) => `${x}/${y}=`,
      fullEquation: (x, y, userInput) => `${x}/${y}=${userInput}`,
    },
  };
  let operator =
    Object.keys(operandsAndOperators)[
      Math.floor(Math.random() * Object.keys(operandsAndOperators).length)
    ];
  let [correctCount, setCorrectCount] = useState(currentCorrect);
  let [totalCount, setTotalCount] = useState(currentCount);
  const [yRange, setYrange] = useState(yStart);
  const [answerLog, updateLog] = useState({
    problems: [],
    correct: [],
    incorrect: [],
    accuracy: 0.0,
  });

  const genVal = function (range) {
    return Math.floor(Math.random() * range) + 1;
  };

  let x = genVal(xRange);
  let y = genVal(yRange);

  // to prevent the same question from being asked again back-to-back:
  while (
    operandsAndOperators[operator].templateLiteral(x, y) ===
    answerLog.problems[answerLog.problems.length - 1]
  ) {
    x = genVal(xRange);
    y = genVal(yRange);
  }

  const checkerFn = function (x, y, usrInput) {
    if (Number(usrInput) === operandsAndOperators[operator].expression(x, y)) {
      correctCount++;
      setCorrectCount(correctCount);
      if (totalCount >= 10 && answerLog.accuracy >= 0.8) {
        setYrange(yRange + 1);
      }
      return true;
    }
  };

  const handleClick = () => {
    let userInput = document.getElementById("UserInput").value;
    totalCount++;
    setTotalCount(totalCount);

    if (checkerFn(x, y, userInput)) {
      console.log(`nice, that's correct`);
      answerLog["correct"].push(
        operandsAndOperators[operator].fullEquation(x, y, userInput),
      );
    } else if (yRange > 1) {
      setYrange(yRange - 1);
      answerLog["incorrect"].push(
        operandsAndOperators[operator].fullEquation(x, y, userInput),
      );
    } else {
      answerLog["incorrect"].push(
        operandsAndOperators[operator].fullEquation(x, y, userInput),
      );
    }

    answerLog["problems"].push(
      operandsAndOperators[operator].templateLiteral(x, y),
    );
    answerLog.accuracy = correctCount / totalCount;
    updateLog(answerLog);
    console.log(answerLog);
  };

  return [
    x,
    operator,
    y,
    operandsAndOperators,
    totalCount,
    handleClick,
    totalQuestions,
    answerLog,
  ];
};

export default useMathProblem;
