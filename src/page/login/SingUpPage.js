import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CheckSvg from "./CheckSvg";
import LabelFormat from "./LabelFormat";

const SingUpPageBackground = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: var(--theme-palette-colors-base-bg);
`;
const SingUpWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
`;

const SignUpBox = styled.div`
  border-radius: 5px;
  width: 100%;
  max-height: calc(100vh - 100px);
  overflow: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: var(--theme-palette-colors-contents-bg);
  border: 1px solid var(--theme-palette-colors-bluegray-200);
`;
const SignUpBoxTitle = styled.div`
  padding: 0px 20px;
  height: 64px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .between-div {
    display: flex;
    min-width: 64px;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
  }
`;
const CancleBtnWrapper = styled.div`
  min-width: 64px;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 400;
  font-size: 17px;

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 8px;
    margin: -8px;
    fill: var(--theme-palette-colors-black-100);
    p {
      color: var(--theme-palette-colors-black-100);
      text-align: center;
      letter-spacing: var(--text-spacing-headline);
      line-height: var(--text-height-headline);
      min-width: 64px;
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      font-weight: 400;
      font-size: 17px;
    }
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  p {
    color: var(--theme-palette-colors-black-100);
    font-weight: var(--text-weight-headline-bold);
    text-align: center;
    letter-spacing: var(--text-spacing-headline);
    font-size: var(--text-size-headline);
    line-height: var(--text-height-headline);
    display: flex;
    flex: 1 1 0%;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
`;
const SignUpFormWrapper = styled.div`
  overflow: auto;
  position: relative;
  padding: 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const LabelWrapper = styled.div`
  margin: 17px 0px 7px;
`;
const SignUpInput = styled.input`
  width: 100%;
  height: 50px;
  min-height: 50px;
  padding: 0px 12px;
  outline: none;
  background-color: transparent;
  border: 1px solid var(--theme-palette-colors-bluegray-200);
  color: var(--theme-palette-colors-gray-900);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  &:focus {
    border: 1px solid var(--theme-palette-colors-blue-400);
  }
  ::placeholder {
    color: #ccc;
  }
  :read-only {
    color: var(--theme-palette-colors-gray-300);
    -webkit-text-fill-color: var(--theme-palette-colors-gray-300);
    background-color: var(--theme-palette-colors-bluegray-100);
    opacity: 1;
  }
`;
const NationalPhoneNumSelectBox = styled.div`
  height: 50px;
  min-height: 50px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid var(--theme-palette-colors-bluegray-200);
  background-color: var(--theme-palette-colors-contents-bg);
  margin-bottom: 10px;
  position: relative;
`;
const NationalNumSelect = styled.select`
  padding-left: 12px;
  width: 100%;
  position: absolute;
  left: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  height: 100%;
  border: none;
  background: none;
  z-index: 1;
  font-size: 16px;
  color: var(--theme-palette-colors-gray-900);
  font-weight: 400;
`;
const SelectBoxArrow = styled.div`
  position: absolute;
  right: 20px;
  font-size: 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  span {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: inherit;
    -webkit-box-align: inherit;
    -ms-flex-align: inherit;
    align-items: inherit;
    -webkit-box-pack: inherit;
    -ms-flex-pack: inherit;
    -webkit-justify-content: inherit;
    justify-content: inherit;
    svg {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: inherit;
    }
  }
`;
const PhoneNumBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
const CertificationNumBtn = styled.button`
  height: 50px;
  min-height: 50px;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: var(--theme-palette-colors-contents-bg);
  margin-left: 10px;
  padding: 0px 15px;
  width: auto;
  flex: 0 0 auto;
  border-radius: 5px;
  border: 1px solid var(--theme-palette-colors-bluegray-200);
  span {
    color: var(--theme-palette-colors-black-100);
    font-weight: var(--text-weight-body-bold);
    text-align: left;
    letter-spacing: var(--text-spacing-body);
    font-size: var(--text-size-body);
    line-height: var(--text-height-body);
  }
`;
const PasswordValiNotice = styled.p`
  color: var(--theme-palette-colors-gray-600);
  font-weight: var(--text-weight-footnote-normal);
  text-align: left;
  letter-spacing: var(--text-spacing-footnote);
  font-size: var(--text-size-footnote);
  line-height: var(--text-height-footnote);
  margin-bottom: 10px;
  margin-top: 0px;
