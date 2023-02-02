import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SectionContentWrapper } from "./ResumeLandingPagestyleComponents";
import { ResumeLandingSectionWrapper } from "./ResumeStyle";

const StyledSection = styled(ResumeLandingSectionWrapper)`
  position: relative;
  background-color: #f2f4f7;
  h1 {
    font-weight: 700;
    font-size: 36px;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(180deg, hsla(0, 0%, 97%, 0), #f8f8f8);
  }
`;
const ExampleContainer = styled.div`
  margin-top: 50px;
  > div {
    max-width: 1060px;
    margin: 0 auto;
    padding: 90px 90px 20px;
    background-color: #fff;
  }
  hr {
    margin: 50px 0;
    height: 1px;
    background-color: #939393;
    border: none;
  }
`;
const ExampleSummary = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.0056em;
  color: #939393;
  > * {
    margin-top: 20px;
  }
  > h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 135.7%;
    letter-spacing: -0.023em;
  }
  > div ul {
    margin: 0;
    list-style-type: disc;
    padding-left: 20px;
    letter-spacing: 0.0056em;
  }
  > div ul li + li {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  > div ul li::before {
    content: "·";
    margin-right: 5px;
    font-size: 25px;
    line-height: 14px;
  }
`;
const ExampleSection = styled.div`
  color: #333;
  transition: color 1s linear 0.1s;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.0056em;
  display: flex !important;
  justify-content: space-between;
  align-items: center;

  > div:last-child {
    visibility: visible;
    transition: opacity 1s linear, transform 1s linear 0.2s;
    transform: translate3d(0, -25%, 0);
    opacity: ${(props) => props.exampleAnimationOn && "1"};
  }
`;
const ExampleSectionList = styled.li`
  color: #333;
  transition: color 1s linear 0.1s;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.0056em;
  display: flex !important;
  justify-content: space-between;
  align-items: center;

  > div:last-child {
    visibility: visible;
    transition: opacity 1s linear, transform 1s linear 0.2s;
    transform: translate3d(0, -25%, 0);
    opacity: ${(props) => props.exampleAnimationOn && "1"};
  }
`;
const ExampleAdvantage = styled.div`
  visibility: hidden;
  opacity: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  width: fit-content;
  height: 36.55px;
  background-color: #f8f8f8;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 138.5%;
  text-align: center;
  letter-spacing: 0.025em;
  color: #08ba9c;
  box-shadow: 5px 5px 20px rgb(0 0 0 / 5%), 5px 5px 15px rgb(0 0 0 / 10%);
`;
const ExampleCareer = styled.div`
  display: flex;
  position: relative;
  color: #939393;
`;
const ExampleCarrerTtitle = styled.div`
  width: 78px;
  h5 {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.0056em;
  }
`;
const ExampleCarrerContent = styled.div`
  width: 100%;
  > div:last-of-type {
    display: flex;
    justify-content: space-between;
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.0056em;
    }
    > div {
      h5 {
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.0056em;
        p {
          margin-top: 5px;
          font-weight: 400;
          font-size: 14px;
          line-height: 142.9%;
          letter-spacing: 0.0145em;
        }
      }
    }
  }
  > ul {
    margin-top: 20px;
    letter-spacing: 0.0145em;
    li::before {
      content: "·";
      position: absolute;
      top: -2px;
      left: 0px;
      font-size: 55px;
      line-height: 14px;
    }
    li {
      position: relative;
      padding-left: 19px;
      h6 {
        margin-bottom: 10px;
        span {
          font-weight: 600;
          font-size: 14px;
          margin-right: 10px;
        }
      }
    }
  }
