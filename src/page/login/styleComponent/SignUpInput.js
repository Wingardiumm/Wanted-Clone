import styled from "styled-components";

export const SignUpInput = styled.input`
  width: 100%;
  height: 50px;
  min-height: 50px;
  padding: 0px 12px;
  outline: none;
  background-color: transparent;
  border: 1px solid ${(props) => (props.checkOn ? "var(--theme-palette-colors-red-400)" : "var(--theme-palette-colors-bluegray-200)")};
  color: var(--theme-palette-colors-gray-900);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  &:focus {
    border: 1px solid ${(props) => (props.checkOn ? "var(--theme-palette-colors-red-400)" : "var(--theme-palette-colors-blue-400)")};
    /* border: 1px solid var(--theme-palette-colors-blue-400); */
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