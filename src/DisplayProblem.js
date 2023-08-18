import CreateProblem from "./CreateProblem"

const DisplayProblem = () => {
    let [x, y, totalCount, handleClick, accuracy, totalQuestions, answerLog] = CreateProblem(10, 1, 0, 0, 20);

    while(totalCount < totalQuestions) {
        if (totalCount === totalQuestions-1) {
            return (
                <div>
                    <h2> {x} + {y} = <input id='UserInput'></input><button onClick = {handleClick}>All Done!</button></h2>
                    <h3> {`Questions Attempted: ${totalCount}/${totalQuestions}`}</h3>
                </div>
            )
        }
        return (
            <div>
                <h2> {x} + {y} = <input id='UserInput'></input><button onClick = {handleClick}>Next Question</button></h2>
                <h3> {`Questions Attempted: ${totalCount}/${totalQuestions}`}</h3>
            </div>
        )
    } 

    return (
        
        <div>
            <h2> {`Worksheet Complete! Accuracy: ${accuracy*100}%`} </h2>
            <h2>Let's Review Your...</h2>
            <h3>Correct Answers</h3>
            <ul> 
                {answerLog['correct'].map( (x) => <li style={{color:"green"}}> {x} </li>)}
            </ul>
            <h3>Incorrect Answers</h3>
            <ul> 
                {answerLog['incorrect'].map( (x) => <li style={{color:"red"}}> {x} </li>)}
            </ul>
        </div>
    )
}

export default DisplayProblem