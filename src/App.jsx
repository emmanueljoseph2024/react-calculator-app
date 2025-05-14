import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'

function App() {
  const[input, changeInput] = useState('');
    const inputOne = () =>{
changeInput(input + '1');
    }
        const inputTwo= () =>{
changeInput(input + '2');
    }
        const inputThree= () =>{
changeInput(input + '3');
    }
    const inputPlus= () =>{
changeInput(input + '+');
    }
      const inputFour= () =>{
changeInput(input + '4');
    }
      const inputFive= () =>{
changeInput(input + '5');
    }
      const inputSix= () =>{
changeInput(input + '6');
    }
      const inputMinus= () =>{
changeInput(input + '-');
    }
    const inputSeven= () =>{
changeInput(input + '7');
    }
    const inputEight= () =>{
changeInput(input + '8');
    }
    const inputNine= () =>{
changeInput(input + '9');
    }
    const inputMultiply= () =>{
changeInput(input + '*');
    }
     const inputZero= () =>{
changeInput(input + '0');
    }
     const inputDot= () =>{
changeInput(input + '.');
    }
     const inputDivide= () =>{
changeInput(input + '/');
    }
     const inputModulus= () =>{
changeInput(input + '%');
    }

 const clearInput= () =>{
changeInput('');
    }
    const slice= () =>{
changeInput(input.slice(0, -1));
    }

    const[backgroundColor, changeBackgroundColor] = useState('#fff')
   const toggleBackground = () =>{
    if(backgroundColor === '#fff'){
  changeBackgroundColor('#000000');
    }
    else{
         changeBackgroundColor('#fff');
    }
  
}




     const inputResult= () =>{
  try {
    changeInput(evaluate(input).toString()); // Be cautious with eval!
  } catch (error) {
    changeInput("Error");
  }
    }
    
    return(

<div>
  <h1>My calculator app</h1>
    <div className="container">
    <div className="overall_container" style={{backgroundColor:backgroundColor}}>
    <input type="text" value={input} readOnly/>
    <div className="buttonContainer">
    <button onClick={inputOne}>1</button >
            <button onClick={inputTwo}>2</button >
                  <button onClick={inputThree}>3</button >
                    <button onClick={inputPlus}>+</button >
                    </div>
                    <div className="buttonContainer">
    <button onClick={inputFour}>4</button >
            <button onClick={inputFive}>5</button >
                  <button onClick={inputSix}>6</button >
                    <button onClick={inputMinus}>-</button >
                    </div>
                      <div className="buttonContainer">
    <button onClick={inputSeven}>7</button >
            <button onClick={inputEight}>8</button >
                  <button onClick={inputNine}>9</button >
                    <button onClick={inputMultiply}>*</button >
                    </div>
                    <div className="buttonContainer">
    <button onClick={inputZero}>0</button >
            <button onClick={inputDot}>.</button >
                  <button onClick={inputDivide}>/</button >
                    <button onClick={clearInput}>C</button >
                    </div>
                  <div className="buttonContainer">
                    <button onClick={toggleBackground}>B</button >
                         <button onClick={slice}>^</button >
                    <button onClick={inputModulus} >%</button >
                 <button onClick={inputResult} style={{backgroundColor:'red', color:'#fff'}} >=</button >
                    </div>
                    </div>
        </div> 
</div>
    );
}

export default App
