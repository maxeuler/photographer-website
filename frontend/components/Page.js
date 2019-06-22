import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

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
	secondary: '#eee'
};

const Page = props => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<Header />
			{props.children}
			<Footer />
		</>
	</ThemeProvider>
);

export default Page;
