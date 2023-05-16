import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { accountService } from "@/_services/account_service";

const Header = () => {
  // const [user, setUser] = useState(null);
  const user = {
    nom: "",
    prenom: "",
  };
  let navigate = useNavigate();
  const ref = useRef(null);
  const ref_conn = useRef(null);
  const ref_user = useRef(null);
  const ref_default = useRef(null);
  const toogle = useRef(null);
  const toggle_nav = useRef(null);

  useEffect(() => {
    // ref.current.style.display = "block";
    if (accountService.isLogged()) {
      ref.current.style.display = "block";
      ref_conn.current.style.display = "none";

      ref_user.current.style.display = "flex";
      ref_default.current.style.display = "none";

      // const display = ref.current;
      // display.style.display = "flex";
      // document.querySelector(".btn-conn").style.display = "none";
      // document.querySelector(".btn-deconn").style.display = "flex";
    } else {
      ref.current.style.display = "none";
      ref_conn.current.style.display = "block";
      ref_conn.current.style.TextDecoration = "none";

      ref_user.current.style.display = "none";
      ref_default.current.style.display = "flex";
    }
  });
  let bool = false;
  if (accountService.isLogged()) {
    if (bool === false) {
      const users_inf = accountService.getTokenInfo();
      user.nom = users_inf.nom;
      user.prenom = users_inf.prenom;
      bool = true;
    }
  }
  const deconn = () => {
    accountService.logout();
    ref.current.style.display = "none";
    ref_conn.current.style.display = "flex";
    navigate("/");
  };

  return (
    <header className="pheader">
      <nav>
        <div className="user_infos">
          <div className="name_user" ref={ref_user}>
            {user.prenom} {user.nom}
          </div>
          <div className="name_default" ref={ref_default}>
            O vision
          </div>
        </div>
        <ul ref={toggle_nav}>
          <li>
            <Link
              to="/home"
              onClick={() => {
                toogle.current.classList.toggle("active");
                toggle_nav.current.classList.toggle("active-nav");
              }}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              onClick={() => {
                toogle.current.classList.toggle("active");
                toggle_nav.current.classList.toggle("active-nav");
              }}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => {
                toogle.current.classList.toggle("active");
                toggle_nav.current.classList.toggle("active-nav");
              }}
            >
              Contact
            </Link>
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
        <div
          className="toogle"
          ref={toogle}
          onClick={() => {
            toogle.current.classList.toggle("active");
            toggle_nav.current.classList.toggle("active-nav");
            // if (toggle_nav.current.style.display === "grid") {
            //   toggle_nav.current.style.display = "none";
            // } else {
            //   toggle_nav.current.style.display = "grid";
            // }
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
