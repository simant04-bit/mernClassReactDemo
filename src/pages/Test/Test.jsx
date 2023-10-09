import React, { useState } from 'react'

const Test = () => {

    const [count, setCount] = useState(0) // if we use regular variable like var count = 0, it won't render. So, use Hooks

    // Hooks are outside return

    const increaseCount = ()=>{
        setCount(count+1)
        console.log(count)
    }

    function decreaseCount(){
        setCount(count-1)
        console.log(count)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    )
    }

export default Test