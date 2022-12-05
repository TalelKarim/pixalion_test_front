import React from 'react';
import styled from 'styled-components';
import Cards from '../../Cards';
import { useState } from 'react';

const Content = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export default function Container(props) {
  return (
    <Content>
      {props.instructorsList.map((ele) => {
        return (
          <Cards
            img={ele.imageUrl}
            name={ele.firstName + ' ' + ele.lastName}
            domain={ele.speciality}
            mail={ele.mail}
          />
        );
      })}
    </Content>
  );
}
