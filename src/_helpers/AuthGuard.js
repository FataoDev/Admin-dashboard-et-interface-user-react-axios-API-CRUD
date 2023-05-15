import React from "react";
import { Navigate } from "react-router-dom";
import { accountService } from "@/_services/account_service";

const AuthGuard = ({ children }) => {
  if (!accountService.isLogged()) {
    return <Navigate to="/auth/login" />;
  } else {
    const user = accountService.getTokenInfo();
    console.log(user);
    if (user.email === "fataoouedraogo226@gmail.com") {
      return children;
    }
  }
  // return children;
};

export default AuthGuard;
