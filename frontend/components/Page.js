import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,*:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #fff;
    color: ${props => props.theme.primary};
  }
`;

const theme = {
  primary: '#A71D18',
  secondary: '#eee',
};

const PageStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <PageStyle>
      <GlobalStyle />
      <Header />
      {props.children}
      <Footer></Footer>
    </PageStyle>
  </ThemeProvider>
);

export default Page;
