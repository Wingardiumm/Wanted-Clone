import React from 'react'
import styled from 'styled-components'
import ResumeFifthSection from './ResumeFifthSection'
import ResumeFourthSection from './ResumeFourthSection'
import ResumeLandingPageFirstSection from './ResumeLandingPageFirstSection'
import ResumeLandingPageSecondSection from './ResumeLandingPageSecondSection'
import ResumeThirdSection from './ResumeThirdSection'

const ResumLandingPageWrapper = styled.div`
    width: 100%;
    overflow-x: hidden;
    background-color: #fff;
    color: #333;
`
function ResumeLandingPage() {
  return (
    <ResumLandingPageWrapper>
        <ResumeLandingPageFirstSection/>
        <ResumeLandingPageSecondSection/>
        <ResumeThirdSection/>
        <ResumeFourthSection/>
        <ResumeFifthSection/>
    </ResumLandingPageWrapper>
  )
}

export default ResumeLandingPage