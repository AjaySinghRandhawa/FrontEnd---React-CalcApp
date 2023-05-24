import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const appendNumber = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const setOperator = (operator) => {
    setInput((prevInput) => prevInput + operator);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Invalid input');
    }
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" id="result" value={input} readOnly />
        </div>
        <div className="buttons">
          {/* Number buttons */}
          <button onClick={() => appendNumber(0)}>0</button>
          <button onClick={() => appendNumber(1)}>1</button>
          <button onClick={() => appendNumber(2)}>2</button>
          <button onClick={() => appendNumber(3)}>3</button>
          <button onClick={() => appendNumber(4)}>4</button>
          <button onClick={() => appendNumber(5)}>5</button>
          <button onClick={() => appendNumber(6)}>6</button>
          <button onClick={() => appendNumber(7)}>7</button>
          <button onClick={() => appendNumber(8)}>8</button>
          <button onClick={() => appendNumber(9)}>9</button>
          <button onClick={() => setOperator('(')}>(</button>
          <button onClick={() => setOperator(')')}>)</button>

          {/* Operator buttons */}
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('/')}>/</button>
          <button onClick={() => setOperator('**')}>^</button>
          <button onClick={() => setOperator('Math.sqrt(')}>√</button>
          <button onClick={() => setOperator('Math.sin(')}>sin</button>
          <button onClick={() => setOperator('Math.cos(')}>cos</button>
          <button onClick={() => setOperator('Math.tan(')}>tan</button>

          {/* Other buttons */}
          <button onClick={calculate}>=</button>
          <button onClick={clearInput}>AC</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
