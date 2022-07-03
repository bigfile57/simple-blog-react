import axios from "axios";

const getBlogDatas = async () => {
  const url = "/data.json";
  // /public 은 기본경로로 설정돼있음
  const result = await axios.get(url);

  const blogData = await [result.data.blog].map((data) => ({
    mainTitle: `${data.mainTitle}`,
    subTitle: `${data.subTitle}`,
    description: `${data.description}`,
  }));

  const postDatas = await result.data.posts.map((data) => ({
    id: `${data.id}`,
    mainBg: `${data.mainBg}`,
    category: `${data.category}`,
    title: `${data.title}`,
    thumbnail: `${data.thumbnail}`,
    profileImg: `${data.profileImg}`,
    userName: `${data.userName}`,
    created: `${data.created}`,
    contents: data.contents,
  }));

  const userData = await result.data.users.map((data) =>
    // console.log(data.category),
    ({
      id: `${data.id}`,
      category: data.category,
      profileImg: `${data.profileImg}`,
      name: `${data.name}`,
      email: `${data.email}`,
      sns: `${data.sns}`,
      userInfo: `${data.userInfo}`,
    })
  );
  console.log(blogData);
  console.log(userData.filter(x => x.id.includes(1)));
    console.log(postDatas);
    return {blogData,userData,postDatas}

};

export default getBlogDatas;
