import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayOut from "./component/MainLayOut";
import NotFooterLayOut from "./component/NotFooterLayOut";
import EmploymentPage from "./page/employment/EmploymentPage";
import JobDetailPage from "./page/jobDetail/JobDetailPage";
import LoginPage from "./page/login/LoginPage";
import MainPage from "./page/main/MainPage";
import ResumePage from "./page/resume/resumeListPage/ResumePage";
import ResumeLandingPage from "./page/resume/rsumeLanding/ResumeLandingPage";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  const [vh, setVh] = useState(window.innerHeight * 0.01);
  
  // eslint-disable-next-line
  const screenSize = useCallback(
    _.debounce(() => {
      setVh(window.innerHeight * 0.01);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      console.log(vh);
    }, 100),
    [vh]
  );
  useEffect(() => {
    screenSize();
    window.addEventListener("resize", screenSize);

    return () => window.removeEventListener("resize", screenSize);
  }, [screenSize]);

  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route element={<MainLayOut />}>
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/resumeLanding" element={<ResumeLandingPage></ResumeLandingPage>} />
          <Route path="/employment/:id" element={<JobDetailPage/>}/>
        </Route>
        <Route element={<NotFooterLayOut />}>
          <Route path="/resume" element={<ResumePage />}/>
          <Route path="/employment" element={<EmploymentPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
