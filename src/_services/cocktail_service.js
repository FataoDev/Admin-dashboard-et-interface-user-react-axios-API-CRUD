import Axios from "./caller_service";
// import { accountService } from "./account_service";

/**
 * Récupération de la liste des cocktails
 * @returns {Promise}
 */
let getAllCocktails = () => {
  return Axios.get("http://127.0.0.1:8989/cocktails");
};

/**
 * Récupération d'un cocktail
 * @param {number} cid
 * @returns {Promise}
 */
let getCocktail = (cid) => {
  return Axios.get("http://127.0.0.1:8989/cocktails/" + cid);
};

/**
 * Ajout d'un cocktail
 * @param {object} cocktail
 * @returns {Promise}
 */
let addCocktail = (cocktail) => {
  //   const token = accountService.getToken();
  //   const headers = { Authorization: `Bearer ${token}` };
  // const formatData = new FormData()

  // formatData.append("nom", cocktail.nom);
  // formatData.append("description", cocktail.description);
  // formatData.append("recette", cocktail.recette);
  // formatData.append("image", cocktail.image);
  // formatData.append("user_id", cocktail.user_id);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return Axios.put("http://127.0.0.1:8989/cocktails", cocktail, config);
};

/**
 * Mise à jour d'un cocktail
 * @param {object} cocktail
 * @returns {Promise}
 */
let updateCocktail = (cocktail) => {
  return Axios.patch(
    "http://127.0.0.1:8989/cocktails/" + cocktail.id,
    cocktail
  );
};

/**
 * Suppression d'un cocktail
 * @param {number} cid
 * @returns {Promise}
 */
let deleteCocktail = (cid) => {
  return Axios.delete("http://127.0.0.1:8989/cocktails/" + cid);
};

// Déclaration des services pour import
export const cocktailService = {
  getAllCocktails,
  getCocktail,
  addCocktail,
  updateCocktail,
  deleteCocktail,
};
