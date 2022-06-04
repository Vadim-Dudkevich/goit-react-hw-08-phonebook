import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: #fff;
  font-size: 18px;

  &:hover {
    color: #fbbd0d;
  }

  &.active {
    color: #fbbd0d;
  }
`;
