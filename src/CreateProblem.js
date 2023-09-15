import { useState } from "react";

const answerLog = { problems: [], correct: [], incorrect: [] };

const CreateProblem = (
  xStart,
  yStart,
  currentCorrect,
  currentCount,
  totalQuestions,
) => {
  let xRange = xStart;
  const [yRange, setYrange] = useState(yStart);
  const [correctCount, setCorrectCount] = useState(currentCorrect);
  const [totalCount, setTotalCount] = useState(currentCount);
  let accuracy = correctCount / totalCount;

  const genVal = function (range) {
    return Math.floor(Math.random() * range) + 1;
  };

  let x = genVal(xRange);
  let y = genVal(yRange);

  // to prevent the same question from being asked again back-to-back:
  while (`${x}+${y}=` === answerLog.problems[answerLog.problems.length - 1]) {
    x = genVal(xRange);
    y = genVal(yRange);
  }

  const checkerFn = function (x, y, usrInput) {
    if (Number(usrInput) === x + y) {
      setCorrectCount(correctCount + 1);
      if (totalCount >= 10 && accuracy >= 0.8) {
        setYrange(yRange + 1);
      }
      return true;
    }
  };

  const handleClick = () => {
    let userInput = document.getElementById("UserInput").value;
    if (checkerFn(x, y, userInput)) {
      console.log(`nice, that's correct`);
      answerLog["correct"].push(`${x}+${y}=${userInput}`);
    } else if (yRange > 1) {
      setYrange(yRange - 1);
      answerLog["incorrect"].push(`${x}+${y}=${userInput}`);
    } else {
      answerLog["incorrect"].push(`${x}+${y}=${userInput}`);
    }
    answerLog["problems"].push(`${x}+${y}=`);
    console.log(answerLog);
    setTotalCount(totalCount + 1);
  };

  return [x, y, totalCount, handleClick, accuracy, totalQuestions, answerLog];
};

export default CreateProblem;
