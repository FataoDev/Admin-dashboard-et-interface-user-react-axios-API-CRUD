import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { cocktailService } from "@/_services";

const CocktailEdit = () => {
  // const [cocktail, setCocktail] = useState([]);
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [image, setImage] = useState("");
  const flag = useRef(false);
  let navigate = useNavigate();

  // Récupération ID du cocktail
  const { cid } = useParams();

  // Gestion de la modification des champs du formulaire
  const onChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      if (name === "nom") {
        setNom(value);
      } else {
        if (name === "description") {
          setDescription(value);
        } else {
          if (name === "prix") {
            setPrix(value);
          }
        }
      }
    }

    // setCocktail({
    //   ...cocktail,
    //   [e.target.name]: e.target.value,
    // });
  };

  // Soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();

    const cocktail = {
      id: cid,
      nom: nom,
      description: description,
      prix: prix,
      image: image,
    };

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
          setNom(res.data.data.nom);
          setDescription(res.data.data.description);
          setPrix(res.data.data.prix);
          setImage(res.data.data.image);
          // setCocktail(res.data.data);
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
      Modifier un produit
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="nom">Nom</label>
          <input type="text" name="nom" value={nom} onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="prix">Prix</label>
          <input type="text" name="prix" value={prix} onChange={onChange} />
        </div>
        <div className="group">
          <label htmlFor="">Image :</label>
          <input
            type="file"
            accept="image/*"
            name="image"
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
