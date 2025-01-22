import {useState, useEffect} from "react"
import NumberQuestion from "./NumberQuestion";
import BtnAnswer from "./BtnAnswer";
import infoCountries from "../data/InfoCountries.json"
import Questions from "../data/Questions.json"

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

        const randomNumQuestion = Math.floor(Math.random() * Questions.length);
        let stringToReplace = Questions[randomNumQuestion]["dataQuestion"].reduce(
            (obj, key) => obj && obj[key],
             countrySelected
            );


        const questionSelected = Questions[randomNumQuestion]["question"].replace("replace", stringToReplace);
        
        let correctAnswer = Questions[randomNumQuestion]["dataAnswer"].reduce(
            (obj, key) => obj && obj[key],
             countrySelected
            );
        correctAnswer = Array.isArray(correctAnswer) ? correctAnswer[0] : correctAnswer;
    
        var allAnswers = [];
        //Position Correct Answer
        const pca = Math.floor(Math.random() * 4);
        for (let index = 0; index < 4; index++) {
            if (index === pca) {
                allAnswers.push(correctAnswer);
            } else {
                do {
                    var randomCountry = Math.floor(Math.random() * 250);
                } while (randomCountry === numberCountry);
                var otherAnswer = Questions[randomNumQuestion]["dataQuestion"].reduce((obj, key) => obj && obj[key], infoCountries[randomCountry]);
                console.log(otherAnswer);
                allAnswers.push(otherAnswer);
            }          
        }
        allAnswers = allAnswers.map(answer => 
            typeof answer === "number" ? answer.toLocaleString() : answer
        );
            
        setAnswers(allAnswers);  
        setQuestion(questionSelected);
    }, [numberQuestions]);
    

    

    return (
        <div className="quizComponentContainer">
            <button onClick={() => setNumberQuestions((prev) => prev + 1)}>clickme</button>
            <button onClick={() => {console.log(correctAnswer)}}>clickme</button>
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
