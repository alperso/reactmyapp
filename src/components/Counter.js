import React,{useState} from 'react';

function Counter() {
    const [count,setCount]=useState(0);
    const func_pluscount=()=>{
        setCount(count+1);

    };
    const func_unpluscount=()=>{
        setCount(count-1);

    };
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Artır</button>
            <button onClick={()=>setCount(count+-1)}>Azalt</button>
            <br/>
            <button onClick={func_pluscount}>FuncArtır</button>
            <button onClick={func_unpluscount}>FuncAzalt</button>
        </div>
    );

}

export default Counter;