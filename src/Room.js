import React, { useState } from 'react';
import './Room.css';

function Room() {
    
    // const state = useState(true);
    //console.log("state = ",state);
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(23);

    /*function updateLit(){
      console.log("Button Clicked");
      setLit(!isLit);
      
    }*/
    /* A single line function
    ()=> setLit(!isLit);
      */

    /*function increaseAge(){
        console.log("Increase Age Button Clicked");
        setAge(++age);
      }*/

    /*const increaseAge = ()=> {
        console.log("Increase Age Button Clicked");
        setAge(++age);
    }*/

    return (
     <div className={`room ${isLit? "lit": "dark"}`}>
        This Room is {isLit? "lit": "dark"}
        <br/>
        Age: {age}
        <br/>
        <button onClick={()=> setLit(!isLit) }>Toggle Light</button>
        <br/>
        <button onClick={()=> {
                                console.log("Increase Age Button Clicked");
                                setAge(++age);
                            }}>
                Increase Age
        </button>
    </div>
  );
}

export default Room;