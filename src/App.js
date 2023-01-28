import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainHeader from "./page/main/MainHeader";
import MainPage from "./page/main/MainPage";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <MainHeader></MainHeader>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
        </Routes>
        <MainPage></MainPage>
    </React.Fragment>
  );
}

export default App;
