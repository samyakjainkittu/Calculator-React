import Buttons from './componenet/Button';
import './App.css'
import { useState } from 'react';

function App() {

  let [calval , setCalval] = useState("");

  const onButtonClick = (buttonText) =>{
    
    if(buttonText == 'C'){
      setCalval("")
    }
    else if(buttonText == '='){
      try{
        const result = eval(calval);
        setCalval(result);
      }
      catch{
        setCalval("ERROR")
      }
    }
    else if(buttonText == '⬅️'){
      let newval = calval.substring(0, calval.length-1);
      setCalval(newval);

    }
    else if(buttonText == '%'){
      const result = parseFloat(calval) / 100;
      setCalval(result);

    }
    else{
      const newval = calval + buttonText;
      setCalval(newval);
    }
    
    
  } 



  return (
    <>
      <section className=" area ">

        <h1 className="center">Start Calulating</h1>

        <input type="text" placeholder="Click On Buttons "  value = {calval}   readOnly  />

        <Buttons onButtonClick ={onButtonClick}   ></Buttons>


      </section >   

    </>
  );
}

export default App
