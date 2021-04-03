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
		{
			questionText: 'Who is the founder of Bitcoin?',
			answerOptions: [
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Barry George', isCorrect: false },
				{ answerText: 'Emma Stone', isCorrect: false },
				{ answerText: 'Satoshi Nakamoto', isCorrect: true },
			],
		},
	];

  const [score,setScore] = useState(0)
  const [current,setCurrent] = useState(0)
  const [showScore,setShowScore] = useState(false)

  const handleAnswerOptionClick = (isCorrect) => {
	  if(isCorrect){
		  setScore(score+1);
	  }

	  const nextQuestion = current + 1;
		if (nextQuestion < questions.length) {
			setCurrent(nextQuestion);
		} else {
			setShowScore(true);
		}
  }

  return (
    <div className="App">

	{showScore? (
		<div className="quiz__score">
			<h2>Your Score is <span style={{color: "magenta"}}>{score}</span> out of <span style={{color: "#0DF5E3"}}>{questions.length}</span></h2>
			<h3>Thanks for playing 😁</h3>
		</div>
	): (
		<div className="quiz">
        <div className="quiz__header">
          <div className="quiz__headerLeft">
            <span>Questions</span>
          </div>
          <div className="quiz__headerRight">
            <span id="id1">{current + 1}/</span>
            <span id="id5">5</span>
          </div>
        </div>
        <div className="quiz__ques">
          <h3>
            <span>{current + 1}.</span> {questions[current].questionText}
          </h3>
        </div>

        <div className="quiz__ans">
          {
            questions[current].answerOptions.map((answerOption) => (
              <div className="options">
              <button onClick= {()=> handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              </div>
            ))
          }
        </div>
      </div>
	) }
    
      


      <footer>
        <p>Made with 💖 by Yohenba Kshetrimayum</p>
      </footer>
    </div>
  );
}

export default App;
