import React, { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { resumeApi } from "../../../../../api";

const DraggableHandle = styled.div`
  position: absolute;
  cursor: move;
  display: none;
  top: 35px;
  left: 10px;
`;
const DraggableHandleBtn = styled.div`
  width: 12px;
  height: 10px;
  background-image: url(https://static.wanted.co.kr/images/userweb/arrange2.png);
  background-size: 4px;
  opacity: 0.2;
`;
const ResumeDraggableList = styled.li`
  margin: 0;
  padding: 30px;
  position: relative;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #f1f1f1;
  background-color: transparent;
  &:hover {
    background-color: #fbfbfb;
    ${DraggableHandle} {
      display: block;
    }
  }
`;

const DraggableListItem = styled.div`
  margin: 0;
  padding: 30px;
  position: relative;
  border-radius: 0;
  border: none;
  background-color: transparent;

  input[type="text"],
  input[type="textarea"] {
    height: auto;
    padding: 0;
    border: none;
    border-radius: 0;
    font-size: 14px;
    font-weight: 500;
    background-color: transparent;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    -moz-appearance: none;
    -webkit-appearance: none;
    resize: none;
  }
  input:focus {
    outline: none;
  }
`;
const PeriodDate = styled.div`
  position: relative;
  div {
    display: inline-block;
  }
  > div:first-of-type {
    margin-top: 0;
  }
  .resume-detail-year {
    width: 36px;
  }
  .resume-detail-month {
    width: 26px;
    margin-left: 4px;
  }
`;
const SearchModalButton = styled.input`
  cursor: pointer;
  color: #3b3d40;
  white-space: nowrap !important;
  font-size: 23px !important;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background-color: transparent;
  border: none;
  padding: 0;
  margin-bottom: 3px;
  border-radius: 0;
  height: auto;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  width: fit-content;
`;
const DraggableListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border: none;

  }
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  > div:first-of-type {
    flex: 3 1;
  }
  div:nth-of-type(2) {
    flex: 9 1;
    > div {
      position: relative;
    }
  }
`;
const ResumeDetailInputBox = styled.input`
  font-size: 16px;
  background-color: transparent;
  border: none;
  padding: 0;
  margin-bottom: 3px;
  border-radius: 0;
  height: auto;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
const ResumeDetailListCloseBtn = styled.button`
  border: 0;
  background-color: transparent;
  position: absolute;
  padding: 15px;
  top: 21px;
  right: 15px;
`;
function ResumeAwardDraggableList({ index, testData,setRender,render }) {
  const [startYear, setStartYear] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [itemId, setItemId] = useState();
  const [mainText, setMainText] = useState("");
  const [subText, setSubText] = useState("");


  console.log(testData);
  useEffect(() => {
    console.log(testData.idActivity, mainText, subText, startYear, startMonth);
    const timer = setTimeout(() => {
      resumeApi
        .changeActivityList(testData.idActivity, mainText, subText, startYear, startMonth)
        .then((Response) => {
          console.log(Response.data);
          if(Response.data.isSuccess){
            setRender(!render)
          }
        })
        .catch((Error) => {
          console.log(Error);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [startYear, startMonth, mainText, subText]);

  return (
    <Draggable key={`${testData?.idActivity}`} draggableId={`${testData?.idActivity}`} index={index}>
      {(provided) => (
        <ResumeDraggableList {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <DraggableHandle>
            <DraggableHandleBtn />
          </DraggableHandle>
          <DraggableListItem>
            <DraggableListItemWrapper>
              <div>
                <div>
                  <PeriodDate>
                    <div>
                      <div>
                        <input
                          type={"text"}
                          placeholder={"YYYY"}
                          maxLength={4}
                          className="resume-detail-year"
                          defaultValue={testData.year}
                          onInput={(e)=>{
                             e.target.value= e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                          }}
                          onChange={(e) => {
                            setStartYear(e.target.value);
                          }}
                        />
                        <span>
                          .
                          <input
                            type={"text"}
                            placeholder={"MM"}
                            maxLength={2}
                            className="resume-detail-month"
                            defaultValue={testData.month}
                            onInput={(e)=>{
                                e.target.value= e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                             }}
                            onChange={(e) => {
                              setStartMonth(e.target.value);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </PeriodDate>
                </div>
              </div>
              <div>
                <div>
                  <form action=".">
                    <SearchModalButton
                      type="text"
                      defaultValue={testData.nameActivity}
                      placeholder={"활동명"}
                      onChange={(e) => {
                        setMainText(e.target.value);
                      }}
                    />
                  </form>
                  <div>
                    <ResumeDetailInputBox
                      type={"text"}
                      name="title"
                      defaultValue={testData.detailActivity}
                      placeholder="세부사항"
                      onChange={(e) => {
                        setSubText(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <ResumeDetailListCloseBtn>
                <svg width="10" height="10" viewBox="0 0 16 16">
                  <g fill="#767676" fillRule="evenodd">
                    <path
                      d="M0.242390625,0.242390625 C0.565578125,-0.080796875 1.08957812,-0.080796875 1.41278125,0.242390625 L1.41278125,0.242390625 L7.99999414,6.82960937 L14.5872187,0.242390625 C14.9104062,-0.080796875 15.4344063,-0.080796875 15.7576094,0.242390625 C16.0808125,0.565578125 16.0807969,1.08957813 15.7576094,1.41278125 L15.7576094,1.41278125 L9.17014062,8 L15.7576094,14.5872187 C16.0514219,14.8810312 16.078125,15.3407969 15.8377344,15.6647813 L15.7576094,15.7576094 C15.4344219,16.0807969 14.9104219,16.0807969 14.5872187,15.7576094 L14.5872187,15.7576094 L7.99999414,9.17039063 L1.41278125,15.7576094 C1.08959375,16.0807969 0.56559375,16.0807969 0.242390625,15.7576094 C-0.0808125,15.4344219 -0.080796875,14.9104219 0.242390625,14.5872188 L0.242390625,14.5872188 L6.82985937,8 L0.242390625,1.41278125 C-0.051421875,1.11896875 -0.078125,0.659203125 0.162265625,0.33521875 L0.242390625,0.242390625 Z"
                      id="Path"
                    ></path>
                  </g>
                </svg>
              </ResumeDetailListCloseBtn>
            </DraggableListItemWrapper>
          </DraggableListItem>
        </ResumeDraggableList>
      )}
    </Draggable>
  );
}

export default ResumeAwardDraggableList;
