// import { useState } from "react";
// export default function FormState(){
//     const [id,setId]=useState()
//     const [nom,setNom]=useState()
//     const [prenom,setPrenom]=useState()
//     const [etudiants, setEtudiants] = useState([
//       { nom: "Ouchouid", prenom: "Zakaria", age: 18, style: "border-red-400" },
//       {
//         nom: "Loukhmi",
//         prenom: "AbdelAziz",
//         age: 18,
//         style: "border-green-400",
//       },
//       {
//         nom: "ouafik",
//         prenom: "Mohammed",
//         age: 17,
//         style: "border-yellow-400",
//       },
//       { nom: "Mahfoud", prenom: "Anass", age: 19, style: "border-blue-400" }]
//     );
//     function ajouter(){
//         setEtudiants([...etudiants,{id,nom,prenom}])
//     }

//     return (
//       <form action="">
//         <label htmlFor=""></label>
//         <input onChange={(e)=>{setId(e.target.value)}} type="text" />
//         <br />
//         <label htmlFor=""></label>
//         <input onChange={(e)=>{setNom(e.target.value)}} type="text" />
//         <br />
//         <label htmlFor=""></label>
//         <input onChange={(e)=>{setPrenom(e.target.value)}} type="text" />
//         <br />
//         <button onClick={ajouter}>Ajouter</button>
//       </form>
//       <ul>
//         {etudiants.map(function(item,index){
//             return <li key={index}>{item.nom}</li>
//         })}
//       </ul>
//     );
// }
import { useState } from "react";
export default function FormState() {
  const [id, setId] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const[etudiants,setEtudiants]=useState([
    {id:1, nom: "Ouchouid", prenom: "Zakaria"},
    {id:2, nom: "Loukhmi", prenom: "AbdelAziz"},
    {id:3, nom: "ouafik", prenom: "Mohammed"},
    {id:4, nom: "Mahfoud", prenom: "Anass"},
  ]);
  console.log(etudiants);
  function ajouter(e){
    e.preventDefault()
    setEtudiants([...etudiants,{id,nom,prenom}])
    console.log(etudiants)
  }
  return (
    <>
      <form className="ml-2" action="">
        <label htmlFor="">Id</label>
        <br />
        <input
          type="text"
          className="bg-gray-500/70 rounded-lg outline-none pl-2"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Nom</label>
        <br />
        <input
          className="bg-gray-500/70 rounded-lg outline-none pl-2"
          type="text"
          onChange={(e) => {
            setNom(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Prénom</label>
        <br />
        <input
          className="bg-gray-500/70 rounded-lg outline-none pl-2"
          id=""
          type="text"
          onChange={(e) => {
            setPrenom(e.target.value);
          }}
        />
        <br />
        <button
          onClick={ajouter}
          className="bg-emerald-500/70 rounded-lg w-24 text-white  h-8 mt-4  flex items-center justify-center "
        >
          Ajouter
        </button>
        <ul>
          {etudiants.map((item) => {
            return (
              <li key={item.id}>
                {item.id} {item.prenom} {item.nom}
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
}
