import React from 'react';
import './App.css';

function App() {
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
          <h3><span>1.</span> Who is the richest person in the world?</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
