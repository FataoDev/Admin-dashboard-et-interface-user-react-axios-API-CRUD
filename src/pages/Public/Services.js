import React, { useEffect, useState } from "react";

import image from "@/assets/casque.jpg";
import { cocktailService } from "@/_services/cocktail_service";
import { Link, useParams } from "react-router-dom";

const Service = () => {
  const [cocktail, setCocktail] = useState({});
  let { cid } = useParams();

  // Récupération du cocktail depuis l'API
  useEffect(() => {
    cocktailService
      .getCocktail(cid)
      .then((res) => setCocktail(res.data.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="service">
      <div className="container_retour">
        <Link to={"/"} className="retour">
          Retour
        </Link>
      </div>
      <div className="container_cocktail">
        <img
          src={
            image
            // 'https://picsum.photos/1200/800?random=' + cocktail.id
          }
          alt={cocktail.nom}
          className="ckt_image"
        />
        <div className="description">
          <div className="title">Nom : {cocktail.nom}</div>
          <div>Description : {cocktail.description}</div>
          <div>Prix : {cocktail.prix} FCFA</div>
          <div className="qtt">
            <div>Quantité :</div>
            <input type="number" name="quanitité" />
          </div>
          <button className="btn">Acheter</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
