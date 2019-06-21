import React from 'react';
import styled from 'styled-components';

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
	button {
		margin: 0 auto;
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
	}
	@media (max-width: 700px) {
		height: 40vh;
		button {
			font-size: 2rem;
			opacity: 0.8;
		}
	}
`;

const Heading = styled.h3`
	font-size: 10rem;
	font-weight: 300;
	text-align: center;
	margin: 2.5rem 0;
	margin-bottom: 0;
	text-transform: uppercase;
	@media (max-width: 1200px) {
		font-size: 7.5rem;
	}
	@media (max-width: 900px) {
		font-size: 4rem;
	}
`;

const Landing = props => (
	<>
		<LandingImage>
			<button>Entdecken</button>
		</LandingImage>
		<Heading>sndrnhm fotografie</Heading>
		{/* <Heading>Fotos mit Herz</Heading> */}
	</>
);

export default Landing;
