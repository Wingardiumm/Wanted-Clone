import styled from "styled-components";

export const NextButton = styled.button`
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
  &:disabled {
    color: var(--theme-palette-colors-gray-300);
    background-color: var(--theme-palette-colors-bluegray-100);
    border: none;
    cursor: default;
  }
  .disabled {
    color: var(--theme-palette-colors-gray-300);
  }
`;

//disabled 클래스 붙일시 NextButton에서 제어 가능
export const BtnText = styled.span`
  color: var(--theme-palette-colors-common-white);
  font-weight: var(--text-weight-body-bold);
  text-align: left;
  letter-spacing: var(--text-spacing-body);
  font-size: var(--text-size-body);
  line-height: var(--text-height-body);
`;