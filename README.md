# React Blog 과제
## 목표
- 기존 HTML/CSS 파일을 이용해서 React 로 구현해보기
    1. 컴포넌트 만들기
    2. 라우터를 사용해서 페이지 라우팅 처리하기
    3. state 처리를 통해 header 버튼 바꾸기
        - login 상태면 더미 데이터를 가져와서 게시글, 정보, 유저정보 뿌려주기
        - logout 상태면 login, register 버튼 나오게 하기



### 0629 한일 
    - Category 를 재사용할 수 있도록 만들고 싶어서 작업중
    - Post.jsx -> axios로 로컬의 json 데이터를 받아서 뿌려주게 구현  
#### 문제점
    1. about의 카테고리와 post의 카테고리가 html 구조가 다른데<br>어떻게해야 하나의 Category 컴포넌트로 사용할 수 있을지  
    2. 중간부터 Styled-component 로 바꿔보려고 하니까 오히려 복잡해 져서 그냥 css 삽입으로 하고 나중에 변환하는 식으로 진행
    3. 데이터 받아서 저장할 때 누락된 것들 (content, blog부분) 수정해야함

#### 깨달은 것
    1. json 데이터를 받아와 useState 로 저장할 때 객체를 저장하는 법
       (...와 concat 을 쓰는 이유)