import "./App.css"
import Start from "./components/Start"
import Quiz from "./components/Quiz"
import { useState } from "react"

export default function App() {

  
  return (
		<div className="appContainer">
			{/* <Start /> */}
			<Quiz />
		</div>
  )
}