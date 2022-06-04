import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 350px;
  margin: 20px auto;
  padding: 20px;

  color: #fff;

  background-color: #2d2c2e;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 0 rgb(37 38 50 / 70%);

  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
`;
