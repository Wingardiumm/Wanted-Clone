import React from "react";
import styled from "styled-components";
import { SimpleSlider } from "../../component/simpleSlider";
import InterestTagBanner from "./banner/InterestTagBanner";
import SectionDivider from "./banner/SectionDivider";
import TypeTestBanner from "./banner/TypeTestBanner";
import MainContentSection from "./MainContentSection";
import MainScrollableNav from "./scrollabeTab/MainScrollableNav";
import MainEventCarousel from "./section/eventBanner/MainEventBannerTitle";
import MainEventSlide from "./section/eventBanner/MainEventSlide";
import RecruitmentInfo from "./section/recruitmentInfo/RecruitmentInfo";
const MainPageWrapper = styled.div`
  background-color: #fff;
  @media (min-width: 1200px) {
    padding-top: 25px;
  }
`;
const MainSectionWrapper = styled.div`
  position: relative;
  scroll-margin-top: 4px;
  padding: 60px;
`;
const MainContentWrapper = styled.div`
  width: 1060px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    max-width: 1060px;
    width: 87.72%;
  }
`;
function MainPage() {
  return (
    <MainPageWrapper>
      {/* 메인 캐러셀 */}
      <SimpleSlider />
      <MainSectionWrapper>
        <MainContentWrapper>
          {/* 메인 캐리어 그리드 */}
          <MainContentSection />
        </MainContentWrapper>
      </MainSectionWrapper>
      {/* 유형테스트 배너 */}
      <TypeTestBanner />
      {/* 섹션 나누기 */}
      <SectionDivider />
      {/* 관심태그 배너 */}
      <InterestTagBanner />
      <MainSectionWrapper>
        <MainContentWrapper>
          {/* 이벤트 캐러셀 */}
          <MainEventSlide />
        </MainContentWrapper>
      </MainSectionWrapper>
      {/* 섹션 나누기 */}
      <SectionDivider />
      <MainSectionWrapper>
        <MainContentWrapper>
          {/* 채용정보 섹션 */}
          <RecruitmentInfo/>
        </MainContentWrapper>
      </MainSectionWrapper>
    </MainPageWrapper>
  );
}

export default MainPage;
