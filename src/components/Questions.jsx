import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import './Questions.css'

export function Questions () {
    const [quizState, dispatch] = useContext(QuizContext);
const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
        <div id='question'>
           <p>
                Pergunta {quizState.currentQuestion +1} de {quizState.questions.length}
           </p>
           <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                <p>Opções</p>
            </div>
            <button>Continuar</button>
        </div>
    )
}