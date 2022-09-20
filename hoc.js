import React, { useState } from 'react'

export default function HOC() {
  return (
    <>
    <div>HOC</div>
    <Highred comp={Counter}/>
    <Highgreen comp={Counter}/>
    </>
  )
  function Highred(props){
return <h2 style={{backgroundColor:"red"}}><props.comp/></h2>

  }
  function Highgreen(props){
    return <h2 style={{backgroundColor:"green"}}><props.comp/></h2>
    
      }
  function Counter()
  {
    const[set,myset]=useState(0);
    return(
        <>
        <h3>{set}</h3>
        <button onClick={()=>{
            myset(set+1);
        }}>increase count</button>
        </>
    )
  }
}
