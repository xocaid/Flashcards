import { useState } from "react";
import JavascriptQuiz from './Technical Quiz/JavascriptQuiz';


function AllCards() {
  const [displayJs, setDisplayJs] = useState(false);
  const [displayArr, setDisplayArr] = useState(false);
  const [displayObj, setDisplayObj] = useState(false);

  const handleDisplayJs = () => {
    setDisplayJs(!displayJs);
    setDisplayArr(false);
    setDisplayObj(false);
  };
  const handleDisplayArr = () => {
    setDisplayArr(!displayArr);
    setDisplayJs(false);
    setDisplayObj(false);
  };
  const handleDisplayObj = () => {
    setDisplayObj(!displayObj);
    setDisplayArr(false);
    setDisplayJs(false);
  };

  return (
    <div className="allcards-container">
      <div className="allquiz-buttons">
        <button onClick={handleDisplayJs}>JavaScript Quiz</button>
        <button onClick={handleDisplayArr}>Array Quiz</button>
        <button onClick={handleDisplayObj}>Object Quiz</button>
      </div>

      <div className="allquiz-displayed">

        {displayJs && (
          <div>
            <JavascriptQuiz />
          </div>
        )}

        {displayArr && (
          <div>
            Array Quiz Placeholder
          </div>
        )}

        {displayObj && (
          <div>
            Object Quiz Placeholder
          </div>
        )}

      </div>

    </div>
  );
}

export default AllCards;
