import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { accountService } from "@/_services/account_service";

const Header = () => {
  let navigate = useNavigate();
  const ref = useRef(null);
  const ref_conn = useRef(null);

  useEffect(() => {
    // ref.current.style.display = "block";
    if (accountService.isLogged()) {
      ref.current.style.display = "block";
      ref_conn.current.style.display = "none";
      // const display = ref.current;
      // display.style.display = "flex";
      // document.querySelector(".btn-conn").style.display = "none";
      // document.querySelector(".btn-deconn").style.display = "flex";
    }
  });
  const deconn = () => {
    accountService.logout();
    ref.current.style.display = "none";
    ref_conn.current.style.display = "block";
    navigate("/");
  };

  return (
    <header className="pheader">
      <nav>
        <div className="logo">O vision</div>
        <ul>
          <li>
            <Link to="/home">Accueil</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li className="connexion">
            <Link to="/auth">connexion</Link>{" "}
          </li> */}
          {/* <li><Link to='/admin'>&nbsp;Admin</Link></li> */}
        </ul>
        <Link to="/auth">
          <input
            type="button"
            value="Connexion"
            className="bn btn-conn"
            ref={ref_conn}
          />
        </Link>
        <input
          type="button"
          value="Deconnecter"
          className="bn btn-deconn btn-none"
          ref={ref}
          onClick={deconn}
        />
      </nav>
    </header>
  );
};

export default Header;
