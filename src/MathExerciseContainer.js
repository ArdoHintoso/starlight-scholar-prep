import CreateProblem from "./CreateProblem"
import DisplayMathProblem from './DisplayMathProblem';
import DisplayMathResults from './DisplayMathResults';

const MathExerciseContainer = () => {
    let [x, y, totalCount, handleClick, accuracy, totalQuestions, answerLog] = CreateProblem(10, 1, 0, 0, 30);

    return totalCount < totalQuestions ? 
    <DisplayMathProblem
        totalCount={totalCount}
        totalQuestions={totalQuestions}
        x = {x}
        y = {y}
        handleClick={handleClick}
    /> : 
    <DisplayMathResults
        accuracy={accuracy}
        answerLog={answerLog}
    /> 
}

export default MathExerciseContainer