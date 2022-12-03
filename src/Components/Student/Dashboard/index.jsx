import React from 'react'
import './style.css'
import styled from 'styled-components'


const Card = styled.div`
  height: 150px;
  width: 250px;
  border-radius: 10px;
  background-color: #363537;
  color: #fff;
  margin-left:50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 25px;
  transition: 0.7s ease;
  &:hover{
    transform: scale(1.1);
  }
`

export default function Dashboard() {
  return (
    <div className= "MainI"> 
        <div className="metrics">
              <Card>
                    <h6> Enrolled Courses </h6>
                    <h4> 0 </h4>
              </Card>

              <Card>
                    <h6> Active Courses </h6>
                    <h4> 0 </h4>
              </Card>

              <Card>
                    <h6> Completed Courses </h6>
                    <h4> 0 </h4>
              </Card>

              <Card>
                    <h6> Earned Badges </h6>
                    <h4> 0 </h4>
              </Card>

              <Card>
                    <h6> Total Courses </h6>
                    <h4> 0 </h4>
              </Card>

              <Card>
                    <h6> Enrolled Courses </h6>
                    <h4> 0 </h4>
              </Card>

        </div>
    </div>
  )
}
