import React from 'react';
import './style.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

export default function DashboardInstructor() {
  return (
    <div className="MainInstructor">
      <div className="titleDashboard">
        <FontAwesomeIcon icon={faBars} className="dashicon" />
        <h2> Dashboard</h2>
      </div>
      <div className="metricsInstructor">
        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faFloppyDisk} className="dashboardicon" />
          </div>
          <h6> Submitted Courses </h6>
        </Card>

        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faChartLine} className="dashboardicon" />
          </div>{' '}
          <h6> Active Courses </h6>
        </Card>

        <Card>
          <div className="icon">
            <h2> 0 $ </h2>
            <FontAwesomeIcon icon={faMoneyBill} className="dashboardicon" />
          </div>
          <h6> Earnings </h6>
        </Card>

        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faGraduationCap} className="dashboardicon" />
          </div>
          <h6> Enrolled Students </h6>
        </Card>

        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faBook} className="dashboardicon" />
          </div>{' '}
          <h6> Total Courses </h6>
        </Card>

        <Card>
          <div className="icon">
            <h2> 0 </h2>
            <FontAwesomeIcon icon={faAward} className="dashboardicon" />
          </div>{' '}
          <h6> Badges </h6>
        </Card>
      </div>
    </div>
  );
}
