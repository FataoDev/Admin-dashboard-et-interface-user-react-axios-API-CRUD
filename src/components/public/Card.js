import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

const Card = ({ Fatao }) => {
  return (
    <Link to={`/service/${Fatao.id}`} className="card_link">
      <article className="card_article">
        <img src={Fatao.image} alt={Fatao.nom} />
        <div>{Fatao.nom}</div>
      </article>
    </Link>
  );
};

export default Card;
