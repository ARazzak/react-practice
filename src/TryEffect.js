import React,{useState,useEffect} from 'react'

function TryEffect()  {


    
const [count, setCount] = useState(0)
useEffect(()=>{
    document.title = `clicked ${count} times`
})




    return (
         <button onClick= {()=>setCount(count+1)} >click</button>

    ) 
        
}
export default TryEffect
