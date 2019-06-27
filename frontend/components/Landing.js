import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Footer from './Footer';

const LandingPage = styled.div`
  @media (max-width: 700px) {
    height: 100vh;
  }
`;

const LandingImage = styled.div`
  width: 100%;
  height: 70vh;
  padding: 0;
  margin: 0;
  background-image: url('./static/girl.jpg'); /* https://www.pexels.com/photo/woman-holding-black-camera-1854897/ */
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    height: 50vh;
    a {
      font-size: 2rem;
      opacity: 0.8;
      display: none;
    }
  }
`;

const StyledLink = styled.a`
  margin: 0 auto;
  text-decoration: none;
  background: none;
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
  border: 2px solid #fff;
  padding: 1rem 2rem;
  border-radius: 3rem;
  opacity: 0.5;
  cursor: pointer;
  outline: none;
  :hover,
  :active {
    opacity: 1;
  }
  @media (max-width: 700px) {
    font-size: 2rem;
    opacity: 0.8;
    display: none;
  }
`;

const MobileLink = styled.a`
  margin: 2rem auto;
  display: block;
  width: 40%;
  text-align: center;
  padding: 1rem 2rem;
  text-decoration: none;
  background: none;
  font-size: 2rem;
  font-weight: 300;
  color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 3rem;
  outline: none;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const Heading = styled.h3`
  font-size: 10rem;
  font-weight: 300;
  text-align: center;
  margin: 2.5rem 0;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    font-size: 7.5rem;
  }
  @media (max-width: 900px) {
    font-size: 4rem;
    margin-bottom: 0;
  }
`;

export const Inner = styled.div`
  max-width: 1300px;
  padding: 0 2rem;
  margin: 0 auto;
  @media (max-width: 700px) {
    padding: 0;
    .hr {
      display: none;
    }
    .second_heading {
      display: none;
    }
  }
`;

const Landing = props => (
  <>
    <LandingPage>
      <LandingImage>
        <StyledLink href="#profile_section">Entdecken</StyledLink>
      </LandingImage>
      <Inner>
        <Heading>der fotograf</Heading>
        <br />
        <hr className="hr" />
        <br />
        <Heading id="profile_section" className="second_heading">
          mein eigener slogan
        </Heading>
        <MobileLink href="#profile">Entdecken</MobileLink>
      </Inner>
    </LandingPage>
    <div id="profile">
      <Profile />
    </div>
    {/* <Footer /> */}
  </>
);

export default Landing;
