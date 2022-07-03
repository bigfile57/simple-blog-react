import React, { useEffect, useState } from "react";
import getBlogDatas from "./blogDate";
import "../css/author.css";
import "../css/posts.css";
import "../css/post.css";

function Post() {
  const [postData, setPostData] = useState([]);
  const [postContentData, setPostContentData] = useState([]);
  useEffect(() => {
    (async () => {
      const { postDatas } = await getBlogDatas();
      setPostData(postDatas);
      setPostContentData(
        postDatas.map((item) => {
          return item.contents[2].text;
        })
      );
    })();
  }, []);

  return (
    <ul className="posts">
      {postData.map((item, id) => (
        <React.Fragment key={id}>
          <li>
            <a href="post-view.html" className="post">
              <article>
                <img src={item.thumbnail} alt="썸네일" />
                <div className="contents-wrap">
                  {/* category */}

                  <h3>{item.title}</h3>
                  <dl className="author-wrap">
                    <dt className="a11y-hidden">Author</dt>
                    <dd className="author">
                      <img src={item.profileImg} alt="프로필사진" />{" "}
                      {item.userName}
                    </dd>
                    <dt className="a11y-hidden">Created</dt>
                    <dd className="created">{item.created}</dd>
                  </dl>
                  <p className="post-description">
                    {/* {item.contents[id]} */}
                    {postContentData[item.id]}
                  </p>
                </div>
              </article>
            </a>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Post;
