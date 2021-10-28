import React, { useState } from 'react'

function HookLearn() {
    const initialValue = 0

    const [count, setCount] = useState(0)


    console.log("HookState Load")

    return (

        <div>
            <p> count: {count}</p>
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )


}
export default HookLearn
