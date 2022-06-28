import React, { useState } from 'react'
import styled from 'styled-components';

// props 가 aside 일때랑 게시물일 때랑 스타일을 다르게 적용해야함 !!!!
const CategoryList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
    dd{
        margin-right: 0.4rem;
        padding: 0.2rem 1.2rem;
        border-radius: calc(var(--border-radius) * 2);
        background: var(--gray-background);
        font-size: 1.2rem;
    }
`
// 컨텐츠 카테고리
// about 카테고리

function Categories({addContent}) {
    const [categories,setCategories] = useState(
            ['Life','Style','Tech','Sport','Photo','Develop','Music']
        )
    function addCategories(addContent) {
        if(!(addContent instanceof String)) {
            return console.log("추가하려는 내용이 문자가 아닙니다.");
        }
        setCategories(addContent , ...categories);
    }    

  return (
        <CategoryList>
            {categories.map((item, idx) => (
                <React.Fragment key={idx}>
                   <dd><li><a href='#'>{item}</a></li></dd>
                </React.Fragment>
            ))}
        </CategoryList>
  )
}

export default Categories