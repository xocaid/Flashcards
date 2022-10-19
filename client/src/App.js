import './App.css';
import { useState } from "react";
import FlashCards from './components/allFlashCards';


function App() {
  const [displayJs, setDisplayJs] = useState(true);
  const [displayArr, setDisplayArr] = useState(true);
  const [displayObj, setDisplayObj] = useState(true);

  const handleDisplayJs = () => {
    setDisplayJs(!displayJs);
  };
  const handleDisplayArr = () => {
    setDisplayArr(!displayArr);
  };
  const handleDisplayObj = () => {
    setDisplayObj(!displayObj);
  };

  return (
    <div className="App">
      <h1>Quiz App - App.js</h1>
      {displayJs ? (
        <div onClick={handleDisplayJs}>
          <h3>JS Questions</h3>
        </div>
      ) : (
        <FlashCards />
      )}

      {displayArr ? (
        <div onClick={handleDisplayArr}>
          <h3>Array Questions</h3>
        </div>
      ) : (
        <div onClick={handleDisplayArr}>
          Testing Arr Display
        </div>
      )}

      {displayObj ? (
        <div onClick={handleDisplayObj} >
          <h3> Object Questions</h3>
        </div>
      ) : (
        <div>
          <p>Testing for Obj Display</p>
        </div>
      )}
    </div>
  );
}

export default App;
