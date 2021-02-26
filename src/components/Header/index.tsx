import React from "react";
import styled from "styled-components";
import LanguageSelector from "./LanguageSelector";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const Title = styled.h1`
  margin: 0;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>TODOS</Title>
      <LanguageSelector />
    </HeaderWrapper>
  );
}

export default Header;
