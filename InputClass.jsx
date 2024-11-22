import { Component } from "react";
import Paragraph from "./Paragraph";
class InputClass extends Component {
  constructor() {
    super()
    this.state = {
      stagiaire: {
        id: "",
        nom: "",
        prenom:"",
      },
      stagiaires: [],
    };
  }
  // Il s"exécute après chaque render
  componentDidMount = () => {
    console.log("kjlkjlkjlkjlk");
  };
  // Il s"exécute après chaque modification du state

  componentDidUpdate = () => {
    console.log("Updated");
  };
  render() {
    return (
      <>
        {this.state.stagiaire.id > 10 && <Paragraph ></Paragraph>}
        <div className="w-full flex flex-col justify-center items-center">
          <form
            action=""
            className="bg-cyan-600 rounded-md flex flex-col items-center justify-evenly  w-80 h-[250px]"
          >
            <label htmlFor="">Id</label>
            <input
              className="w-32 rounded-md"
              onChange={(e) => {
                this.setState({
                  stagiaire: { ...this.state.stagiaire, id: e.target.value },
                });
              }}
              type="text"
            />
            <label htmlFor="">Nom</label>
            <input
              className="w-32 rounded-md"
              type="text"
              onChange={(e) => {
                this.setState({
                  stagiaire: { ...this.state.stagiaire, nom: e.target.value },
                });
              }}
            />
            <label htmlFor="">Prenom</label>
            <input
              className="w-32 rounded-md"
              type="text"
              onChange={(e) => {
                this.setState({
                  stagiaire: {
                    ...this.state.stagiaire,
                    prenom: e.target.value,
                  },
                });
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();

                this.setState({
                  stagiaires: [...this.state.stagiaires, this.state.stagiaire],
                });
              }}
              className="bg-slate-950 text-white w-20 h-7 rounded-md"
            >
              Ajouter
            </button>
          </form>
          <table className="border-2 border-sky-950">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prenom</th>
              </tr>
            </thead>
            <tbody>
              {this.state.stagiaires.map((stagiaire) => {
                return (
                  <tr key={stagiaire.id}>
                    <td>{stagiaire.id}</td>
                    <td>{stagiaire.nom}</td>
                    <td>{stagiaire.prenom}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default InputClass;
