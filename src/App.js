import react, {useState} from 'react';
import "./App.css";

function App() {
  // Creating state to store Input data taken from the user, by default is empty string
  const [inputValue,setInputValue] = useState("");

  // Creating state to store the position taken from the user, by default is top
  const [position,setPosition] = useState("top");

  // Created function to change the state, when the value is given or changed to input tag
  function isInputValue(e){
    setInputValue(e.target.value)
  }
  // Created function to change the state, when the position is changed by the user
  function isPosition(e){
    setPosition(e.target.value)
  }
  return (
    // Main Container
    <div className="container">
      <div className="userInputs">
        {/* Taking Input from the user for the tooltip */}
        <div className="inputContainers" style={{ marginBottom: "1rem" }}>
          <label htmlFor="tolltipUserData">Enter the Tooltip &gt;</label>
          {/* Calling the isInputValue function when some change if detected */}
          <input type="text" onChange={isInputValue} value = {inputValue} id="tolltipUserData"></input>
        </div>
        {/* Giving the choices to the user for Tooltip position */}
        <div className="inputContainers">
          <p>Choose the position &gt; </p>
          {/* Calling the isPosition function when some change if detected in the value of dropdown list*/}
          <select name="position" id="position" onChange={isPosition}>
            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
          </select>
        </div>
      </div>
      {/* Creating the hover button */}
      <div className="hoverContainer">
        <div className="hoverBtn">
          <p>Hover Me</p>
        </div>

        {/* Creating tooltip div and doing conditional rendering for tooltip value */}
        <div className={`tip ${position}`}>
            {inputValue ? inputValue: "!!Please Enter Value!!"}
        </div>
      </div>
    </div>
  );
}

export default App;
