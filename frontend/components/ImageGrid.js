import React from 'react';
import styled from 'styled-components';
import { Inner } from './Landing';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  flex-wrap: wrap;
  max-height: 900px;
  max-width: 1200px;
  margin: 10rem auto;
  background: ${props => props.theme.primary};
  div {
    width: 25%;
    height: 300px;
  }
  @media (max-width: 900px) {
    max-height: 1800px;
    flex-flow: wrap;
    div {
      width: 50%;
    }
    .text {
      padding: 4rem;
    }
  }
  @media (max-width: 700px) {
    max-height: none;
    background: none;
    .text {
      display: none;
    }
    div {
      height: 600px;
      width: 100%;
    }
  }

  .text {
    color: #fff;
    padding: 2rem;
    font-size: 1.5rem;
    font-weight: 300;
    h3 {
      font-size: 2.5rem;
      font-weight: 300;
    }
  }
  .i11 {
    background-image: url('./static/grid/1_1.jpg');
    background-size: cover;
    background-position: center;
  }
  .i13 {
    background-image: url('./static/grid/1_3.jpg');
    background-size: cover;
    background-position: center;
  }
  .i22 {
    background-image: url('./static/grid/2_2.jpg');
    background-size: cover;
    background-position: center;
  }
  .i24 {
    background-image: url('./static/grid/2_4.jpg');
    background-size: cover;
    background-position: center;
  }
  .i31 {
    background-image: url('./static/grid/3_1.jpg');
    background-size: cover;
    background-position: center;
  }
  .i33 {
    background-image: url('./static/grid/3_2.jpg');
    background-size: cover;
    background-position: center;
  }
`;

const ImageGrid = () => (
  <Inner>
    <Grid>
      <div className="i11" />
      <div className="1_2 text">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
          modi id tenetur quam asperiores quasi unde iste, atque temporibus
          magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
        </p>
      </div>
      <div className="i13" />
      <div className="1_4 text">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
          modi id tenetur quam asperiores quasi unde iste, atque temporibus
          magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
        </p>
      </div>
      <div className="i22 row2" />
      <div className="2_1 text row2">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
          modi id tenetur quam asperiores quasi unde iste, atque temporibus
          magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
        </p>
      </div>
      <div className="i24 row2" />
      <div className="2_3 text row2">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
          modi id tenetur quam asperiores quasi unde iste, atque temporibus
          magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
        </p>
      </div>
      <div className="i31" />
      <div className="3_2 text">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
          modi id tenetur quam asperiores quasi unde iste, atque temporibus
          magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
        </p>
      </div>
      <div className="i33" />
      <div className="3_4 text">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
          modi id tenetur quam asperiores quasi unde iste, atque temporibus
          magni officiis fugit impedit incidunt quas? Ex fugiat aliquid non!
        </p>
      </div>
    </Grid>
  </Inner>
);

export default ImageGrid;
