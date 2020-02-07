import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 10px;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
`;

class Layout extends Component {
  render() {
    return (
      <Container>
        <Nav>{this.props.nav}</Nav>
        <Main>{this.props.main}</Main>
      </Container>
    );
  }
}

export default Layout;

Layout.displayName = "Layout";
