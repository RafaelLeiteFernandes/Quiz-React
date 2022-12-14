import {useContext, useEffect} from "react";
import {QuizContext} from "./context/quiz";

import Welcome from './components/Welcome'
import { Questions } from "./components/Questions"

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() =>{
    dispatch({type: "REODER_QUESTIONS"})
    
  }, [])

  return (
    <div className="App">
     <h1>Quiz de Programação</h1>
     {quizState.gameStage === "start" && <Welcome />}
     {quizState.gameStage === "playing" && <Questions />}
    </div>
  )
}

export default App
