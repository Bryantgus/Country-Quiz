import {useState, useEffect} from "react"
import NumberQuestion from "../NumberQuestion"

export default function Quiz() {

    const array = [1,2,3,4,5,6,7,8,9,10];
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
                <NumberQuestion number={1} wasAnswer={false}/>
            </div>
        </div>
    )
}
