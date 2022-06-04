import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 460px;
  background: #2d2c2e;
  border-radius: 0 0 6px 6px;
  padding: 10px 20px;
  margin: 0 auto 30px auto;
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;
