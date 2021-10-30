import React, {useState, useEffect} from 'react'

function HookUseEffectConditional() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState({firstname: ''})

    useEffect(() =>{
        console.log(name.firstname)
        document.title = `Clicked ${count} Times`
    }, [count])

    return (
        <div>
            <input onChange={e => setName({'firstname': e.target.value})} />
            <button onClick={() => setCount(count + 1) } > Clicked {count} Times </button>
        </div>
    )
}

export default HookUseEffectConditional
