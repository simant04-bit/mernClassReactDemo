import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0)
    const [decreaseCount, setDecreaseCount] = useState(0)

    const increaseCount = ()=>{
        setCount(count + 1)
    }

    const handleDecrease = ()=>{
        setDecreaseCount(decreaseCount - 1)
    }

    //koi manxey first time site ma aauda or first time site ma kehi action perform huda
    // useEffect(()=>{
    //      setCount(count+1) // page first time load huda value 1 bhayera basxa
    //     console.log("Welcome to our site")
    // }, []) // [] it is emepty array as it is not dependent on anything

    useEffect(()=>{
        if(count !== 0){
            document.title = count
            console.log("Count Value Changed") // Hamile yaha count ko change vako value backend same puryane code lekhne
        }  
    }, [count, decreaseCount])

    useEffect(()=>{
        console.log("Hello Again") // Every action ma yo function trigger hunxa
    })

  return (
    <div>
    <div>{count}</div>
    <button onClick={increaseCount}>+</button>

    <div>{decreaseCount}</div>
    <button onClick={handleDecrease}>-</button>
    </div>
  )
}

export default UseEffect