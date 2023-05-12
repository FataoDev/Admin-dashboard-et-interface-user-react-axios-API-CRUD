import React from 'react';
import { Link } from 'react-router-dom'

import './card.css'

const Card = ({ Fatao, image }) => {

    return (
        <Link to={`/service/${Fatao.id}`} className='card_link'>
            <article className='card_article'>
                <img src={image + Fatao.id} alt={Fatao.nom} />
                <div>{Fatao.nom}</div>
            </article>
        </Link>
    );
};

export default Card;