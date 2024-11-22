export default function Etudiant({ nom, prenom, style, etudiant }) {
  let greeting = () => {
    console.log("Hellow", nom);
  };
  return (
    <>
      <div className="space-y-2 border border-gray-600 w-48 py-4 mt-3">
        <h1 className={style}>Nom:{nom}</h1>
        <h1 className={style}>Prénom:{prenom}</h1>
        <h1 className={style}>Prénom:{etudiant.prenom}</h1>
        <button
          onClick={greeting}
          className="w-20  bg-red-600 text-white rounded-md h-7 "
        >
          Click me
        </button>
        
      </div>
    </>
  );
}
