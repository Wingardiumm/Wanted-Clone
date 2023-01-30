import React from 'react'
import styled from 'styled-components'
import { SimpleSlider } from '../../component/simpleSlider'
import InterestTagBanner from './banner/InterestTagBanner'
import SectionDivider from './banner/SectionDivider'
import TypeTestBanner from './banner/TypeTestBanner'
import MainContentSection from './MainContentSection'
import MainScrollableNav from './scrollabeTab/MainScrollableNav'
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
      <TypeTestBanner/>
      <SectionDivider/>
      <InterestTagBanner/>
    </MainPageWrapper>
  )
}

export default MainPage