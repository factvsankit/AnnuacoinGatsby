import React from 'react';
import Link from 'gatsby-link';
import css from 'styled-components';

import Logo from '../../pages/assets/images/logo.png';

console.log(Logo);

import Container from "../Container/";

const HeaderWrapper = css.div`

  background-color: 'transparent';
  padding-top: 50px;
  position: absolute;
  z-index:2;
  right: 0;
  left: 0;
  top: 0;

`;

const MyTableWrapper = css.div`

  display: table;
  width: 100%;
  height: 100%;

`;

const TableCellWrapper = css.div`

  display: table-cell;
  vertical-align: middle;
  
`;

//const headerLogo = css.

const Header = props => (
  <div>
    <HeaderWrapper>
    <Container>
    <MyTableWrapper>
    <TableCellWrapper className="Logo">
        <Link to="/">
          <img src={`${Logo}`}/>
        </Link>
    </TableCellWrapper>
    <TableCellWrapper className="myNav">
    <ul>
    <li>
    <Link to="/"> Home </Link>
    </li>
    <li>
    <Link to="/"> About Us </Link>
    </li>
    <li>
    <Link to="/"> Services </Link>
    </li>
    </ul>
    </TableCellWrapper>
    <TableCellWrapper className="ApplyNow">
    <Link to="/">Apply Now</Link>
    </TableCellWrapper>
      </MyTableWrapper>
      </Container>
    </HeaderWrapper>
  </div>
)

export default Header
