import { useState } from "react";

const SingleFlashCard = (props) => {
  let singleFlashCard = props.singleFlashCard;
  let number = props.number;

  const [flipCard, setFlipCard] = useState(true);

  const handleFlipCard = () => {
    setFlipCard(!flipCard);
  }

  return (
    <div className="single-flashcard">
      {flipCard ? (
        <div onClick={handleFlipCard}>
          <div className="question#">
            <p>Question {singleFlashCard.id}/{number}</p>
          </div>

          <div className="questionDiv">
            <h3 >{singleFlashCard.question}</h3>
          </div>
        </div>
      ) : (
        <div onClick={handleFlipCard}>
          <div className="question#">
            <p>Question {singleFlashCard.id}</p>
          </div>

          <div className="answerDiv" >
            <p >{singleFlashCard.answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default SingleFlashCard; 