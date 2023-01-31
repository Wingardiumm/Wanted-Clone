import React from 'react'
import styled from 'styled-components';

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
function MainSection() {
  return (
    <MainSectionWrapper>
        <MainContentWrapper>
            
        </MainContentWrapper>
    </MainSectionWrapper>
  )
}

export default MainSection