# React Blog 과제

## 목표

- 기존 HTML/CSS 파일을 이용해서 React 로 구현해보기
  1. 컴포넌트 만들기
  2. 라우터를 사용해서 페이지 라우팅 처리하기
  3. state 처리를 통해 header 버튼 바꾸기
     - login 상태면 더미 데이터를 가져와서 게시글, 정보, 유저정보 뿌려주기
     - logout 상태면 login, register 버튼 나오게 하기

## 제출 후 할 것

1. 일단 미완성한 부분 완성하기...
2. Readme 수정 -> 개인메모처럼 적어놨는데 이미지랑 해서 명확히 적기
3. css 에서 styled-component 로 하려했다가 다 못바꾸고 뒤섞인 혼종이 돼버렸으므로 styled-component 로 다 바꾸기
4. redux 사용해서 전역으로 data.json 뿌려보기 (ContextAPI 도)
5. styled-component, react router 등등 사용한 기술을 어떤 부분에 어떻게 적용하면 좋을거 같아서 사용했다는 점을 설명할 수 있게 정리하기

<hr>

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

### 0705 한일

    - post 부분 클릭하면 post-view 로 이동하도록 라우터 사용해서 구현
      useNavigate 를 사용해서 구현
      (뒤로가기 쉽게 되고 LINK컴포넌트에 스타일을 다시 해줘야해서)
    - post-view 페이지 구현 (데이터 받아서 출력하게 해야하는데 미완성)
    - post 부분에 category 제대로 나오게 했음

#### 문제점 및 해결

    - category 컴포넌트에서 props 로 카테고리 종류를 받아서 출력하도록 구현했는데 aside 에선 배열형식으로 받아와서 정상작동했지만 post 에서 넘겨받은 값은 string 이어서 map 함수 undefined 오류가 발생했다
    처음엔 데이터가 들어오기전에 렌더링이 실행되어 undefined 로 정의되어 오류가 나는줄 알았는데 (0704 오류에서 배운점) 값이 string 으로 들어와서 그랬던 거였다. 그래서 처음엔 useEffect 로 props 값을 구별해서 String 이면 배열로 바꿔주려고 했다 (당연히 렌더링이 먼저되니까 안됐다)
    결과적으론 ['x','y','c'] 값으로 받을 수 있으면 작동은 하니까
    post 컴포넌트에서 받은 postDatas에서 category 부분을 따로 빼서 배열로 저장해서 넘겨줘서 해결했음
    근데 왜 data.json 에서 userData 나 postData 의 category 형식은 같은데 postData의 category 는 string 값으로 나오는지 .. 어디서 놓친부분 있는지 찾아봐야겠다 

    - map 으로 순환할 때 id 값도 이용해서 컨텐츠 부분을 출력했는데 xxx[item.id] 같이 사용하면 xxx[1] 처럼 들어와서 마지막 부분이 데이터가 안들어가는 문제가 있었는데 xxx[itme.id - 1] 으로 수정해서 해결했다.
