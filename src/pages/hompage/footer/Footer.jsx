import React, {useEffect, useState} from 'react'
import axios from 'axios'
function Footer() {
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
    <div>
        Footer
        <button>클릭</button>
    </div>
  )
}

export default Footer