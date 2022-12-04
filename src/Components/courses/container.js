import React from 'react';
import CourseCard from '../coursecard';
import styled from 'styled-components';

const Content = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export default function Container(props) {
  return (
    <Content>
      {props.coursesList.map((ele) => {
        return (
          <CourseCard
            name={ele.Name}
            category={ele.Category}
            description={ele.Description}
            photo={ele.imageUrl}
            date={ele.Date}
            id={ele._id}
          />
        );
      })}
    </Content>
  );
}
