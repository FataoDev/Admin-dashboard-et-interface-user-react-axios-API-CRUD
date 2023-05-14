import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { accountService } from "@/_services/account_service";

const SideMenu = () => {
  let navigate = useNavigate();
  const logout = () => {
    accountService.logout();
    navigate("/");
  };
  return (
    <div className="SideMenu">
      <ul>
        <li className="dashboard-accueil">
          {" "}
          <Link to="/">Accueil</Link>
        </li>
        <li>&nbsp;</li>
        <li>
          {" "}
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          User
          <ul>
            <li>
              <Link to="/admin/user/index">Liste </Link>
            </li>
            <li>
              <Link to="/admin/user/add">Ajouter </Link>
            </li>
            <li>
              <Link to="/admin/user/edit">Modifier </Link>
            </li>
          </ul>
        </li>
        <li>
          Cocktail
          <ul>
            <li>
              <Link to="/admin/cocktail/index">Liste </Link>
            </li>
            <li>
              <Link to="/admin/cocktail/add">Ajouter </Link>
            </li>
            <li>
              <Link to="/admin/cocktail/edit">Modifier </Link>
            </li>
          </ul>
        </li>
      </ul>
      <button onClick={logout} id="btn-header">
        Déconnecter
      </button>
    </div>
  );
};

export default SideMenu;
