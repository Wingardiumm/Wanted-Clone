import React, { useState } from "react";
import styled from "styled-components";

const ResumeSectionTitle = styled.div`
  padding: 20px 0 6px;
  font-size: 16px;
  font-weight: 500;
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
`;
const ResumeSectionGuide = styled.div`
  white-space: pre-wrap;
  padding: 10px;
  background-color: #f3f9fe;
  font-size: 12px;
  line-height: 1.42;
  letter-spacing: normal;
  color: #666;
  margin-top: 10px;
`;

const data = [
  {
    index: 1,
    title: "간단소개글",
    guide: ["• 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요. ", "• 3~5줄로 요약하여 작성하는 것을 추천합니다!"],
  },
  {
    index: 2,
    title: "경력",
    guide: [
      "• 담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요. ",
      "• 신입의 경우, 직무와 관련된 대외활동, 인턴, 계약직 경력 등이 있다면 작성해주세요. ",
      "• 업무 또는 활동 시 담당했던 역할과 과정, 성과에 대해 자세히 작성해주세요. ",
      "• 업무 성과는 되도록 구체적인 숫자 혹은 [%]로 표현해주세요!",
      "• 커리어 조회 후 기업명이 실제와 다른 경우, 부서명/직책 란에 원하시는 기업명을 작성해주세요.",
    ],
  },
  {
    index: 3,
    title: "학력",
    guide: ["• 최신순으로 작성해주세요."],
  },
  {
    index: 4,
    title: "스킬",
    guide: [
      "• 개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는 직무와 관련된 스킬을 추가해보세요.",
      "• 데이터 분석 툴이나 협업 툴 등의 사용해본 경험이 있으신 툴들도 추가해보세요.",
      "• 스킬을 등록한 원티드 이력서는 일반 이력서에 비해 서류통과율이 더 높습니다!",
    ],
  },
  {
    index: 5,
    title: "수상 및 기타",
    guide: [
      "• 수상 이력, 직무 관련 자격증, 수료한 교육이나 참석한 외부활동 등이 있다면 간략히 작성해주세요.",
      "• 지원하는 회사에서 요구하는 경우가 아니라면 운전면허증과 같은 자격증은 생략하는 것이 좋습니다!",
    ],
  },
  {
    index: 6,
    title: "외국어",
    guide: ["• 외국어 자격증을 보유한 경우 작성해주세요. ", "• 활용 가능한 외국어가 있다면, 어느정도 수준인지 레벨을 선택해주세요."],
  },
  {
    index: 7,
    title: "링크",
    guide: ["깃헙,노선으로 작성한 포트폴리오, 구글 드라이브 파일 업무 성과를 보여줄 수 있는 링크가 있다면 작성해주세요."],
  },
];

function ResumeDetailTitleAndGuide({index=1}) {
    const [content] = useState(data[index]);
  return (
    <>
      <ResumeSectionTitle>{content.title}</ResumeSectionTitle>
      <ResumeSectionGuide>
            {content.guide.map((p)=>(
                <>
                    {p}
                    <br/>
                </>
            ))}
        </ResumeSectionGuide>
    </>
  );
}

export default ResumeDetailTitleAndGuide;
