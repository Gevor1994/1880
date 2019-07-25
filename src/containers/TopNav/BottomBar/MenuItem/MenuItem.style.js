import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkWrap = (styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  a.activeLink {
    color: white;
  }
  a: hover{
    color:white;
  }
`);

export const CNavLink = (styled(NavLink)` 
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 0;
  height: 100%;
  
  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.15em;
  color: #5F5F5F;


  &:visited {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
    color: white;
    opacity: 1;

  }
`);
