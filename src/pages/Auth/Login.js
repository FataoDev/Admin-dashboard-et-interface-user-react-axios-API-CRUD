import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { accountService } from "@/_services";
import "./auth.css";
import register from "@/pages/Auth/register.svg";
import login from "@/pages/Auth/log.svg";

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Login = () => {
  let navigate = useNavigate();
  // const [login,setLogin]=useState('')
  // const [password,setPassword]=useState('')

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8989/auth/login", credentials)
      .then((res) => {
        accountService.saveToken(res.data.access_token);
        if (
          credentials.email === "fataoouedraogo226@gmail.com" &&
          credentials.password === "Fatasco"
        ) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const ref = useRef(null);
  const btn = useRef(null);
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const contain = ref.current;

    sign_up_btn.addEventListener("click", () => {
      contain.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      contain.classList.remove("sign-up-mode");
    });
  });

  const [credentialsinscript, setCredentialsinscript] = useState({
    nom: "",
    prenom: "",
    pseudo: "",
    email: "",
    password: "",
  });

  const onChangeinscript = (e) => {
    setCredentialsinscript({
      ...credentialsinscript,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitinscript = (e) => {
    e.preventDefault();
    axios
      .put("http://127.0.0.1:8989/users", credentialsinscript)
      .then((res) => {
        // console.log(res);
        // accountService.saveToken(res.data.access_token);
        // eslint-disable-next-line eqeqeq
        const contain = ref.current;

        contain.classList.remove("sign-up-mode");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    /* 
            <form onSubmit={onSubmit}>
            //     <div className='title'>Identifier-vous</div>
            //     <div className='group'>
            //         <label htmlFor='login'>Identifiant</label>
            //         <input type='Text' name='email' value={credentials.email} onChange={onChange} placeholder='email'/>
            //     </div>
            //     <div className='group'>
            //         <label htmlFor='password'>Mot de passe</label>
            //         <input type='Password' name='password' value={credentials.password} onChange={onChange} placeholder='Mot de passe'/>
            //     </div>
            //     <div className='group'>
            //         <button>Connexion</button>
            //     </div>
            </form>
        */

    <div className="container" ref={ref}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={onSubmit} className="sign-in-form">
            <h2 className="title">Connexion</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="email"
                value={credentials.email}
                onChange={onChange}
                placeholder="email"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                placeholder="Password"
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Ou connectez vous par</p>
            <div className="social-media">
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                {/* <FontAwesomeIcon icon={['fab', 'fa-twitter']}/> */}
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                {/* <FontAwesomeIcon icon={['fab', 'fa-google']}/> */}
                <i className="fab fa-google"></i>
              </Link>
              <Link to="#">
                {/* <FontAwesomeIcon icon={['fab', 'fa-linkedin-in']}/> */}
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </form>
          <form onSubmit={onSubmitinscript} className="sign-up-form">
            <h2 className="title">Inscription</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="nom"
                value={credentialsinscript.nom}
                onChange={onChangeinscript}
                placeholder="Nom"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="prenom"
                value={credentialsinscript.prenom}
                onChange={onChangeinscript}
                placeholder="Prénom"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="pseudo"
                value={credentialsinscript.pseudo}
                onChange={onChangeinscript}
                placeholder="Pseudo"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                name="email"
                value={credentialsinscript.email}
                onChange={onChangeinscript}
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                value={credentialsinscript.password}
                onChange={onChangeinscript}
                placeholder="Password"
              />
            </div>
            <input type="submit" className="btn" value="Sign up" ref={btn} />
            <p className="social-text">Ou s'inscrire avec </p>
            <div className="social-media">
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Nouveau ici ?</h3>
            <p>Ceci est mon premier site avec react JS et une api express</p>
            <button className="btn transparent" id="sign-up-btn">
              Inscription
            </button>
          </div>
          <img src={login} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Vous avez un compte ?</h3>
            <p>
              Connectez vous à travers vos identifiant et mot de passe que vous
              avez enregistré précédement
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Connexion
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
