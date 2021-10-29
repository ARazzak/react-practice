import React, {useState} from 'react'

function HookForm () {

    const [person, setPerson] = useState('')
    const [name, setName] = useState({username: '', age : ''})

    return (
        
        <form>
            <p>My name is: {person}</p>
            <p>My username is: {name.username}</p>
            <p>My username is: {name.age}</p>
            <p>My username is: {JSON.stringify(name)}</p>

            <input type='text' onChange={e => setPerson(e.target.value)} name={person} />
            <input type='text' onChange={e => setName({ ... name, username: e.target.value })} name={name.username} />
            <input type='text' onChange={e => setName({ ... name, age: e.target.value })} name={name.age} />

           
        </form>
    )


}

export default HookForm
