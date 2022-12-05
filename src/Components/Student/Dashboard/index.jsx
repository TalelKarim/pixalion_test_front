import React from 'react';
import './style.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  height: 150px;
  width: 250px;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  box-shadow: 0 5px 25px rgba(1 1 1/ 15%);
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 25px;
  transition: 0.7s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Dashboard() {
  return (
    <div className="Main">
      <div className="titleDashboard">
        <FontAwesomeIcon icon={faBars} className="dashicon" />
        <h2> Dashboard</h2>
      </div>

      <div className="metrics">
        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faBook} className="dashboardicon" />
          </div>
          <h6> Enrolled Courses </h6>
        </Card>

        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faChartLine} className="dashboardicon" />
          </div>
          <h6> Active Courses </h6>
        </Card>

        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faCheck} className="dashboardicon" />
          </div>
          <h6> Completed Courses </h6>
        </Card>

        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faAward} className="dashboardicon" />
          </div>
          <h6> Earned Badges </h6>
        </Card>

        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faBookOpen} className="dashboardicon" />
          </div>
          <h6> Total Courses </h6>
        </Card>

        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faStar} className="dashboardicon" />
          </div>
          <h6> Instructors Reviews </h6>
        </Card>
      </div>
    </div>
  );
}
