import {useEffect, useState} from "react"
export const Efectos = () => {
  const [Counter,setCounter]= useState(0)  
  const [Counter2,setCounter2]= useState(0)  
  useEffect(()=>{console.log("efecto");},[Counter2])
  return (
    <div>
        <section>
            click: {Counter}
            <button onClick={()=>setCounter(Counter+1)}> + </button>
        </section>
        <section>
            click: {Counter2}
            <button onClick={()=>setCounter2(Counter2+1)}> + </button>
        </section>
    </div>
  )
}
