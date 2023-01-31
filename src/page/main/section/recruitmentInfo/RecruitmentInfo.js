import React from 'react'
import { MainPageSectionTitle, MainTitleStyle } from '../../styledComponent/MainPageSectionTitle'
import RecruitInfoLinks from './RecruitInfoLinks'

function RecruitmentInfo() {
  return (
    <>
        <MainPageSectionTitle>
            <MainTitleStyle style={{marginBottom:'30px'}}>
                <h2>채용 정보를 찾고 계셨나요?</h2>
            </MainTitleStyle>
        </MainPageSectionTitle>
        <RecruitInfoLinks/>
    </>
  )
}

export default RecruitmentInfo