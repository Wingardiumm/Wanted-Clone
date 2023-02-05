import React from "react";
import styled from "styled-components";
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
  return (
    <ResumeDetailFirstSectionWrapper>
      <DetailBasicInfoTitle>
        <div>
          <ResumeInputStyle className="resume-detail-title" placeholder="이력서 제목(필수)" maxLength={100}/>
            {/* value 에 이름 기본으로 들어감 */}
        </div>
        <div>
            <ResumeInputStyle className="resume-detail-name" value={"Crap"}/>
        </div>
        <div>
            <ResumeInputStyle className="resume-detail-email" value={"crap@email.com"}/>
        </div>
        <div>
            <ResumeInputStyle className="resume-detail-phone" value={"01022222222"}/>
        </div>
      </DetailBasicInfoTitle>
    </ResumeDetailFirstSectionWrapper>
  );
}

export default ResumeDetailFirstSection;
