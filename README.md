로그인 페이지, 회원가입 페이지

헤더, 메인페이지 캐러셀 구현


2023년 1월 30일

메인페이지 scrollable Tab 구현
Tab 모달 구현
Career 이미지 목록 구현
더보기 버튼 클릭시 추가 데이터 렌더링
더보기 한번 더 클릭시 아이템들 랜덤 배치

아래쪽 배너들 작업


2023년 1월 31일

메인페이지 이벤트 배너 캐러셀 구현
Footer 구현



2023년 2월 1일

로그인 회원가입 api 연동 및 로그인 패스워드 입력 화면 구현
헤더 프로필 모달 구현중 (70%)

1차 피드백 

생산성 지적
 => 퍼블리싱 속도를 올려야함
이력서페이지 로그인 하기전 랜딩페이지도 구현하여
로그인 전에는 랜딩페이지 후에는 이력서 목록 페이지로 이동

개발중 이슈:
로그인컴포넌트와 회원가입 유효성검사에서 이슈 발생

로그인, 회원가입, 패스워드입력 화면이 전부 같은 component 내에서 이루어 지고 있음을 
늦게 알아서 그에 맞게 화면을 state로 관리하는 방향으로 변경함
경우의 수에 따라 화면이 전환되는데 로그인의 경우 api와 연동하여 

1. 이미 가입된 아이디가 있을 경우
    비밀번호 입력페이지 on
    회원가입 off
    로그인 off
2. 중복된 아이디가 없는 경우
    회원가입 on
    로그인 off
    비밀번호 입력페이지 off

이런 로직으로 구현하였다.

또한 회원가입 화면 구현중 전체동의 및 여러가지 체크박스에 대한 관리는 각 체크박스를 전부 state화 함

각 체크박스의 state를 useEffect에 실행조건에 넣고 하나라도 false 일때는 전체동의도 false로 변하게끔 만듬
가입하기 버튼 또한 마찬가지로 useEffect로 관리함

2023년 2월 2일

헤더 프로필 모달 구현
로그아웃 구현
이력서 landing page 구현
이력서 목록 페이지 구현중 (20%)

개발 도중 발생한 이슈 :

대부분 퍼블리싱을 진행 했기에 어려운점은 딱히 없었음



2023년 2월 3일

이력서 목록 페이지 구현
채용 리스트 페이지 구현중(30%)











1. 기획서의 변동사항
2. 기획서 상 계획이 몇퍼센트 완료되었는지
3. 현재 어떤 화면 혹은 기능을 구현중에 있는지
4. 클라이언트 개발자 or 서버 개발자와의 회의에 따른 회의록
5. 개발팀장님의 피드백(1차, 2차)
6. 개발 도중에 발생하는 이슈
    1. 어떤 점이 어려웠는지, 
    2. 어떤 점에서 이슈가 발생했는지, 
    3. 어떻게 해결을 시도하였는지, 
    4. 해결이 되었는지

**개발 도중에 생기는 이슈에 대해서 모두 작성해주셔야합니다. 
(나중에 포트폴리오로 활용하실 때 많은 도움이 되기 때문에 꼭 작성하셔야합니다.)**

위 리스트는 필수 반영사항으로 그 외로 더 작성하셔도 무관합니다.

아래 개발일지 예시를 보시면 좀 더 이해가 되실겁니다. 
아래 개발일지 예시에는 **개발 도중에 발생한 이슈 항목이 반영되어있지 않으니 해당 부분도 꼭 반영하여서 작성하셔야합니다.**