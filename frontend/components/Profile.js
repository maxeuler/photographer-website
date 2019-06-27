import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 10rem 0;
  @media (max-width: 700px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 200px;
    grid-row-gap: 20px;
    margin-top: 0;
    :first-child {
      grid-row: 2;
    }
  }
  .text {
    padding: 3rem 6rem;
    text-align: center;
    height: 100%;
    p {
      font-size: 2rem;
      font-weight: 300;
    }
    h3 {
      font-weight: 300;
      font-size: 4rem;
      margin: 0;
      padding: 0;
    }
    .signature {
      font-size: 3rem;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    }
    @media (max-width: 700px) {
      padding: 1rem;
      p {
        font-size: 1.4rem;
      }
      h3 {
        font-size: 3rem;
      }
      .signature {
        font-size: 2rem;
      }
    }
  }
  .img {
    background-image: url('./static/browngirl.jpeg');
    background-size: cover;
    background-position: center;
    @media (max-width: 700px) {
      background-size: cover;
      background-repeat: no-repeat;
      padding: 0;
      margin: 0;
    }
  }
`;

const Profile = () => (
  <Container>
    <div className="text">
      <h3>Profil</h3>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </p>
      <p>Lorem ipsum dolor sit amet, consetetur</p>
      <p>Lorem,</p>
      <p className="signature">Name</p>
    </div>
    <div className="img" />
  </Container>
);

export default Profile;
