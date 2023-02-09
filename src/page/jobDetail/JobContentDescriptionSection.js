import React from "react";
import styled from "styled-components";
import JobDetailLocationMapSection from "./JobDetailLocationMapSection";

const JobDescriptionWrapper = styled.div`
  margin: 40px 0;
  margin-bottom: 60px;
  padding-right: 20px;
  p,
  h6 {
    color: #333;
    font-size: 16px;
    line-height: 1.75;
  }
  h6 {
    margin: 20px 0 0;
    font-weight: 600;
  }
  p {
    color: #333;
    font-weight: 400;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
`;
const JobDetailSkillTagWrapper = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  grid-gap: 10px 8px;
  gap: 10px 8px;
  margin-top: 5px;
`;
const JobDetailSkillTag = styled.div`
  background-color: #e4f4ec;
  border-radius: 20px;
  padding: 9px 14px;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 600;
`;
const JobContentDivider = styled.hr`
  margin: 0;
`;
function JobContentDescriptionSection({detailData}) {
  return (
    <div>
      <JobDescriptionWrapper>
        <p>
          <span>
            {/* 스누아이랩 (SNUAILAB)은 Computer Vision 기술 및 Big-Data 처리 분야의 세계적인 권위자인 서울대학교 교수진 6명과 삼성종합기술원과 삼성테크윈 (현,
            한화테크윈)의 핵심 연구원들이 주축이 되어 설립한 Vision AI 분야의 전문 JV 기업입니다.
            <br />
            또한, 서울대학교 기술지주와 교수들이 직접 지분 참여하여 설립된 서울대 공식 자회사이기도 합니다.
            <br />
            <br />
            향후 인공지능 기술은 다가올 미래에 세계 시장의 변화와 성장을 주도하게 될 것이며, 그 중에서도 인간의 뇌에 가장 많은 영향을 주는 시각 센서 (Vision)
            분야의 기술이 다른 무엇보다 우선 시 될 것임은 자명한 사실입니다.
            <br />
            <br />
            스누아이랩 (SNUAILAB)은 국내 최고의 대학인 서울대학교 연구실과의 긴밀한 공동 연구를 통하여 딥러닝, 컴퓨터 비전, 영상 감시 분야에 대한 활발한
            연구/개발을 진행하고 있으며, 이러한 연구 결과를 바탕으로 스마트 팜, 스마트 팩토리 등 다양한 산업 분야에 알맞은 솔루션을 제공하는 것이 스누아이랩의
            목표입니다. */}
            {detailData?.positionExplanation}
          </span>
        </p>
        <h6>주요업무</h6>
        <p>{detailData?.mainBusiness}</p>
        <h6>자격요건</h6>
        <p>{detailData?.qualificationRequirement}</p>
        <h6>우대사항</h6>
        <p>{detailData?.preferentialTreatment}</p>
        <h6>혜택 및 복지</h6>
        <p>{detailData?.benefitAndWelfare}</p>
        <h6>기술스택 ・ 툴</h6>
        <div>
          <JobDetailSkillTagWrapper>
            <JobDetailSkillTag>Git</JobDetailSkillTag>
            <JobDetailSkillTag>Git</JobDetailSkillTag>
            <JobDetailSkillTag>Embedded Linux</JobDetailSkillTag>
            <JobDetailSkillTag>Git</JobDetailSkillTag>
            <JobDetailSkillTag>Embedded Linux</JobDetailSkillTag>
            <JobDetailSkillTag>Git</JobDetailSkillTag>
            <JobDetailSkillTag>Git</JobDetailSkillTag>
          </JobDetailSkillTagWrapper>
        </div>
      </JobDescriptionWrapper>
      <JobContentDivider></JobContentDivider>
      <JobDetailLocationMapSection detailData={detailData}/>
    </div>
  );
}

export default JobContentDescriptionSection;
