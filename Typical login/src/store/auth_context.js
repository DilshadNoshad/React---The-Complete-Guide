import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLogedInfo = localStorage.getItem("logedIn");
    // const pareJson = JSON.parse(userLogedInfo);
    // if (pareJson.userinfo[0].status === "1") {
    if (userLogedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  // const userLogedInfo = localStorage.getItem("logedIn");
  // const pareJson = JSON.parse(userLogedInfo);
  // console.log(pareJson.userinfo[0].status === "1");

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem(
      "logedIn",
      "1"
      // `{"userinfo":[{ "Email": "${email}", "Password": "${password}", "status": "1"}]}`
    );
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("logedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
