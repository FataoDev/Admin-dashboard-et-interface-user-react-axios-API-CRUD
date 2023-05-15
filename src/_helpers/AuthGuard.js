import React from "react";
import { Navigate } from "react-router-dom";
import { accountService } from "@/_services/account_service";
import Error from "@/_utils/Error";

const AuthGuard = ({ children }) => {
  if (!accountService.isLogged()) {
    return <Navigate to="/auth/login" />;
  } else {
    const user = accountService.getTokenInfo();
    if (user.email === "fataoouedraogo226@gmail.com") {
      return children;
    } else {
      return <Error />;
    }
  }
  // return children;
};

export default AuthGuard;
