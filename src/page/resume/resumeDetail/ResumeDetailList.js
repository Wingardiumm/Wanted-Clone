import React from 'react'
import styled from 'styled-components'
import ResumeAward from './ResumeAward'
import ResumeCareer from './resumeDetailList/ResumeCareer'
import ResumeDetailLink from './resumeDetailList/ResumeDetailLink'
import ResumeDetailSkill from './resumeDetailList/ResumeDetailSkill'
import ResumeEducation from './resumeDetailList/ResumeEducation'
import ResumeLanguageSkill from './ResumeLanguageSkill'

const ResumeDetailListContainer = styled.div`
    >div{
        margin-bottom: 20px;
    }
`

function ResumeDetailList({resumeCareerData}) {
  return (
    <ResumeDetailListContainer>
        <ResumeCareer resumeCareerData={resumeCareerData?.workExperiences}/>
        <ResumeEducation/>
        <ResumeDetailSkill/>
        <ResumeAward/>
        <ResumeLanguageSkill/>
        <ResumeDetailLink/>
    </ResumeDetailListContainer>
  )
}

export default ResumeDetailList