`;
const CarrerContentCompany = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  > div {
    h5 {
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.0056em;
    }
    p {
      margin-top: 5px;
      font-weight: 400;
      font-size: 14px;
      line-height: 142.9%;
      letter-spacing: 0.0145em;
    }
  }
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.0056em;
  }
`;
function ResumeThirdSection() {
  const [exampleAnimationOn, setExampleAnimationOn] = useState(false);
  useEffect(() => {
    setExampleAnimationOn(true);
  }, []);
  return (
    <StyledSection>
      <SectionContentWrapper>
        <h1>쓰는 사람도 보는 사람도 편하게</h1>
      </SectionContentWrapper>
      <ExampleContainer>
        <div>
          <ExampleSummary>
            <h1>김티드</h1>
            <ExampleSection exampleAnimationOn={exampleAnimationOn}>
              이메일: wanted@wantedlab.com
              <br />
              연락처: 000-0000-0000
              <ExampleAdvantage>성별, 사진 등 불필요한 개인정보 최소화</ExampleAdvantage>
            </ExampleSection>
            <p>
              Next.js, TypeScript, React 기반의 5년차 프론트엔드 개발자 김티드입니다.
              <br />
              새로운 기술을 활용해 비즈니스 문제를 해결하는 것에 관심이 많습니다.
            </p>
            <ExampleSection exampleAnimationOn={exampleAnimationOn}>
              <ul>
                <li>웹/앱 서비스의 프론트엔드 설계, 개발, 운영 경험</li>
                <li>다수의 UI 구현 경험으로 사용자 인터렉션에 대한 높은 이해도</li>
                <li>제한된 리소스 환경에서 기획 단계부터 참여한 프로젝트 다수</li>
                <li>프로젝트 리딩 및 다양한 팀과의 협업 경험</li>
              </ul>
              <ExampleAdvantage>깔끔한 UI와 가독성 높은 디자인</ExampleAdvantage>
            </ExampleSection>
          </ExampleSummary>
          <hr />
          <ExampleCareer>
            <ExampleCarrerTtitle>
              <h5>경력</h5>
            </ExampleCarrerTtitle>
            <ExampleCarrerContent>
              <CarrerContentCompany>
                <div>
                  <h5>원티드랩</h5>
                  <p>프론트엔드팀 / 팀원</p>
                </div>
                <p>2020.07 - 현재 재직중</p>
              </CarrerContentCompany>
              <ul>
                <ExampleSectionList exampleAnimationOn={exampleAnimationOn}>
                  <div>
                    <h6>
                      <span>웹사이트 SEO</span>
                      2022.05 - 2022.06
                    </h6>
                    <p>
                      도메인 정책 수립 및 URL 표준화(canonical) 및 페이지 별 메타태그/키워드 검증
                      <br />
                      - 성과: 오가닉 트래픽 30% 증가
                      <br />
                      - 사용 기술: Next.js, Google Search Console
                      <br />- 링크: https://www.wanted.co.kr
                    </p>
                  </div>
                  <ExampleAdvantage>업무 강점과 경력을 강조하는 템플릿</ExampleAdvantage>
                </ExampleSectionList>
                <li>
                  <h6>
                    <span>글로벌 채용 서비스 신규 개발</span>
                    2021.08 - 2022.04
                  </h6>
                  <p>
                    메인 프론트엔드 개발자로 프로젝트 구조 설계 및 각종 컴포넌트 개발 (기여도 70%)
                    <br />
                    - 성과: 일본/싱가폴/대만 3개국 대상 채용 서비스 출시
                    <br />
                    - 사용 기술: React.js, Next.js, redux, styled-component
                    <br />- 링크: https://www.wantedglobal.com
                  </p>
                </li>
              </ul>
              <hr />
              <div>
                <div>
                  <h5>한국빅컴퍼니</h5>
                  <p>디지털기술개발팀 / 사원</p>
                </div>
                <p>2018.03 - 2020.06</p>
              </div>
            </ExampleCarrerContent>
          </ExampleCareer>
        </div>
      </ExampleContainer>
    </StyledSection>
  );
}

export default ResumeThirdSection;
