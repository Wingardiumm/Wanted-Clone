import React from "react";
import styled from "styled-components";
import SelectJobBtnArrow from "./SelectJobBtnArrow";

const SelectJobGroup = styled.article`
  background: #fff;
  padding-top: 40px;
`;
const CategoryNavBarContainer = styled.div`
  @media (min-width: 1200px) {
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    width: 87.72%;
  }
  position: relative;
  display: flex;
  max-width: 1060px;
  align-items: center;
  > div > button {
    display: flex;
    align-items: center;
    white-space: nowrap;
    span {
      padding-top: 3px;
      margin-right: 15.5px;
      font-size: 24px;
      line-height: 29px;
      font-weight: 400;
      color: #333;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  div:first-child {
    > button > span {
      padding-top: 3px;
      margin-right: 15.5px;
      font-size: 24px;
      line-height: 29px;
      font-weight: 700;
      color: #333;
    }
  }
`;
const SelectJobDetail = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  :before {
    content: "|";
    font-size: 28px;
    line-height: 29px;
    padding: 3px 24px 0;
    color: #ececec;
  }
`;
function JobArticle() {
  return (
    <SelectJobGroup>
      <CategoryNavBarContainer>
        <div>
          <button>
            {/* 데이터로 직업군 영역 넣어주기 */}
            <span>영업</span>
            <SelectJobBtnArrow />
          </button>
        </div>
        <SelectJobDetail>
          <button>
            {/* 선택한 직업 뒤에 전체 붙이기 */}
            <span>영업 전체</span>
            <SelectJobBtnArrow />
          </button>
        </SelectJobDetail>
      </CategoryNavBarContainer>
    </SelectJobGroup>
  );
}

export default JobArticle;
