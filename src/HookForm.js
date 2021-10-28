import React, {useState} from 'react'

function HookForm () {

    const [person, setPerson] = useState('')
    const [name, setName] = useState({username: '', age : ''})


    return (
        
        <form>
            <p>My name is: {person}</p>
            <p>My username is: {name.username}</p>
            <input type='text' onChange={e => setPerson(e.target.value)} name={person} />
            <input type='text' onChange={e => setName({ username: e.target.value })} name={person} />

           
        </form>
    )


}

export default HookForm
