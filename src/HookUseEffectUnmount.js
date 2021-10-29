import React, {useState} from 'react'
import HookUseEffectOnce from './HookUseEffectOnce'

function HookUseEffectUnmount() {

    const [display, setDisplay] = useState(true)
    

    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Hide Effect</button>
            {display && <HookUseEffectOnce />}
        </div>
    )
}

export default HookUseEffectUnmount
