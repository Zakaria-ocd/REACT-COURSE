import { useState } from "react"
export default function Test(){
    const [number,setNumber]=useState(0)
    console.log(number)
    function changeAge(){
      if(number>=0 && number<10){
        setNumber(number+1)
    }
    else{
              setNumber(0);
    }
}
    return (
      <>
      <h1>{number}</h1>
      <button className="w-20 bg-gray-600 text-white rounded-md h-7 " onClick={changeAge}>Click</button>
      
      </>
    );
}
