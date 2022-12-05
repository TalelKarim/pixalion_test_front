import React from 'react';
import Nav from '../../Components/Nav';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default function HomeStudent() {
  return (
    <Container>
      <Nav />
      <Outlet className="outlet" />
    </Container>
  );
}
