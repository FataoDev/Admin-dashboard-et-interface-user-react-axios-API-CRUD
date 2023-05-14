import React, { useEffect, useRef, useState } from "react";
import { userService } from "@/_services";
import { cocktailService } from "@/_services";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const flag = useRef(false);
  const flag2 = useRef(false);

  useEffect(() => {
    if (flag.current === false) {
      userService
        .getAllUsers()
        .then((res) => {
          setUsers(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  useEffect(() => {
    if (flag2) {
      cocktailService
        .getAllCocktails()
        .then((res) => {
          setCocktails(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  return (
    <div className="Dashboard">
      <div className="dashboard-header">
        <div className="nombre users-nombre">
          <div className="title">Users</div>
          <div>{users.length}</div>
          <div className="voir-plus">
            <Link to={"/admin/user/index"}>Voir la liste</Link>{" "}
          </div>
        </div>
        <div className="nombre cocktails-nombre">
          <div className="title">Cocktails</div>
          <div>{cocktails.length}</div>
          <div className="voir-plus">
            <Link to={"/admin/cocktail/index"}>Voir la liste</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
//copy.ai      sitekick.ai    chatgpt
export default Dashboard;
