import React from 'react'
import styled from 'styled-components'
import MyPageAside from './MyPageAside'
import MyPageContent from './MyPageContent'

const MyPageContainer = styled.div`
    max-width: 1060px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const MyPageTitle = styled.div`
    width: 100%;
    padding: 50px 0 20px;
    font-size: 20px;
    color: #333;
    font-weight: 700;
`
const MyPageContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`
function MyWantedPage() {
  return (
    <MyPageContainer>
        <MyPageTitle>
            MY 원티드
        </MyPageTitle>
        <MyPageContentContainer>
            <MyPageAside/>
            <MyPageContent/>
        </MyPageContentContainer>
    </MyPageContainer>
  )
}

export default MyWantedPage