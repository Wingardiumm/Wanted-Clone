import styled from "styled-components";


export const MainPageSectionTitle = styled.div`
  text-align: center;
  h2 {
    font-size: 18px;
    line-height: 1.33;
    font-weight: 700;
    color: #333;
    margin-left: 4px;
    @media (min-width: 1200px) {
      font-size: 22px;
    }
  }
`;

export const MainTitleStyle = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  * {
    margin-left: 4px;
    line-height: normal;
  }
  button {
    margin-top: 3px;
  }
`;