import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { resumeApi } from "../../../api";
import { ResumeInputStyle } from "./ResumeInputStyle";

const ResumeDetailFirstSectionWrapper = styled.div`
  margin-bottom: 60px;
`;
const DetailBasicInfoTitle = styled.div`
  padding-top: 130px;
  .resume-detail-title {
    color: #3b3d40;
    font-size: 36px;
    line-height: 36px;
    font-weight: 500;
    margin: 0 0 50px;
    -webkit-appearance: none;
    resize: none;
  }
  .resume-detail-name{
    margin-top: 20px;
    margin-bottom: 0;
  }
  .resume-detail-name,
  .resume-detail-phone,
  .resume-detail-email{
    font-size: 16px;
  }
  .resume-detail-phone,
  .resume-detail-email{
    margin-top: 10px;
    margin-bottom: 0;
  }


`;
function ResumeDetailFirstSection() {
  const [resumeData, setResumeData] = useState();
  const resumeId = useParams();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log(resumeId, jwt);
    resumeApi
      .getResumeDetail(resumeId.id, jwt)
      .then((Response) => {
        console.log(Response.data);
        if (Response.data.isSuccess) {
          setResumeData(Response.data.result[0])
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  return (
    <ResumeDetailFirstSectionWrapper>
      <DetailBasicInfoTitle>
        <div>
          <ResumeInputStyle className="resume-detail-title" defaultValue={resumeData?.resumeTitle} placeholder="이력서 제목(필수)" maxLength={100}/>
            {/* value 에 이름 기본으로 들어감 */}
        </div>
        <div>
            <ResumeInputStyle className="resume-detail-name" defaultValue={resumeData?.name}/>
        </div>
        <div>
            <ResumeInputStyle className="resume-detail-email" defaultValue={resumeData?.email}/>
        </div>
        <div>
            <ResumeInputStyle className="resume-detail-phone" defaultValue={resumeData?.phoneNumber}/>
        </div>
      </DetailBasicInfoTitle>
    </ResumeDetailFirstSectionWrapper>
  );
}

export default ResumeDetailFirstSection;
