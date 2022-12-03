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

export default function DashboardInstructor() {
  return (
    <div className= "MainInstructor"> 
        <div className="metricsInstructor">
              <Card>
                    <h6> Submitted Courses </h6>
                    <h4> 0 </h4>
              </Card>

              <Card>
                    <h6> Active Courses </h6>
                    <h4> 0 </h4>
              </Card>

              <Card>
                    <h6> Earnings </h6>
                    <h4> 0 </h4>
              </Card>

              <Card>
                    <h6> Enrolled Students </h6>
                    <h4> 0 </h4>
              </Card>

              <Card>
                    <h6> Total Courses </h6>
                    <h4> 0 </h4>
              </Card>

              <Card>
                    <h6>  Badges </h6>
                    <h4> 0 </h4>
              </Card>

        </div>
    </div>
  )
}
