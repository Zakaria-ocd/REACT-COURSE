import { useState } from "react"
export default function MyInput(){
    const [name,setName]=useState()
    function changeName(event){
        setName(event.target.value)
    }
    return(
        <div >
            <label htmlFor="nom">Nom :</label><br />
            <input onChange={changeName} className="outline-none rounded-md bg-cyan-400/40 pl-2" type="text" />
            <p >{name}</p>
        </div>
    )
}