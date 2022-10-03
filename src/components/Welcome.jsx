import { useContext } from "react";
import { QuizContext } from "../context/quiz";


import Quiz from "../img/quiz.svg";
import "./Welcome.css";

export function Welcome () {
  const quizState = useContext(QuizContext);

  

  return (
    <div id="welcome">
        <h2>Seja bem-vindo !</h2>
        <p>Clique no botão para iniciar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inicio do quiz" />
    </div>
  )
}

