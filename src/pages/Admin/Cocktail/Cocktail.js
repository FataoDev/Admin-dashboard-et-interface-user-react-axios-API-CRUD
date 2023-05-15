import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { cocktailService } from "@/_services";

const Cocktail = () => {
  const [cocktails, setCocktails] = useState([]);
  const flag = useRef(false);

  // Récupération de la liste des cocktails à l'affichage
  useEffect(() => {
    if (flag.current === false) {
      cocktailService
        .getAllCocktails()
        .then((res) => {
          // Liste dans le state
          setCocktails(res.data.data);
        })
        .catch((err) => console.log(err));
    }

    return () => (flag.current = true);
  }, []);

  // Gestion du bouton de suppression
  const delCocktail = (cocktailId) => {
    // eslint-disable-next-line no-restricted-globals
    const conf = confirm("Voulez vous supprimer ?");
    if (conf) {
      cocktailService
        .deleteCocktail(cocktailId)
        .then((res) => {
          // Mise à jour du state pour affichage
          setCocktails((current) =>
            current.filter((cocktail) => cocktail.id !== cocktailId)
          );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="Cocktail">
      <Link to={"/admin/dashboard"} className="retour">
        Retour
      </Link>
      <br />
      Cocktail liste
      <table>
        <thead>
          <tr>
            <th colSpan={2}></th>
            <th>Nom</th>
            <th>Description</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {cocktails.map((cocktail) => (
            <tr key={cocktail.id}>
              <td className="del-btn">
                <span
                  className="del_ubtn"
                  onClick={() => delCocktail(cocktail.id)}
                >
                  del
                </span>
              </td>
              <td className="edit-btn">
                <Link to={`/admin/cocktail/edit/${cocktail.id}`}>
                  edit
                  {/* {cocktail.id} */}
                </Link>
              </td>
              <td>{cocktail.nom}</td>
              <td>{cocktail.description}</td>
              <td>{cocktail.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cocktail;
