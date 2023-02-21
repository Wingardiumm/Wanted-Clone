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




2023년 2월 4일 

채용 리스트 페이지 (직업분류, 지역분류 모달 제외) 구현
채용 상세 페이지 구현

개발 도중 발생한 이슈:

1. 스크롤바와 함께 움직이는 캐러셀 구현

보통 캐러셀은 slick 라이브러리로 다 만들었지만
채용 상세페이지 상단의 이미지 캐러셀이 스크롤바가 함께 움직이는 캐러셀이라 방법을 찾는데 시간이 꽤 걸렸다.
결국 scrollBy 함수를 사용하여 해결하였다.

2. 지도 api 연동

네이버로 되어있어 네이버 지도 api를 받아오려 했으나 참고하려는 자료가 대부분 라이브러리를 이용하고 있었고 그 라이브러리가 현재 리액트 버전차이로 인해 사용이 힘든 상태였다.
그래서 카카오 지도 api를 사용하여 해결하였다.


2023년 2월 5일

이력서 작성 페이지 구현중

2023년 2월 6일

이력서 작성 페이지 퍼블리싱 80% 완료
캐리어 인사이트 상세페이지 퍼블리싱
메인페이지 캐리어 인사이트, 하단 메인이벤트 배너 api 연동
채용리스트 api 연동

개발중 이슈 
1) 이력서 작성페이지 드래그 앤 드랍 기능

2023년 2월 7일

이력서 api 연동중

2차피드백
지금까지 만든 것들 완성도 올리기
북마크 기능 만들기
세세한 디테일 ex) 채용리스트에서 채용상세페이지로 이동시 스크롤 맨위로 올리기
다한 뒤 파이어베이스 연동해서 이력서리스트에 파일올리기 or 새로운페이지 (마이페이지) 하나 더 만들기


2023년 2월 8일

이력서 api 연동중
북마크 기능 구현

2023년 2월 9일

마이페이지 퍼블리싱 및 api 연동
이력서 api 연동
로그인 안했을 시 접근을 제한하는 페이지 라우터로 구현

마무리




