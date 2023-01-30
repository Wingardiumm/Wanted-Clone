import React, { useState } from "react";
import styled from "styled-components";
import AllTabModal from "./AllTabModal";

const TabShowBtn = styled.button`
  min-width: 40px;
  min-height: 40px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 34px;
  min-height: 34px;
  border: 1px solid #ececec;
  -webkit-box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
  box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
  border-radius: 4px;
  color: ${(props)=>props.btnClicked ? '#fff' : '#939393'};
  background-color: ${(props)=>props.btnClicked ? '#36f' : '#fff'};
  outline: none;
`;
function AllTabShowBtn() {
  const [btnClicked, setBtnClicked] = useState(false);
  const btnHandling = () => {
    if (btnClicked === false) {
      setBtnClicked(true);
    } else {
      setBtnClicked(false);
    }
  };
  return (
    <>
        <TabShowBtn onClick={btnHandling} btnClicked={btnClicked}>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm7 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 19 10zM5 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 10z"
            ></path>
          </svg>
        </TabShowBtn>
        {btnClicked && <AllTabModal/>}
    </>

  );
}

export default AllTabShowBtn;
