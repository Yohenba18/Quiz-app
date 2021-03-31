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

        <div className="quiz__ans">
        <div className="quiz__top">
        <div className="options col-3"><button>Jeff Bezos</button></div>
            <div className="options col-3"><button>Elon Musk</button></div>
        </div>
        <div className="quiz__bottom">
        <div className="options col-3"><button>Bill Gates</button></div>
            <div className="options col-3"><button>Mark Zukerberg</button></div>
        </div>
            
            
        </div>
      </div>
      <footer>
       <p>Made with 💖 by Yohenba Kshetrimayum</p>
      </footer>
    </div>
  );
}

export default App;
