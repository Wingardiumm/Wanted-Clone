import React from 'react'
import ResumeAwardList from './resumeDetailList/resumeAward/ResumeAwardList'
import ResumeDetailTitleAndGuide from './ResumeDetailTitleAndGuide'

function ResumeAward() {
  return (
    <div>
        <ResumeDetailTitleAndGuide index={4}/>
        {/* <ResumeCareerContentList/> */}
        <ResumeAwardList/>
    </div>
  )
}

export default ResumeAward