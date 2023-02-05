import React from "react";
import styled from "styled-components";
import ResumeDetailBasicIntro from "./ResumeDetailBasicIntro";
import ResumeDetailFirstSection from "./ResumeDetailFirstSection";
import ResumeDetailFixedBar from "./ResumeDetailFixedBar";
import ResumeDetailList from "./ResumeDetailList";

const ResumeDetailPageContainer = styled.div`
  background-color: #fff;
`;
const ResumeDetailWrapper = styled.div`
  width: 87.72%;
  padding: 0;
  max-width: 1060px;
  margin: 0 auto;
  >div{
    position: relative;
    padding-bottom: 50px;
  }
`;

function ResumeDetailPage() {
  return (
    <ResumeDetailPageContainer>
      <ResumeDetailWrapper>
        <div>
            {/* 언어선택 및 단어체크 가이드 픽스바 */}
            <ResumeDetailFixedBar/>
            {/* 제목 이름 이메일 등 기본정보 */}
            <ResumeDetailFirstSection/>
            {/* 간단 소개글 */}
            <ResumeDetailBasicIntro/>
            {/* 그 아래쪽 경력 및 학력 등의 리스트 */}
            <ResumeDetailList/>
        </div>
      </ResumeDetailWrapper>
    </ResumeDetailPageContainer>
  );
}

export default ResumeDetailPage;
