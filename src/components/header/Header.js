import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import SearchForm from '../../containers/SearchFormContainer'
import ToggleMenuButton from './ToggleMenuButton'

const sidebarBreakpoint = 900
const topbarHeight = 60
const sidebarWidth = 280

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: ${topbarHeight}px;
  z-index: 10;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  @media screen and (min-width: ${sidebarBreakpoint}px) {
    left: ${sidebarWidth}px;
  }
  @media screen and (max-width: ${sidebarBreakpoint - 1}px) {
    padding-left: 60px;
  }
  .container {
    height: ${topbarHeight}px;
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: ${sidebarBreakpoint}px) {
    padding: 0;
  }
`

const Row = styled.div`
  display: flex;
  width: 100%;
  .col-1 {
    width: 200px;
    display: flex;
    align-items: center;
  }
  .col-2 {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
`

const LinkLogo = styled(Link)`
  display: block;
  img {
    display: block;
  }
  @media (max-width: 500px) {
    display: none;
  }
`

const Header = ({ searchText, actions, location }) => (
  <Div>
    <ToggleMenuButton actions={actions} />
    <div className="container">
      <Row className="header-row">
        <div className="col-1">
          <LinkLogo to={'/'}>
            <img src="/svg/bestofjs.svg" width="160" alt="bestof.js.org" />
          </LinkLogo>
        </div>
        <div className="col-2">
          <SearchForm searchText={searchText} location={location} />
        </div>
      </Row>
    </div>
  </Div>
)

export default Header
