import React, {useState} from 'react'

function HookPreserveVal () {
    const initialValue = 0

    const [count, setCount] = useState(0)

    const increaseFive = () =>
    {
        for(let i = 0; i < 5; i++ )
        {
            // setCount(count + 1)



            setCount(prevCount => prevCount + 1)

        }
    }


    return (
        
        <div>
           <p> count: {count}</p>
           <button onClick={() => setCount(initialValue)}>Reset</button>
           <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
           <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
           <button onClick={increaseFive}>Increase 5</button>
        </div>
    )


}

export default HookPreserveVal
