import React, { useReducer } from 'react';

interface State {
    count: number;
    error: string | null;
}

interface Action{
    type: 'increment' | 'decrement'; 
}



function reducer(state: State, action: Action) {
    const { type } = action;

    switch (type) {

        case 'increment': {
            const newCount = state.count + 1;
            const hasError = newCount > 30; 
            return {
                ...state, count: hasError ? state.count : newCount,
                error:hasError ? 'Maximum Reached' : null,
                
             };
        }
            
        case 'decrement': {
            const newCount = state.count - 1;
            const hasError = newCount < 20;
            return {
              ...state,
              count: hasError ? state.count : newCount,
              error: hasError ? "Minimum Reached" : null,
            };
        }
        default:
            return state;
    }

}

export default function Demo() {
    const [state, dispatch] = useReducer(reducer, {
        count: 20,
        error: null,

    });
    return (
      <div>
       
        <div>
         
          <h1>Count : {state.count} </h1>
        </div>
        {state.error && <div className="mb-2 text-red-500"> {state.error}</div>}

        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>

        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
      </div>
    );
}