`;
const AgreementAllBox = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  min-height: 25px;
  width: 100%;
  margin: 28px 0px 10px;
`;
const AgreementCheckBox = styled.div`
  width: 18px;
  height: 18px;
  font-size: 11px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid var(--theme-palette-colors-gray-200);
`;
const AgreementCheckInput = styled.input`
  opacity: 0;
  width: calc(100% - 90px);
  height: 100%;
  position: absolute;
  cursor: pointer;
`;
const AgreementTitleBox = styled.div`
  display: flex;
  flex: 1 1 0%;
`;
const AgreementAllTitle = styled.p`
  color: var(--theme-palette-colors-gray-900);
  font-weight: var(--text-weight-bodyalt-bold);
  text-align: left;
  letter-spacing: var(--text-spacing-bodyalt);
  font-size: var(--text-size-bodyalt);
  line-height: var(--text-height-bodyalt);
  margin: 0px 0px 0px 7px;
  word-break: keep-all;
`;
const AgreementSectionDivider = styled.hr`
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  width: 100%;
  border-bottom: 1px solid var(--theme-palette-colors-bluegray-200);
`;
const AgreementBox = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  min-height: 25px;
  width: 100%;
  margin: 10px 0px;
  a {
    color: var(--theme-palette-colors-gray-600);
    font-weight: var(--text-weight-bodyalt-bold);
    text-align: left;
    letter-spacing: var(--text-spacing-bodyalt);
    font-size: var(--text-size-bodyalt);
    line-height: var(--text-height-bodyalt);
    cursor: pointer;
    margin: 0px;
  }
`;
const AgreementTitle = styled.p`
  color: var(--theme-palette-colors-gray-600);
  font-weight: var(--text-weight-bodyalt-medium);
  text-align: left;
  letter-spacing: var(--text-spacing-bodyalt);
  font-size: var(--text-size-bodyalt);
  line-height: var(--text-height-bodyalt);
  margin: 0px 0px 0px 7px;
  word-break: keep-all;
`;
const MessageMethod = styled.div`
  display: flex;
  margin-left: 28px;
  p {
    color: var(--theme-palette-colors-gray-600);
    font-weight: var(--text-weight-body-normal);
    text-align: left;
    letter-spacing: var(--text-spacing-body);
    font-size: var(--text-size-body);
    line-height: var(--text-height-body);
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
const MessageMethodLabel = styled.label`
  height: 22px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 18px;
  cursor: pointer;
`;
const SubmitBox = styled.div`
  z-index: 10;
  position: sticky;
  bottom: 0px;
`;
const SignUpBtn = styled.button`
  width: 100%;
  height: 50px;
  min-height: 50px;
  border-radius: 25px;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: var(--theme-palette-colors-blue-400);
  border: none;
  margin-top: 30px;
  span {
    color: var(--theme-palette-colors-common-white);
    font-weight: var(--text-weight-body-bold);
    text-align: left;
    letter-spacing: var(--text-spacing-body);
    font-size: var(--text-size-body);
    line-height: var(--text-height-body);
  }
`;
const SignUpBtnOverlay = styled.div`
  position: absolute;
  inset: 30px 0px -20px;
  background: var(--theme-palette-colors-contents-bg);
  z-index: -1;
`;
const SignUpBtnOverlay2 = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 60px;
  height: 30px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, var(--theme-palette-colors-contents-bg) 100%);
  z-index: -1;
  pointer-events: none;
