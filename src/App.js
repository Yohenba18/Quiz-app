import React, { useState } from "react";
import "./App.css";

function App() {
   
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [score,setScore] = useState(0)
  const [current,setCurrent] = useState(0)
  const [showScore,setShowScore] = useState(false)

  return (
    <div className="App">
      <div className="quiz">
        <div className="quiz__header">
          <div className="quiz__headerLeft">
            <span>Questions</span>
          </div>
          <div className="quiz__headerRight">
            <span id="id1">1/</span>
            <span id="id5">5</span>
          </div>
        </div>
        <div className="quiz__ques">
          <h3>
            <span>1.</span> {questions[0].questionText}
          </h3>
        </div>

        <div className="quiz__ans">
          {
            questions[0].answerOptions.map((answerOption) => (
              <div className="options">
              <button>{answerOption.answerText}</button>
              </div>
            ))
          }
        </div>
      </div>


      <footer>
        <p>Made with 💖 by Yohenba Kshetrimayum</p>
      </footer>
    </div>
  );
}

export default App;
