import React, {useState} from 'react'

function HookForm () {

    const [person, setPerson] = useState({name: '',age: '' })


    return (
        
        <form>
           <p> Person: {person}</p>
           <input type="text" onClick={e => setPerson(e.target.value)} name={person.name} />
           
        </form>
    )


}

export default HookForm
