import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/author.css'
import '../css/posts.css'
import '../css/post.css'

function Post() {
    const [postsData, setPostsData] = useState([{}])

    const getPosts = async() => {
        console.log('getPosts');
        const url = "/data.json"
            // /public 은 기본경로로 설정돼있음
            const result = await axios.get(url);
            console.log(result);
            const test = await result.data.posts.map((datas)=>(
                    {
                        id : `${datas.id}`,
                        mainBg : `${datas.mainBg}`,
                        category : `${datas.category}`,
                        title : `${datas.title}`,
                        thumbnail : `${datas.thumbnail}`,
                        profileImg : `${datas.profileImg}`,
                        userName : `${datas.userName}`,
                        created : `${datas.created}`,
                        
                    }))
                    setPostsData(test);

    }
    useEffect(()=>{
        getPosts();
    },[]);

  return (
    <ul className='posts'>
        {postsData.map((item, id) => (
        <React.Fragment key={id}>
        <li>
            <p>{item.category}</p>
            {/* 경로 확인용 */}
            <a href="post-view.html" className="post">
                <article>
                    <img src={item.thumbnail} alt="썸네일" />
                    <div className="contents-wrap">
                        {/* category */}

                        <h3>{item.title}</h3>
                        <dl className="author-wrap">
                            <dt className="a11y-hidden">Author</dt>
                            <dd className="author">
                                <img src={item.profileImg} alt="프로필사진" /> {item.userName}
                            </dd>
                            <dt className="a11y-hidden">Created</dt>
                            <dd className="created">{item.created}</dd>
                        </dl>
                        <p className="post-description">
                            content 추가해야함
                        </p>
                    </div>
                </article>
            </a>
        </li>
        </React.Fragment>
        ))}
    </ul>
  )
}

export default Post

