import React from 'react'
import styled from 'styled-components'
import ResumeAward from './ResumeAward'
import ResumeCareer from './resumeDetailList/ResumeCareer'
import ResumeDetailSkill from './resumeDetailList/ResumeDetailSkill'
import ResumeEducation from './resumeDetailList/ResumeEducation'
import ResumeLanguageSkill from './ResumeLanguageSkill'

const ResumeDetailListContainer = styled.div`
    >div{
        margin-bottom: 20px;
    }
`

function ResumeDetailList() {
  return (
    <ResumeDetailListContainer>
        <ResumeCareer/>
        <ResumeEducation/>
        <ResumeDetailSkill/>
        <ResumeAward/>
        <ResumeLanguageSkill/>
        <ResumeDetailList/>
    </ResumeDetailListContainer>
  )
}

export default ResumeDetailList