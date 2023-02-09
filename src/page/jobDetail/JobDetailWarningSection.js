import React, { useState } from "react";
import styled from "styled-components";

const JobDetailWarningWrapper = styled.div`
  margin-top: 10px;
  border-radius: 5px;
  background-color: #f3f5f8;
`;
const JobDetailWraningHeader = styled.div`
  padding: 25px 30px;
  display: flex;
  align-items: center;
`;
const WarningHeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    margin: 0 20px;
    font-size: 12px;
    font-weight: 700;
    line-height: 22px;
    color: #333;
  }
  > button {
    span {
      svg {
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        font-size: inherit;
        transform: ${(props)=>props.warningOn && 'rotate(180deg)'};
      }
    }
  }
`;
const JobWarningBody = styled.div`
  padding: 13px 30px 30px;
  border-top: 1px solid #ececec;
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
    strong {
      font-weight: bold;
    }
  }
`;
function JobDetailWarningSection({detailData}) {
  const [warningOn, setWarningOn] = useState(false);
  return (
    <section>
      <JobDetailWarningWrapper>
        <JobDetailWraningHeader>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor" fillRule="evenodd">
              <path
                fillRule="nonzero"
                d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"
              ></path>
              <path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path>
              <path fillRule="nonzero" d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"></path>
            </g>
          </svg>
          <WarningHeaderContent warningOn={warningOn}>
            <h5>
              본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수 없으며, 구직활동 이외의
              <br />
              용도로 사용할 수 없습니다.
            </h5>
            <button type="button" onClick={()=>{setWarningOn(!warningOn)}}>
              <span>
                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19">
                  <path
                    d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
          </WarningHeaderContent>
        </JobDetailWraningHeader>
        {warningOn && (
          <JobWarningBody>
            <p>
              본 채용 정보는 <strong>{detailData?.companyName}</strong>
              에서 제공한 자료를 바탕으로 원티드랩에서 표현을 수정하고 이의 배열 및 구성을 편집하여 완성한 원티드랩의 저작자산이자 영업자산입니다. 본 정보 및
              데이터베이스의 일부 내지는 전부에 대하여 원티드랩의 동의 없이 무단전재 또는 재배포, 재가공 및 크롤링할 수 없으며, 게재된 채용기업의 정보는
              구직자의 구직활동 이외의 용도로 사용될 수 없습니다. 원티드랩은
              <strong>{detailData?.companyName}</strong>
              에서 게재한 자료에 대한 오류나 그 밖에 원티드랩이 가공하지 않은 정보의 내용상 문제에 대하여 어떠한 보장도 하지 않으며, 사용자가 이를 신뢰하여 취한
              조치에 대해 책임을 지지 않습니다.
              <strong>{`<저작권자 (주)원티드랩. 무단전재-재배포금지>`}</strong>
            </p>
          </JobWarningBody>
        )}
      </JobDetailWarningWrapper>
    </section>
  );
}

export default JobDetailWarningSection;
