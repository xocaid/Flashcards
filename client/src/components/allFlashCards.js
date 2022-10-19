import { useState, useEffect } from "react";
import SingleFlashCard from "./singleFlashCard";

const FlashCards = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/js")
      .then((response) => response.json())
      .then((singleCard) => {
        setFlashcards(singleCard);
      });
  }, []);

  //POST Request - Posts
  // const postJsQuestions = (newPost) => {
  //   return fetch("http://localhost:8080/js", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newPost),
  //   })
  // };

  return (
    <div className="flashcard-single">
      <h1>JS Questions</h1>
      <div className='allposts'>
        {flashcards.map((card, index) => {
          return (
            <SingleFlashCard key={index} singleFlashCard={card} />
          )
        }
        )}
      </div>
    </div>
  )
}
export default FlashCards;