import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppStyled from "./AppStyled";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import GlobalStyled from "./GlobalStyled";
import Menu from "./components/menu/Menu";
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
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <GlobalStyled />
        <Menu />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
