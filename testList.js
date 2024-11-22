
        const stagiaires=[{id:1, nom: "Ouchouid", prenom: "Zakaria", age: 18 },
      {id:2, nom: "Loukhmi", prenom: "AbdelAziz", age: 18 },
      {id:3, nom: "ouafik", prenom: "Mohammed", age: 17},
      {id:4, nom: "Mahfoud", prenom: "Anass", age: 19 },]
      console.log(stagiaires)
      const updatedStagiaires=stagiaires.map((item)=>{
        if(item.id==2){
            item.nom="Ahmed"
            return item
        }
        return item
      })
      console.log(updatedStagiaires)
