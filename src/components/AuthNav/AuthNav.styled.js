import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  padding: 5px 15px;
  font-weight: 500;
  color: #fff;
  font-size: 18px;

  &:hover {
    color: #fbbd0d;
  }

  &.active {
    color: #fff;
    background: #fbbd0d;
    border-radius: 6px;
  }
`;
