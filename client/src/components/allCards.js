// import { useState, useEffect } from "react";

// const QuizQs = () => {

//   const [quizInfo, setQuizInfo] = useState(0);
//   const [currentQuestion, setCurrentQuestions] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [score, setScore] = useState(0);


//   const handleAnswerButtonClick = (isCorrect) => {
//     if (isCorrect === true) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < quizInfo.length) {
//       setCurrentQuestions(nextQuestion);
//     } else {
//       setShowScore(true);
//     }

//   }

//   const restartGame = () => {
//     setScore(0);
//     setCurrentQuestions(0);
//     setShowScore(false);
//   }


//   const loadData = () => {
//     fetch('http://localhost:8080/api/hardcodequizinfo')
//       .then((response) => response.json())
//       .then(
//         (data) => {
//           console.log(data);

//           setQuizInfo(data);
//         }
//       );
//   };

//   useEffect(() => {
//     loadData();
//   }, []);



//   return (
//     <div>
//       <h3>This is a Quiz Info placeholder.</h3>

//       {showScore ? (
//         <div className="score-section">
//           You scored {score} out of {quizInfo.length}
//           <p>
//             <button onClick={() => restartGame()}>Restart Quiz</button>
//           </p>
//         </div>
//       ) : (
//         <>
//           <div className="question-section">

//             <div className="question-count">
//               Question {currentQuestion + 1}/{quizInfo.length}
//             </div>

//             <div className="quetion-text">
//               {/* PLACEHOLDER: This where the QUESTION TEXT will go. currentQuestion
//           replaces the number(0), number is now stored in the useState, making it dynamic  */}
//               {quizInfo[currentQuestion].questionText}
//             </div>

//             <div className="answer-section">
//               {/* Since the hardcode data is in the SERVER index.js, I need
//           to access it with quizInfo first. This map display the multiple
//           // choice answer options. Need to add function to handleAnswerButtonClick, so that it can process the correct answer on the click*/}
//               {quizInfo[currentQuestion].answerOptions.map(
//                 (answerOptions) => (
//                   <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>))}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }
// export default QuizQs;