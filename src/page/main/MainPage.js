import React from 'react'
import styled from 'styled-components'
import { SimpleSlider } from '../../component/simpleSlider'
import MainContentSection from './MainContentSection'
const MainPageWrapper = styled.div`
  background-color: #fff;
  @media (min-width:1200px) {
    padding-top: 25px;
  }
`
function MainPage() {
  return (
    <MainPageWrapper>
      <SimpleSlider/>
      <MainContentSection/>
    </MainPageWrapper>
  )
}

export default MainPage