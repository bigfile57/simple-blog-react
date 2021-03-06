import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
  dd {
    margin-right: 0.4rem;
    padding: 0.2rem 1.2rem;
    border-radius: calc(var(--border-radius) * 2);
    background: var(--gray-background);
    font-size: 1.2rem;
  }
`;

function Categories({types}) {
  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    // console.log(...types);
    function addCategory(types) {
      console.log(types);
      setCategories(types);
    }
    addCategory(types);
  }, [categories, types]);

  return (
    <CategoryList>
      {categories && categories.map((item, idx) => (
        <React.Fragment key={idx}>
          <dd>
            <li>
              <a href="#">{item}</a>
            </li>
          </dd>
        </React.Fragment>
      ))}
    </CategoryList>
  );
}

export default Categories;
