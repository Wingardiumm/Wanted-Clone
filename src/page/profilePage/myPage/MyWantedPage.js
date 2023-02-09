import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { loginApi } from '../../../api'
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
    const [userData, setUserData] = useState();
    useEffect(()=>{
      const jwt = localStorage.getItem("jwt");
      const userId = localStorage.getItem("user_id");
      console.log(jwt,userId)
      loginApi
          .users(userId)
          .then((Response) => {
            console.log(Response.data);
            if(Response.data.isSuccess){
              setUserData(Response.data.result)
            }
          })
          .catch((Error) => {
            console.log(Error);
          });
    },[])
  return (
    <MyPageContainer>
        <MyPageTitle>
            MY 원티드
        </MyPageTitle>
        <MyPageContentContainer>
            <MyPageAside userData={userData}/>
            <MyPageContent userData={userData}/>
        </MyPageContentContainer>
    </MyPageContainer>
  )
}

export default MyWantedPage