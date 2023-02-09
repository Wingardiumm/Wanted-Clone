import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ResumeSkillData } from "../../../../data/resumeSkillData";
const ResumeSkillListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  /* align-items: center; */
`;
const ResumeSkillListWrapper = styled.div`
  padding: 18px 21px 18px 17px;
  background-color: #f5fcf8;
`;
const ResumeSkillListTtile = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 10px;
`;
const ResumeSkillItem = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-wrap: wrap;
  button {
    margin: 10px 10px 0 0;
    padding: 0 17px;
    border-radius: 20px;
    background-color: #e4f4ec;
    font-size: 13px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    span:nth-child(1) {
      margin-right: 5px;
    }
  }
`;
const ResumeSelectedSkill = styled(ResumeSkillItem)`
  margin-top: 10px;
  button {
    background-color: #f3f5f8;
  }
`;
const ResumeSkillSearchWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  .resume-skill-search-input {
    margin-top: 20px;
    height: 45px;
    border: 1px solid #e1e2e3;
    border-radius: 5px;
    font-size: 15px;
    padding: 10px;
    width: 100%;
    &:focus {
      border-color: var(--theme-palette-colors-blue-400) !important;
    }
    &:hover {
      border-color: var(--theme-palette-colors-blue-400) !important;
    }
  }
  span {
    &::before {
      content: "";
      width: 1px;
      background-color: #ececec;
      height: 28px;
      bottom: 0px;
      display: block;
      position: absolute;
      left: -21px;
    }
  }
  .resume-skill-search-icon {
    position: absolute;
    top: 33px;
    right: 15px;
  }
`;

function ResumeSkillList() {
  const [moreOn, setMoreOn] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState([]);

  const addSelectedSkill = (data) => {
    const exis = selectedSkill.find((e) => e === data);
    console.log(exis);
    if (!exis) {
      setSelectedSkill([...selectedSkill, data]);
    }
    console.log(selectedSkill);
  };
  const deleteSelectedSkill = (data) => {
    const filterd = selectedSkill.filter((e) => e !== data);
    setSelectedSkill(filterd);

    console.log(selectedSkill);
  };
  return (
    <ResumeSkillListContainer>
      <ResumeSkillListWrapper>
        <ResumeSkillListTtile>
          <p>많이 쓰는 인기 스킬을 추가해보세요</p>
          <button type="button" onClick={() => setMoreOn(!moreOn)}>
            {moreOn ? "닫기" : "더보기"}
          </button>
        </ResumeSkillListTtile>

        <ResumeSkillItem>
          {ResumeSkillData.map((data, i) => {
            if (i < 7) {
              return (
                <button
                  type="button"
                  key={i}
                  onClick={() => {
                    addSelectedSkill(data);
                  }}
                >
                  <span>{data}</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <g fill="none" fillRule="evenodd">
                        <g fill="#939393">
                          <g>
                            <path
                              d="M3.151 3.151c.202-.201.53-.201.732 0L8 7.27l4.117-4.118c.202-.201.53-.201.732 0 .201.202.201.53 0 .732L8.73 8l4.118 4.117c.18.18.199.458.06.66l-.06.072c-.202.201-.53.201-.732 0L8 8.73 3.883 12.85c-.202.201-.53.201-.732 0-.201-.202-.201-.53 0-.732L7.27 8 3.151 3.883c-.18-.18-.199-.458-.06-.66z"
                              transform="translate(-156 -497) translate(156 497) rotate(-45 8 8)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </button>
              );
            } else if (moreOn && i > 7) {
              return (
                <button
                  type="button"
                  key={i}
                  onClick={() => {
                    addSelectedSkill(data);
                  }}
                >
                  <span>{data}</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <g fill="none" fillRule="evenodd">
                        <g fill="#939393">
                          <g>
                            <path
                              d="M3.151 3.151c.202-.201.53-.201.732 0L8 7.27l4.117-4.118c.202-.201.53-.201.732 0 .201.202.201.53 0 .732L8.73 8l4.118 4.117c.18.18.199.458.06.66l-.06.072c-.202.201-.53.201-.732 0L8 8.73 3.883 12.85c-.202.201-.53.201-.732 0-.201-.202-.201-.53 0-.732L7.27 8 3.151 3.883c-.18-.18-.199-.458-.06-.66z"
                              transform="translate(-156 -497) translate(156 497) rotate(-45 8 8)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </button>
              );
            }
          })}
        </ResumeSkillItem>
      </ResumeSkillListWrapper>
      <ResumeSkillSearchWrapper>
        <input className="resume-skill-search-input" placeholder="보유 스킬을 검색해주세요" type={"text"} />
        <span className="resume-skill-search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <g fill="none" fillRule="evenodd">
              <g fill="#939393">
                <g>
                  <g>
                    <path
                      d="M16.433 17.317c.244.244.64.244.884 0s.244-.64 0-.884L11.9 11.016l-.211-.184c-.248-.212-.617-.198-.848.032C9.794 11.905 8.382 12.5 6.875 12.5c-3.106 0-5.625-2.519-5.625-5.625 0-3.107 2.518-5.625 5.625-5.625S12.5 3.768 12.5 6.875c0 .58-.088 1.148-.259 1.691-.103.33.08.68.409.784.33.104.68-.08.784-.409.208-.663.316-1.359.316-2.066C13.75 3.078 10.672 0 6.875 0S0 3.078 0 6.875c0 3.796 3.078 6.875 6.875 6.875 1.634 0 3.18-.574 4.4-1.593l5.158 5.16z"
                      transform="translate(-1215 -454) translate(193 438) translate(1022.042 16.042)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </span>
      </ResumeSkillSearchWrapper>
      <ResumeSelectedSkill>
        {selectedSkill.map((data, i) => (
          <button type="button" key={i}>
            <span>{data}</span>
            <span onClick={() => deleteSelectedSkill(data)}>
              <svg width="16.59751037344398" height="16.59751037344398" viewBox="0 0 24 24" color="#939393">
                <path
                  fill="currentColor"
                  d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
                ></path>
              </svg>
            </span>
          </button>
        ))}
      </ResumeSelectedSkill>
    </ResumeSkillListContainer>
  );
}

export default ResumeSkillList;
