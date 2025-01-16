import {useState, useEffect} from "react"
import NumberQuestion from "./NumberQuestion";
import BtnAnswer from "./BtnAnswer";
import infoCountries from "../data/InfoCountries.json"

export default function Quiz() {
    
    const [numberQuestions, setNumberQuestions] = useState(0);
    
    const [question, setQuestion] = useState("");        
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
        /*Logica del juego*/
        /* 2 numeros aleatorios.Uno para escoger la pregunta y otro el pais*/
    useEffect(() => {
        
        const numberCountry = Math.floor(Math.random() * 250);
        const countrySelected = infoCountries[numberCountry];
        const questionSelected = Math.floor(Math.random() * 4);
        var correctAnswer = "";
        /*Array para saber cuales datos extraer*/
        var whichData = [];
        switch (questionSelected) {
            case 0:
                setQuestion(`What is the capital of ${countrySelected.name.common}`);
                correctAnswer = countrySelected.capital;
                setCorrectAnswer(correctAnswer);
                whichData = ["capital"];  
                break;
            case 1:
                setQuestion(`What is the name of the country whose capital is? ${countrySelected.capital}`);
                correctAnswer = countrySelected.capital;
                setCorrectAnswer(correctAnswer);
                whichData = ["name", "common"]; 
                break;
            case 2:
                setQuestion(`What is the population of  ${countrySelected.name.common}`);
                correctAnswer = countrySelected.capital;
                setCorrectAnswer(correctAnswer);
                whichData = ["population"];
                
                break;
            case 3:
                setQuestion(`What is the area of ${countrySelected.name.common}`);
                correctAnswer = countrySelected.capital;
                setCorrectAnswer(correctAnswer);
                whichData = ["area"];
                break;
            default:
            }

        /*Se crea un array para guardar las respuestas*/
        const allAnswers = []; 
        /*Numero aleatorio para la posicion en el array de la respuesta correcta */ 
        const positionOfCorrectAnswer = Math.floor(Math.random() * 4);
        /*Se iteran 4 valores que seran las 4 posibles respuestas */
        for (let index = 0; index < 4; index++) {
            /*Si index coincide con el numero de la posicion de la respuesta correcta este sera su posicion en el array */
            if (index === positionOfCorrectAnswer) {
                allAnswers.push(correctAnswer[0]);
                /*Si no se agrega cualquier otra respuesta de otro pais*/
            } else {
                /*Aseguramos que la pregunta no se repita */
                do {
                    var positionOtherAnswer = Math.floor(Math.random() * 250)  
                } while(positionOtherAnswer === positionOfCorrectAnswer);
                /*Aqui vemos cual pregunta se hizo con questionSelected para asi tomar solo los datos necesarios del json infoCountries */
                const otherAnswer = whichData.reduce((obj, key) => obj && obj[key], infoCountries);
                allAnswers.push(otherAnswer);
            }
        }
        setAnswers(allAnswers);
        console.log(allAnswers);
    },[numberQuestions]);

    

    return (
        <div className="quizComponentContainer">
            <button onClick={() => setNumberQuestions((prev) => prev + 1)}>clickme</button>
            <button onClick={() => {console.log(correctAnswer[0])}}>clickme</button>
            <header>
            <h1>Country Quiz</h1>
            <div className="points">
                <div className="trophy"></div>
                <span>na/10 Points</span>   
                </div>
            </header>

            <div className="quizContainer">

                {/* <div className="numbers">
                    {numberQuestions.map((item, index) => {
                        return (
                            <NumberQuestion 
                            key={index} 
                            number={item[0]} 
                            wasAnswer={item[1]}/>      
                        )
                    })}
                </div> */}
                <div className="question">
                    <span>
                        {question}
                    </span>
                </div>
                <div className="answer">
                    {answers.map((item, index) => {
                        return (
                            <BtnAnswer 
                                key={index}
                                answer={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
