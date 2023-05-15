import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { cocktailService } from "@/_services";

const CocktailEdit = () => {
  const [cocktail, setCocktail] = useState([]);
  const flag = useRef(false);
  let navigate = useNavigate();

  // Récupération ID du cocktail
  const { cid } = useParams();

  // Gestion de la modification des champs du formulaire
  const onChange = (e) => {
    setCocktail({
      ...cocktail,
      [e.target.name]: e.target.value,
    });
  };

  // Soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();
    cocktailService
      .updateCocktail(cocktail)
      .then((res) => {
        navigate("../index");
      })
      .catch((err) => console.log(err));
  };

  // Récupération du cocktail à l'affichage
  useEffect(() => {
    if (flag.current === false) {
      cocktailService
        .getCocktail(cid)
        .then((res) => {
          setCocktail(res.data.data);
        })
        .catch((err) => console.log(err));
    }

    return () => (flag.current = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="CocktailEdit">
      <Link to={"/admin/cocktail/index"} className="retour">
        Retour
      </Link>
      <br />
      Cocktail Edit
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            name="nom"
            value={cocktail.nom}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={cocktail.description}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="prix">Prix</label>
          <input
            type="text"
            name="prix"
            value={cocktail.prix}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <button>Modifier</button>
        </div>
      </form>
    </div>
  );
};

export default CocktailEdit;
