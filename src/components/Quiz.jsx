import {useState, useEffect} from "react"
import NumberQuestion from "./NumberQuestion";

export default function Quiz() {
    const [question, setQuestion] = useState("asdquestionquestionquestionquestionquestion");
    const array = [[1,true],[2,false],[3,true],[4,true],[5,true],[6,false],[7,false],[8,true],[9,true],[10,false]];
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
                    {array.map((item, index) => {
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
            </div>
        </div>
    )
}
