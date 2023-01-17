import React, { useState } from "react";
import './Calculator.css';

import Container from '@mui/material/Container';

export default function Calculator() {
    const [ result, setResult ] =  useState(0);
    const [oldResult, setOldResult] = useState(0);
    const [operator, setOperator] = useState(0);

    function inputNum(e) {
        if(result === 0) {
            setResult(e.target.value);
        } else {
            setResult(result + e.target.value);
        }
    }

    function allClear() {
        setResult(0)
    }

    function porcentage() {
        setResult(result / 100)
    }

    function changeSign() {
        if(result > 0) {
            setResult(-result)
        } else {
            setResult(Math.abs(result))
        }
    }

    function operatorHandle(e) {
        setOperator(e.target.value)
        setOldResult(result)
        setResult(0)
    }

    function calculate() {
        if(operator === "/") {
            setResult(parseFloat(oldResult) / parseFloat(result))
        } else if(operator === "+") {
            setResult(parseFloat(oldResult) + parseFloat(result))
        } else if(operator === "-") {
            setResult(parseFloat(oldResult) - parseFloat(result))
        } else if(operator === "x") {
            setResult(parseFloat(oldResult) * parseFloat(result))
        }
    }

    return (
        <Container maxWidth="xs">
            <div className="wrapper">
                <h1 className="result">{result}</h1>
                <button onClick={allClear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={porcentage}>%</button>
                <button className="orange" onClick={operatorHandle} value="/">/</button>
                <button className="gray" onClick={inputNum} value={7}>7</button >
                <button className="gray" onClick={inputNum} value={8}>8</button>
                <button className="gray" onClick={inputNum} value={9}>9</button>
                <button className="orange" onClick={operatorHandle} value="x">X</button>
                <button className="gray" onClick={inputNum} value={4}>4</button>
                <button className="gray" onClick={inputNum} value={5}>5</button>
                <button className="gray" onClick={inputNum} value={6}>6</button>
                <button className="orange" onClick={operatorHandle} value="-">-</button>
                <button className="gray" onClick={inputNum} value={1}>1</button>
                <button className="gray" onClick={inputNum} value={2}>2</button>
                <button className="gray" onClick={inputNum} value={3}>3</button>
                <button className="orange" onClick={operatorHandle} value="+">+</button>
                <button className="gray" onClick={inputNum} value={0}>0</button>
                <button className="gray" onClick={inputNum} value={"."}>,</button>
                <button onClick={calculate}>=</button>
            </div>
        </Container>
    )
} 