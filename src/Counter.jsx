import { useReducer } from "react";

const Counter = () =>
{
    const initialstate=0;
    const reducer = (state, action) =>
    {
        switch(action)
        {
            case "Increment" : return state+1;
            case "Decrement" : return state-1;
            default : return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialstate);
    return(
        <>
            <div>Count= {count} </div>
            <button onClick={ ()=>dispatch("Increment") } > Increment </button>
            <button onClick={ ()=>dispatch("Decrement") } > Decrement </button>
        </>
    )
}

export default Counter;