import React, { useState } from 'react'

export default function Input() {
const[value,setvalue]=useState([]);
const[data,setdata]=useState([{
    name:"good",
    year: 2020,
Budget: 50,
Rating:5,
     Cast: ['adf', 'sdf'],
Reviews:['Good'],
Language:'Hindi'}]

)
//     const fetch=[{
//         name:"good",
//         year: 2020,
//   Budget: 50,
//   Rating:5,
//          Cast: ['adf', 'sdf'],
//   Reviews:['Good'],
//   Language:'Hindi',
// }] 
// setvalue(fetch[0]);
// console.log(setvalue)
// const myChange=(e)=>{
// setvalue(e.target.value);
// console.log(e.target.value);
// }
// console.log(fetch[0])
const fetchdata=()=>{
// setdata(value);
setvalue(data);
console.log(data[0])
}
// setvalue(fetch);
  return (
    <div>
        <input ></input>
        <button onClick={fetchdata}>onClick</button>
        <h1>{value.name}</h1>
        <table border="1">
{/* <tr>
    <td>name</td>
    <td>year</td>
    <td>Budget</td>
    <td>Rating</td>
</tr> */}

        </table>
       {value.map((index)=>{
        return(
            <>
            <table border="1">
            <tr>
<td>{index.name}</td>
<td>{index.year}</td>
<td>{index.Reviews}</td>
<td>{index.Rating}</td>
{/* <h1>{index.Cast}</h1> */}
</tr>
</table>
</>
        )
       })} 
        
         </div>
  )
}
