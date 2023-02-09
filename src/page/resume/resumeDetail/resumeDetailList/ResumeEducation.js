import React from "react";
import { useParams } from "react-router-dom";
import { resumeApi } from "../../../../api";
import ResumeDetailTitleAndGuide from "../ResumeDetailTitleAndGuide";
import ResumeCareerContentList from "./ResumeCareerContentList";
import ResumeDetailAddListBtn from "./ResumeDetailAddListBtn";
import ResumeEduList from "./resumeEdu/ResumeEduList";

function ResumeEducation() {
  return (
    <div>
      <ResumeDetailTitleAndGuide index={2}/>
      <div>
        <ResumeEduList/>
        {/* <ResumeDetailAddListBtn onClick={addSchool}/> */}
        {/* <ResumeDetailDraggableList /> */}
        {/* <ResumeCareerContentList/> */}
      </div>
    </div>
  );
}

export default ResumeEducation;
