import React from 'react'
import ResumeCareerContentList from './resumeDetailList/ResumeCareerContentList'
import ResumeDetailTitleAndGuide from './ResumeDetailTitleAndGuide'

function ResumeAward() {
  return (
    <div>
        <ResumeDetailTitleAndGuide index={4}/>
        <ResumeCareerContentList/>
    </div>
  )
}

export default ResumeAward