import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppStyled from "./AppStyled";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import GlobalStyled from "./GlobalStyled";
import Menu from "./components/menu/Menu";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
// import Home from "./components/Home/Home";

const theme = {
  colors: {
    primary: "#0f79d0",
    grayColor: "#535353",
    greenColor: "#22e345",
    redColor: "#e5152a",
    yellowColor: "#ece074",
  },
};

const App = () => {
  const [userXLoginned, setUserXLoginned] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <GlobalStyled />
        <Menu userXLoginned={userXLoginned} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login />}
            userXLoginnedChanged={setUserXLoginned}
          />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
