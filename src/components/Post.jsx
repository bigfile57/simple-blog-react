import React, { useEffect, useState } from "react";
import getBlogDatas from "./blogDate";
import "../css/author.css";
import "../css/posts.css";
import "../css/post.css";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";

function Post() {
  const [postData, setPostData] = useState([]);
  const [postContentData, setPostContentData] = useState([]);
  const [postCategory,setPostCategory] = useState([])
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/post-view");
  };
  useEffect(() => {
    (async () => {
      const { postDatas } = await getBlogDatas();
      setPostData(postDatas);
      setPostContentData(
        postDatas.map((item) => {
          return item.contents[0].text;
        })

      );
      setPostCategory(
        postDatas.map((item)=>{
          return [...(item.category).split(',')]
        })
      );
    })();
  }, []);

  return (
    <ul className="posts">
      {postData.map((item, id) => (
        console.log(item.category + "   -"),
        <React.Fragment key={id}>
          <li onClick={goToMain} className="post">
            <article>
              <img src={item.thumbnail} alt="썸네일" />
              <div className="contents-wrap">
                {/* category */}
                <Categories types= {postCategory[item.id - 1]}/>
                <h3>{item.title}</h3>
                <dl className="author-wrap">
                  <dt className="a11y-hidden">Author</dt>
                  <dd className="author">
                    <img src={item.profileImg} alt="프로필사진" />
                    {item.userName}
                  </dd>
                  <dt className="a11y-hidden">Created</dt>
                  <dd className="created">{item.created}</dd>
                </dl>
                <p className="post-description">
                  {/* {item.contents[id]} */}
                  {postContentData[item.id - 1]}
                </p>
              </div>
            </article>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Post;
