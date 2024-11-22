import Button from "./Button";
import Etudiant from "./Etudiant";
export default function Stagiaire(){
    let stagiaires = [
      { nom: "Ouchouid", prenom: "Zakaria", age: 18, style: "border-red-400" },
      { nom: "Loukhmi", prenom: "AbdelAziz", age: 18, style: "border-green-400" },
      { nom: "ouafik", prenom: "Mohammed", age: 17, style: "border-yellow-400" },
      { nom: "Mahfoud", prenom: "Anass", age: 19, style: "border-blue-400" },
    ];
const border="border h-10 rounded-lg   w-44"
let content=stagiaires.map((item,index) => {
    return (
      <Etudiant key={index}
        style={border+" "+item.style}
        nom={item.nom}
        etudiant={{ nom: item.nom, prenom: item.prenom }}
        prenom={item.prenom}
      />
    );
  });

    return(
        <>
        <ul className="border w-32 border-amber-400">
        {
            
            stagiaires.map((item)=>{
                return <li className="border   border-amber-400" key={item.id}>{item.nom}</li>
            })
        }
        </ul>
        {content}
        <Button name={"Zakaria"}></Button>
</>
        )
    
}