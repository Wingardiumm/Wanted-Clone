import React from "react";
import ResumeDetailTitleAndGuide from "../ResumeDetailTitleAndGuide";
import ResumeCareerContentList from "./ResumeCareerContentList";

function ResumeEducation() {
  return (
    <div>
      <ResumeDetailTitleAndGuide index={2}/>
      <div>
        {/* <ResumeDetailAddListBtn /> */}
        {/* <ResumeDetailDraggableList /> */}
        <ResumeCareerContentList/>
      </div>
    </div>
  );
}

export default ResumeEducation;
