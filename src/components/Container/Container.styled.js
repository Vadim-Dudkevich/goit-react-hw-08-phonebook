import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 460px;
  margin: 0 auto;
  padding: 0 15px;
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const Title = styled.h2`
  color: #2d2c2e;
  margin-bottom: 20px;
`;
