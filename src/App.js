import Header from "./components/Header";
import QuizStart from "./components/QuizStart";
import Container from "./components/Container";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { useState } from "react";
let questions =[
  {
    question: 'Language that runs inside browser',
    options:['Java','C','Python','Html'],
    ans :1
  },
  {
    question: 'Do you know how to get job',
    options:['Yes','No','May be','None'],
    ans :2
  },
  {
    question: 'Do you know who am I',
    options:['Yes','No','May be','None'],
    ans :3
  },
  {
    question: 'Do you have mental',
    options:['Yes','No','May be','None'],
    ans :4
  }
]
function App() {
  let [isStarted, setIsStarted]= useState(false)
  let [currentQuiz,setCurrentQuiz]=useState(0)
  
  function changeQuiz(){
    setCurrentQuiz(currentQuiz+1);
  }
    return(
    <>
     <Header />
     <Container>
    {isStarted ?(
    currentQuiz < questions.length? (
    <Quiz changeQuiz={changeQuiz} q={questions[currentQuiz]}/> 
    ):( 
      <Result/>
    )
    ):(
    <QuizStart setIsStarted={setIsStarted}/>
    )}
    </Container>

    </>
  );
}
export default App;
      