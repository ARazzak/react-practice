import React, { useState, useEffect } from 'react'



function DependanceUseEffect() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const mousePosition = e => {
        console.log('mouse position function call')
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(() => {
        console.log('effect call')
        window.addEventListener('mousemove', mousePosition)

        return () => {
            console.log('unmounted')
            window.removeEventListener('mousemove', mousePosition)
        }
        // })
    }, [])


    return (
        <div>
            <p>Position-X: {x}, Posiiton-Y: {y}</p>
        </div>
    )
}

export default DependanceUseEffect
