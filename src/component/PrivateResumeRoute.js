
import React from 'react';
import ResumeLandingPage from '../page/resume/rsumeLanding/ResumeLandingPage';

 function PrivateResumeRoute({ authenticated, component: Component }) {
   return (
     authenticated ? Component : <ResumeLandingPage />
   )
 }

 export default PrivateResumeRoute 