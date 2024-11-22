// React querry
//lazy loading 
// import { useEffect, useState } from "react"

// export default function AsyncAwait(){
//     const [groupes,setGroupes]=useState([])
//     // useEffect(
//     //   ()=>(fetch("http://localhost:3000/groupes")
//     //     .then((response) => {
//     //       return response.json();
//     //     })
//     //     .then((data) => {
//     //         setGroupes(data)
//     //         console.log(data)
//     //     }))
//     //   ,[]
//     // );
// useEffect(
//   function(){
//     async function getGroupes() {
//      let data=await fetch("http://localhost:3000/groupes")
//       let groupe=await data.json()
//         setGroupes(groupe)
//         console.log(groupe)
//     }
//     getGroupes()
//     },
//   []
// );

//     return
// }