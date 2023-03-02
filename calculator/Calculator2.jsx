import React, { useState } from 'react';

const Calculator2 = () => {
  const [firstOperand, setFirstOperand] = useState('');
  const [secondOperand, setSecondOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleFirstOperand = (event) => {
    setFirstOperand(event.target.value);
  };

  const handleSecondOperand = (event) => {
    setSecondOperand(event.target.value);
  };

  const handleOperator = (event) => {
    setOperator(event.target.value);
  };

  const calculate = () => {
    let output;
    const first = parseFloat(firstOperand);
    const second = parseFloat(secondOperand);

    switch (operator) {
      case '+':
        output = first + second;
        break;
      case '-':
        output = first - second;
        break;
      case '*':
        output = first * second;
        break;
      case '/':
        output = first / second;
        break;
      default:
        output = 'Error';
    }

    setResult(output);
  };

  return (
    <div className="calculator">
        <h1>Calculator2 Build by :- Dibyanshu</h1>
      <input type="text" placeholder='num1' value={firstOperand} onChange={handleFirstOperand} />
      <br />
      <input type="text" placeholder='num2' value={secondOperand} onChange={handleSecondOperand} />
      <br />
      <input type="text" placeholder='operator' value={operator} onChange={handleOperator} />
      <br />
      <button onClick={calculate}>Calculate</button>
      <br />
      {/* <input type="text" placeholder='output' value={result} readOnly /> */}
      <h2>Output:{result}</h2>
    </div>
  );
};

export default Calculator2;
