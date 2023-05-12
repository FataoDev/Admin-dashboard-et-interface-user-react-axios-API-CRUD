/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { userService } from "@/_services";

const User = () => {
  // let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const flag = useRef(false);

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

  const delUser = (userId) => {
    // eslint-disable-next-line no-restricted-globals
    const conf = confirm("Voulez vous supprimez ?");
    if (conf) {
      userService
        .delUser(userId)
        .then((res) => {
          setUsers((current) => current.filter((user) => user.id !== userId));
        })
        .catch((err) => console.log(err));
    }
  };

  // const infos =(userId)=>{
  //     navigate("/admin/user/edit/" +userId)
  // }
  return (
    <div className="User">
      User List <br />
      {/* <button onClick={()=>infos(2)}>User 2</button>
            <button onClick={()=>infos(3)}>User 3</button>
            <button onClick={()=>infos(4)}>User 4</button> */}
      <table>
        <thead>
          <tr>
            <th colSpan={2}></th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="del-btn">
                <span className="del_ubtn" onClick={() => delUser(user.id)}>
                  del
                </span>
              </td>
              <td className="edit-btn">
                {" "}
                <Link to={`/admin/user/edit/${user.id}`}>
                  edit
                  {/* {user.id} */}
                </Link>
              </td>
              {/* <td onClick={()=>infos(user.id)}>{user.id}</td> */}
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
