const DisplayMathProblem = ({totalCount, totalQuestions, x, y, handleClick}) => {
    
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

export default DisplayMathProblem