 import { useState,useEffect } from "react";

export default function EFFECT() {
   
    const [count, setCount] = useState(10);
    

    useEffect(() => {
        //the code we want to run
        console.log('Count : ', count);//this ensure that code will run at least one time for --> []
        
        
        //optional return function
        return () => {
                    console.log('I am being cleaned up!');//this ensure that code will run at least one time for --> []

        }

 }, [count]);// dependency array

  
  
  return (
    <div>
      <h1>Count : {count} </h1>
      <button type="button" onClick={() => setCount(count+1)}> Increment </button>
      <button type="button" onClick={() => setCount(count-1)}> Decrement </button>
    </div>
    )
    
}


