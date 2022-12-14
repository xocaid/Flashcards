import React, { useState } from 'react';
import AllCards from './allCards';

function QuizSelection() {
  const [technical, setTechnical] = useState(false);
  const [softSkills, setSoftSkills] = useState(false);
  const [combined, setCombined] = useState(false);

  const displayTechnical = () => {
    setTechnical(!technical);
    setSoftSkills(false);
    setCombined(false);
  }

  const displaySoftSkills = () => {
    setSoftSkills(!softSkills);
    setTechnical(false);
    setCombined(false);
  }

  const displayCombined = () => {
    setCombined(!combined);
    setTechnical(false);
    setSoftSkills(false);
  }

  return (
    <div className='quizselection-container'>
      <div className='quizselection-btns'>
        <button onClick={displayTechnical}>Technical</button>
        <button onClick={displaySoftSkills}>Soft Skills</button>
        <button onClick={displayCombined}>Combined</button>
      </div>

      <div className='quizselection-content'>
        {technical &&(
        <AllCards />
      )}

      {softSkills && (
        <h1>Testing Soft Skills Text</h1>
      )}

      {combined && (
        <h1>Testing Combined Text</h1>
      )}

      </div>
    </div>
  )
}

export default QuizSelection;
