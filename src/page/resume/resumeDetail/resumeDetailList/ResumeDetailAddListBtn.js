import React from 'react'
import styled from 'styled-components'

const ResumeDetailAddListButton = styled.button`
    width: 100%;
    padding: 30px 0;
    display: block;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    border: none;
    border-radius: 0;
    color: #36f;
    background-color: transparent;
    border-bottom: 1px solid #f1f1f1;
`

const ResumeDetailSecondListAddButton = styled(ResumeDetailAddListButton)`
     border-bottom: none;
     font-size: 16px;
`

function ResumeDetailAddListBtn({onClick}) {
  return (
    <ResumeDetailAddListButton onClick={onClick}>
        + 추가
    </ResumeDetailAddListButton>
  )
}

export function ResumeDetailSecondListAddBtn({btnText}){
    return(
        <ResumeDetailSecondListAddButton>
          + 주요 성과 추가
        </ResumeDetailSecondListAddButton>
    )
}

export default ResumeDetailAddListBtn