import React from 'react'
import styled from 'styled-components'
import JobContentCompanyInfo from './JobContentCompanyInfo'
import JobContentDescriptionSection from './JobContentDescriptionSection'
import JobContentHeaderSection from './JobContentHeaderSection'
import JobDetailImgSection from './JobDetailImgSection'
import JobDetailWarningSection from './JobDetailWarningSection'
import JobProcessSide from './JobProcessSide'


const JobContentWrapper = styled.div`
    display: inline-block;
    width: calc(100% - 360px);
    vertical-align: top;
`

function JobDetailContent() {
  return (
    <div>
        <JobContentWrapper>
            <JobDetailImgSection/>
            <JobContentHeaderSection/>
            <JobContentDescriptionSection/>
            <JobContentCompanyInfo/>
            <JobDetailWarningSection/>
        </JobContentWrapper>
        <JobProcessSide/>
    </div>
  )
}

export default JobDetailContent