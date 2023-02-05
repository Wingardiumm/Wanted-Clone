import React from "react";
import ResumeDetailTitleAndGuide from "../ResumeDetailTitleAndGuide";
import ResumeDetailAddListBtn from "./ResumeDetailAddListBtn";
import ResumeDetailDraggableList from "./ResumeDetailDraggableList";

function ResumeEducation() {
  return (
    <div>
      <ResumeDetailTitleAndGuide index={2}/>
      <div>
        <ResumeDetailAddListBtn />
        <ResumeDetailDraggableList />
      </div>
    </div>
  );
}

export default ResumeEducation;
