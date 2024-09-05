 import { useState } from "react";

export default function STATE() {
   
   const [count, setCount] = useState(0);

  console.log('Count : ', count);
  
  return (
    <div>
      <h1>Count : {count} </h1>
      <button type="button" onClick={() => setCount(count+1)}> Increment </button>
      <button type="button" onClick={() => setCount(count-1)}> Decrement </button>
    </div>
    )
    
}


