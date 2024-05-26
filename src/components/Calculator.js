import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [operator, setOperator] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [currentValue, setCurrentValue] = useState('0');

  const handleNumber = (num) => {
    if (currentValue.length <= 12) {
      setCurrentValue((prev) => (prev === '0' ? num : prev + num));
    }
  };

  const handleOperator = (op) => {
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue('');
  };

  const handleClear = () => {
    setPreviousValue('');
    setCurrentValue('0');
    setOperator('');
  };

  const handleEqual = () => {
    if (currentValue && previousValue) {
      calculate();
    }
  };

  const handleDecimal = () => {
    if (!currentValue.includes('.')) {
      setCurrentValue((prev) => prev + '.');
    }
  };

  const calculate = () => {
    let prev = parseFloat(previousValue);
    let current = parseFloat(currentValue);
    let result;

    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '÷':
        result = prev / current;
        break;
      case '×':
        result = prev * current;
        break;
      default:
        return;
    }

    setPreviousValue(result.toFixed(3).toString());
    setCurrentValue('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <Display previous={previousValue} current={currentValue} />
      <div className="buttons">
        <Button label="C" onClick={handleClear} />
        <Button label="÷" onClick={() => handleOperator('÷')} />
        <Button label="×" onClick={() => handleOperator('×')} />
        <Button label="-" onClick={() => handleOperator('-')} />
        <Button label="7" onClick={() => handleNumber('7')} />
        <Button label="8" onClick={() => handleNumber('8')} />
        <Button label="9" onClick={() => handleNumber('9')} />
        <Button label="+" onClick={() => handleOperator('+')} />
        <Button label="4" onClick={() => handleNumber('4')} />
        <Button label="5" onClick={() => handleNumber('5')} />
        <Button label="6" onClick={() => handleNumber('6')} />
        <Button label="1" onClick={() => handleNumber('1')} />
        <Button label="2" onClick={() => handleNumber('2')} />
        <Button label="3" onClick={() => handleNumber('3')} />
        <Button label="=" onClick={handleEqual} />
        <Button label="0" onClick={() => handleNumber('0')} />
        <Button label="." onClick={handleDecimal} />
      </div>
    </div>
  );
};

export default Calculator;
