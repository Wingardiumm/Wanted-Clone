import React, { useState } from 'react'
import ResumeDetailTitleAndGuide from '../ResumeDetailTitleAndGuide'
import ResumeDetailAddListBtn from './ResumeDetailAddListBtn'
import ResumeSkillList from './ResumeSkillList';

function ResumeDetailSkill() {
  const [skillOn, setSkillOn] = useState(false);
  const addSkill =()=>{
    setSkillOn(true)
  }
  return (
    <div>
        <ResumeDetailTitleAndGuide index={3}/>
        <ResumeDetailAddListBtn onClick={addSkill}/>
        {skillOn&&<ResumeSkillList/>}
    </div>
  )
}

export default ResumeDetailSkill