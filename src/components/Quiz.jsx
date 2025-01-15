import {useState, useEffect} from "react"
import NumberQuestion from "./NumberQuestion";
import BtnAnswer from "./BtnAnswer";
import infoCountries from "../data/InfoCountries.json"

export default function Quiz() {
    
    const [numberQuestions, setNumberQuestions] = useState([
        [1,false],[2,false],[3,false],[4,false],[5,false],[6,false],
        [7,false],[8,false],[9,false],[10,false]]);
    
    const [question, setQuestion] = useState("");        
    const [answers, setAnswers] = useState([1,2,3,4]);
    const [correctAnswer, setCorrectAnswer] = useState("");

    function NextQuestion() {
        const numberQuestion = Math.floor(Math.random() * 4);
        const numberCountry = Math.floor(Math.random() * 250);
        const countrySelected = infoCountries[numberCountry]

        switch (numberQuestion) {
            case 0:
                setQuestion(`What is the capital of ${countrySelected.name.common}`);
                setCorrectAnswer(countrySelected.capital);
              break;
            case 1:
                setQuestion(`What is the name of the country whose capital is? ${countrySelected.capital}`);
                setCorrectAnswer(countrySelected.name.common);
              break;
            case 2:
                setQuestion(`What is the population of  ${countrySelected.name.common}`);
                setCorrectAnswer(countrySelected.population);
              break;
            case 3:
                setQuestion(`What is the area of ${countrySelected.name.common}`);
                setCorrectAnswer(countrySelected.area);
              break;
            default:
          }
        let allAnswers = [];
        let positionOfCorrectAnswer = Math.floor(Math.random() * 4);
        for (let index = 0; index < 3; index++) {
            
            if (index === positionOfCorrectAnswer) {
                allAnswers.push(correctAnswer);
            } else {
            allAnswers.push(Math.floor(Math.random() * 250));
            }
        }
          setAnswers(allAnswers);
          console.log(question);
          console.log()
          
    }

    return (
        <div className="quizComponentContainer">
            <header>
            <h1>Country Quiz</h1>
            <div className="points">
                <div className="trophy"></div>
                <span>na/10 Points</span>   
                </div>
            </header>

            <div className="quizContainer">

                <div className="numbers">
                    {numberQuestions.map((item, index) => {
                        return (
                            <NumberQuestion 
                            key={index} 
                            number={item[0]} 
                            wasAnswer={item[1]}/>      
                        )
                    })}
                </div>
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