`;
function SingUpPage() {
  
  return (
    <SingUpPageBackground>
      <SingUpWrapper>
        <SignUpBox>
          <SignUpBoxTitle>
            <CancleBtnWrapper>
              <button>
                <p>취소</p>
              </button>
            </CancleBtnWrapper>
            <TitleWrapper>
              <p>회원가입</p>
            </TitleWrapper>
            <div className="between-div" />
          </SignUpBoxTitle>
          <SignUpFormWrapper>
            <form>
              <LabelWrapper>
                {/* 라벨 컴포넌트 */}
                <LabelFormat content={"이메일"}></LabelFormat>
              </LabelWrapper>
              <SignUpInput value={"따라라라라라ㅏ"} disabled></SignUpInput>
              <LabelWrapper>
                <LabelFormat content={"이름"}></LabelFormat>
              </LabelWrapper>
              <SignUpInput placeholder="이름을 입력해주세요."></SignUpInput>
              <LabelWrapper>
                <LabelFormat content={"휴대폰 번호"}></LabelFormat>
              </LabelWrapper>
              <div>
                <NationalPhoneNumSelectBox>
                  <NationalNumSelect>
                    <option>South Korea +82</option>
                  </NationalNumSelect>
                  <SelectBoxArrow>
                    <span>
                      <svg viewBox="0 0 10 6" className="css-1h47l4s">
                        <path
                          d="M5 3.93934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934Z"
                          fill="var(--theme-palette-colors-gray-900)"
                        ></path>
                      </svg>
                    </span>
                  </SelectBoxArrow>
                </NationalPhoneNumSelectBox>
              </div>
              <PhoneNumBox>
                <SignUpInput placeholder="(예시) 01013245768"></SignUpInput>
                <CertificationNumBtn disabled>
                  {/* disabled일때 border: 1px solid var(--theme-palette-colors-bluegray-100);     color: var(--theme-palette-colors-gray-300);
                    background-color: var(--theme-palette-colors-bluegray-100);
                    border: none;
                    cursor: default;*/}
                  <span>인증번호 받기</span>
                  {/** disabled 일 때   color: var(--theme-palette-colors-gray-300); */}
                </CertificationNumBtn>
              </PhoneNumBox>
              <PhoneNumBox>
                <SignUpInput placeholder="인증번호를 입력해주세요." disabled></SignUpInput>
              </PhoneNumBox>
              <LabelWrapper>
                <LabelFormat content={"비밀번호"}></LabelFormat>
              </LabelWrapper>
              <SignUpInput placeholder="비밀번호를 입력해주세요."></SignUpInput>
              <SignUpInput placeholder="비밀번호를 다시 한번 입력해주세요."></SignUpInput>
              <PasswordValiNotice>영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</PasswordValiNotice>
              <AgreementAllBox>
                <AgreementCheckBox />
                <AgreementCheckInput />
                <AgreementTitleBox>
                  <AgreementAllTitle>전체 동의</AgreementAllTitle>
                </AgreementTitleBox>
              </AgreementAllBox>
              <AgreementSectionDivider />

              <AgreementBox>
                <AgreementCheckBox />
                <AgreementCheckInput />
                <AgreementTitleBox>
                  <AgreementTitle>만 14세 이상입니다. (필수)</AgreementTitle>
                </AgreementTitleBox>
              </AgreementBox>

              <AgreementBox>
                <AgreementCheckBox />
                <AgreementCheckInput />
                <AgreementTitleBox>
                  <AgreementTitle>원티드 이용약관 동의 (필수)</AgreementTitle>
                </AgreementTitleBox>
                <Link to={"/"}>자세히</Link>
              </AgreementBox>

              <AgreementBox>
                <AgreementCheckBox />
                <AgreementCheckInput />
                <AgreementTitleBox>
                  <AgreementTitle>원티드 개인정보 수집 및 이용 동의 (필수)</AgreementTitle>
                </AgreementTitleBox>
                <Link to={"/"}>자세히</Link>
              </AgreementBox>
              <AgreementBox>
                <AgreementCheckBox />
                <AgreementCheckInput />
                <AgreementTitleBox>
                  <AgreementTitle>채용 소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기</AgreementTitle>
                </AgreementTitleBox>
              </AgreementBox>
              <MessageMethod>
                <MessageMethodLabel>
                  {/* 인풋박스 만들어서 값 담아야함 */}
                  <CheckSvg />
                  <p>이메일</p>
                </MessageMethodLabel>
                <MessageMethodLabel>
                  {/* 인풋박스 만들어서 값 담아야함 */}
                  <CheckSvg />
                  <p>앱 푸시</p>
                </MessageMethodLabel>
                <MessageMethodLabel>
                  {/* 인풋박스 만들어서 값 담아야함 */}
                  <CheckSvg />
                  <p>문자 메시지</p>
                </MessageMethodLabel>
              </MessageMethod>
              <SubmitBox>
                {/* validation 하면 비밀번호나 휴대폰번호에 추가 css 가 붙기에 form박스 크기가 변화하는데
                가입하기 버튼은 sticky로 고정되어 있고 form 아랫부분이 밑으로 내려가면서 부드럽게 안보여지는 css가 있음 
                또한 스크롤링 가능*/}
                <SignUpBtnOverlay />
                <SignUpBtnOverlay2 />
                <SignUpBtn>
                  <span>가입하기</span>
                </SignUpBtn>
              </SubmitBox>
            </form>
          </SignUpFormWrapper>
        </SignUpBox>
      </SingUpWrapper>
    </SingUpPageBackground>
  );
}

export default SingUpPage;
