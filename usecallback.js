import React, { useCallback, useMemo, useState } from 'react'
const func=new Set();
export default function Usecallback() {
    const[num,setnum]=useState(0);
    const[inc,setinc]=useState(0)
    // const increase=useCallback(()=>{

    //     setnum(num+1);
    // },[num])
    // // const increase=()=>{
        
    // // }
    // const incnum=useCallback(()=>{

    //     setinc(inc+1);
    // },[inc])
    // const incnum=()=>{
    //     setinc(inc+1);
    // }
    
    func.add(increase);
    func.add(incnum);
    console.log(func)
  return (
    
    <div>
<h1>{num},{inc}</h1>
        <button onClick={increase}>click</button>
        <button onClick={incnum}>increase num</button>
    </div>
  )
}
