const DisplayMathResults = ({ accuracy, answerLog }) => {
  return (
    <div>
      <h2> {`Worksheet Complete! Accuracy: ${accuracy * 100}%`} </h2>
      <h2>Let's Review Your...</h2>
      <h3>Correct Answers</h3>
      <ul>
        {answerLog["correct"].map((x) => (
          <li style={{ color: "green" }}> {x} </li>
        ))}
      </ul>
      <h3>Incorrect Answers</h3>
      <ul>
        {answerLog["incorrect"].map((x) => (
          <li style={{ color: "red" }}> {x} </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayMathResults;
