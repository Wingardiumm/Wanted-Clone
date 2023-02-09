import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AleadyLoginRoute from "./component/AleadyLoginRoute";
import MainLayOut from "./component/MainLayOut";
import NotFooterLayOut from "./component/NotFooterLayOut";
import PrivateResumeRoute from "./component/PrivateResumeRoute";
import PrivateRoute from "./component/PrivateResumeRoute";
import PublicRoute from "./component/PublicRoute";
import ScrollToTop from "./component/ScrollToTop";
import EmploymentPage from "./page/employment/EmploymentPage";
import JobDetailPage from "./page/jobDetail/JobDetailPage";
import LoginPage from "./page/login/LoginPage";
import MainPage from "./page/main/MainPage";
import InsightDetail from "./page/main/section/careerSection/InsightDetail";
import BookmarkPage from "./page/profilePage/BookmarkPage";
import MyWantedPage from "./page/profilePage/myPage/MyWantedPage";
import ResumeDetailPage from "./page/resume/resumeDetail/ResumeDetailPage";
import ResumePage from "./page/resume/resumeListPage/ResumePage";
import ResumeLandingPage from "./page/resume/rsumeLanding/ResumeLandingPage";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  const [vh, setVh] = useState(window.innerHeight * 0.01);
  const access = localStorage.getItem("jwt");
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
      <GlobalStyle/>
      <ScrollToTop/>
      <Routes>
        <Route element={<MainLayOut />}>
          <Route path="/" element={<MainPage></MainPage>}>
            <Route path="insight/:id" element={<InsightDetail />} />
          </Route>
          <Route path="/employment/:id" element={<JobDetailPage />} />
        </Route>
        <Route element={<NotFooterLayOut />}>
          <Route path="/resume" element={<PrivateResumeRoute authenticated={access} component={<ResumePage />} />} />
          <Route path="/resume/:id" element={<PrivateResumeRoute authenticated={access} component={<ResumeDetailPage />} />} />
          <Route path="/employment" element={<EmploymentPage />} />
          <Route path="/profile/bookmarks" element={<BookmarkPage />} />
          <Route path="/profile/mywanted" element={<MyWantedPage />} />
        </Route>
        <Route path="/login" element={<PublicRoute restricted={true} component={<LoginPage />} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
