import React, { useEffect, useState } from "react";
import Categories from "../../../../components/Categories";
import Profile from "../../../../components/Profile";
import getBlogDatas from "../../../../components/blogDate";
function Aside() {
  const [userInfoData, setUserInfoData] = useState([{}]);
  const userId = 1;

  useEffect(() => {
    (async () => {
      const { userData } = await getBlogDatas();
      setUserInfoData(userData);
    })();
  }, []);

  return (
    <>
    {/* userData 중에서 userId 를 필터링 해서 해당 유저의 정보만 출력 */}
    {/* filter 쓸 때 값이 비어있으면 undefined 오류가 뜨는 데 
        삼항 연산자로 처리해줘서 데이터를 받아서 userInfodata 값이 undefined가 아니면 처리를 시작 하도록 수정
    */}
      {userInfoData
        .filter(item => item.id ? item.id.includes(userId) : null)
        .map(
          (item, id) => (
            (
              <React.Fragment key={id}>
                <aside className="about">
                  <h2>About Me</h2>
                  <Profile className={"user-profile"} />
                  <p className="user-name">{item.name}</p>
                  <p className="user-description">{item.userInfo}</p>
                  <dl>
                    <dt>
                      <h3>Categories</h3>
                    </dt>
                    <Categories types= {item.category}/>
                  </dl>
                  <h3>Follow</h3>
                  <ul className="sns">
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </aside>
              </React.Fragment>
            )
          )
        )}
    </>
  );
}

export default Aside;
