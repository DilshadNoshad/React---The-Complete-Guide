import React, { useCallback, useEffect, useState } from "react";

let logoutTime;
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login(token) {},
  logout() {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const transformExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = transformExpirationTime - currentTime;

  return remainingDuration;
};

const receivesStoredToken = () => {
  const storedToken = localStorage.getItem("AuthToken");
  const storedExpirationTime = localStorage.getItem("ExpirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if (remainingTime <= 60000) {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("ExpirationTime");
    return null;
  }

  return { token: storedToken, expiresIn: remainingTime };
};
export const AuthContextProvider = (props) => {
  const tokenData = receivesStoredToken();
  let initState;
  if (tokenData) {
    initState = tokenData.token;
  }
  const [token, setToken] = useState(initState);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("ExpirationTime");

    if (logoutTime) {
      clearTimeout(logoutTime);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("AuthToken", token);
    localStorage.setItem("ExpirationTime", expirationTime);
    const logoutTimer = calculateRemainingTime(expirationTime);
    logoutTime = setTimeout(logoutHandler, logoutTimer);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.expiresIn);
      logoutTime = setTimeout(logoutHandler, tokenData.expiresIn);
    }
  }, [tokenData, logoutHandler]);
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
