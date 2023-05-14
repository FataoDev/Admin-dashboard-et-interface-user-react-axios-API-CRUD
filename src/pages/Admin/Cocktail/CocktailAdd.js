import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cocktailService, accountService } from "@/_services";

const CocktailAdd = () => {
  // const [nom, setNom] = useState("");
  // const [description, setDescription] = useState("");
  // const [recette, setRecette] = useState("");
  // const [image, setImage] = useState("");

  // const cocktail = {
  //   nom: nom,
  //   description: description,
  //   recette: recette,
  //   image: image,
  // };

  const [cocktail, setCocktail] = useState([]);
  let navigate = useNavigate();

  // Gestionnaire de modification du formulaire
  const onChange = (e) => {
    // const { name, value, type } = e.target;
    // if (type === "file") {
    //   const file = e.target.files[0];
    //   const reader = new FileReader();

    //   reader.onload = (e) => {
    //     setImage(e.target.result);
    //   };
    //   reader.readAsDataURL(file);
    // } else {
    //   if (name === "nom") {
    //     setNom(value);
    //   } else {
    //     if (name === "description") {
    //       setDescription(value);
    //     } else {
    //       if (name === "recette") {
    //         setRecette(value);
    //       }
    //     }
    //   }
    // }

    setCocktail({
      ...cocktail,
      [e.target.name]: e.target.value,
    });
  };

  // Gestionnaire de soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();

    // const cocktail = new FormData();
    // cocktail.append("nom", nom);
    // cocktail.append("description", description);
    // cocktail.append("recette", recette);
    // cocktail.append("image", image);
    // console.log(cocktail);

    let { id } = accountService.getTokenInfo();

    cocktail.user_id = id;

    cocktailService
      .addCocktail(cocktail)
      .then((res) => navigate("../index"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="CocktailEdit">
      <Link to={"/admin/cocktail/index"} className="retour">
        Retour
      </Link>
      <br />
      Cocktail Add
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="nom">Nom</label>
          <input type="text" name="nom" onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="recette">Recette</label>
          <input type="text" name="recette" onChange={onChange} />
        </div>
        {/* <div className="group">
          <label htmlFor="">Image :</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={onChange}
          />
        </div> */}
        <div className="group">
          <button>Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default CocktailAdd;
