export default function QuizStart(props){
    return(
        <div className="quiz-start flex-center">
            <p>Check your knowledge by attending the quiz,give a try!!</p>
            <button onClick={()=>props.setIsStarted(true)}>Start</button>
        </div>
    )

}



