import React from 'react'
import Nav from '../../Components/Nav'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

export default function HomeInstructor() {
  return (
    <Container>
        <Nav />
        <Outlet />
    </Container> 
  )
}
