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


### 0630 한일
    - data 안에서 배열이 들어간 부분(카테고리 등) 은 각 컴포넌트에서 받아서 데이터대로 뿌려줌
    - getdata.js 에서 각 블로그정보, 유저정보, 포스팅정보를 axios 로 data.json 으로부터 받아서 반환해준다. 반환한 값은 각 컴포넌트에서 가져다 쓰도록 Post에서 모듈화 시킴



### 0704 한일
    - userData 부분 userId 에 맞춰서 출력할 수 있도록 필터처리
    - postData 부분 postview 에 넘길 데이터를 뽑기 위해 필터처리해서 
    contents 부분만 빼서 저장
    - Categories 컴포넌트 받아온 데이터에 맞춰서 출력되도록 수정

#### 0704 문제점 및 해결
    - filter() 함수 undefined 오류 
      filter 쓸 때 값이 비어있으면 undefined 오류가 뜨는 데 삼항 연산자로 조건부 렌더 처리해줘서 데이터를 받아서 
      userInfodata 값이 undefined가 아니면 시작 하도록 수정했다
      
    - postData 중에서 contents 를 저장했는데 더미 데이터의 contents 부분이 좀 잘못된 것 같다. 
      제목(p태그), 배경(img태그), 내용(p태그), 배경(img태그) 식으로 들어가 있어야 할 것 같다.