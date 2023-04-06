import React, { useState } from 'react';
 
function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleInput = e => {
    setInput(input => input + e.target.value);
  }

  const handleClear = () => {
    setInput("");
    setResult("");
  }

  const handleEquals = () => {
    setResult(eval(input));
    setHistory(history => [eval(input), ...history.slice(0,9)]);
    setInput("");
  }

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="row">
        <button className="operator" onClick={() => setInput(input => input + "+")}>+</button>
        <button className="operator" onClick={() => setInput(input => input + "-")}>-</button>
        <button className="operator" onClick={() => setInput(input => input + "*")}>*</button>
        <button className="operator" onClick={() => setInput(input => input + "/")}>/</button>
      </div>
      <div>
      <div className="row">
        <button onClick={() => setInput(input => input + "7")}>7</button>
        <button onClick={() => setInput(input => input + "8")}>8</button>
        <button onClick={() => setInput(input => input + "9")}>9</button>
      </div>
      <div className="row">
        <button onClick={() => setInput(input => input + "4")}>4</button>
        <button onClick={() => setInput(input => input + "5")}>5</button>
        <button onClick={() => setInput(input => input + "6")}>6</button>
      </div>
      <div className="row">
        <button onClick={() => setInput(input => input + "1")}>1</button>
        <button onClick={() => setInput(input => input + "2")}>2</button>
        <button onClick={() => setInput(input => input + "3")}>3</button>
      </div>
      <div className="row">
        <button onClick={() => setInput(input => input + "0")}>0</button>
        <button onClick={() => setInput(input => input + ".")}>.</button>
        <button className="clear" onClick={handleClear}>C</button>
      </div>
      <div className="row">
        <button className="equals" onClick={handleEquals}>=</button>
      </div>
      <div className="result">Result: {result}</div>
      <div className="history">History: {history.map((item, index) => <li key={index}>{item}</li>)}</div>
    </div>
    </div>
  );
}

export default Calculator;
