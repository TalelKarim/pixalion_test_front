import React from 'react';
import styled from 'styled-components';
import errorImage from '../../assets/error.png';
import colors from '../../utils/style/colors';

const ErrorContainer = styled.div`
  background-color: #f9f9fc;
  width: 90%;
  height: 600px;
  margin-left: 51px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
const Title = styled.h1`
  font-weight: 300;
  color: ${colors.secondary};
`;

const ErrorImage = styled.img`
  width: 600px;
  height: 600px;
`;

const Subtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`;

export default function Error() {
  return (
    <ErrorContainer>
      <Title>Oups...</Title>
      <ErrorImage src={errorImage} alt="image d'erreur " />
      <Subtitle>Il semblerait qu'il y ait un problème</Subtitle>
    </ErrorContainer>
  );
}
