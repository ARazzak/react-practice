import React, { useState, useEffect } from 'react'



function DependanceArray() {

    const [count, setCount] = useState(0)

    useEffect(() => {


        const tick = () => {
            console.log('tick method call')
            setCount(count+1)
        }

        const interval = setInterval(tick, 1000)

        return () => {
            console.log('unmounted')
            clearInterval(interval)
        }
        // })
    }, [])


    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

export default DependanceArray
