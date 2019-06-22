import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faFacebookSquare,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Logo } from './Header';

const StyledFooter = styled.div`
	height: 150px;
	margin-top: 10rem;
	background: ${props => props.theme.primary};
	display: grid;
	grid-template-columns: repeat(3, 33%);
	color: #fff;
	@media (max-width: 700px) {
		grid-template-columns: 20% 80%;
		padding-bottom: 2rem;
	}
	.logo {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		h3 {
			font-size: 3rem;
			font-weight: 300;
			margin-left: 2rem;
		}
		@media (max-width: 700px) {
			h3 {
				display: none;
			}
		}
	}
	.links {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, auto);
		text-align: center;
		margin: 1rem 0;
		padding: 1rem;
		align-items: center;
		@media (max-width: 700px) {
			grid-template-columns: repeat(3, auto);
		}
		a {
			font-size: 1.5rem;
			text-align: center;
			color: #fff;
			text-decoration: none;
		}
	}
	.follow {
		display: flex;
		align-items: center;
		justify-content: center;
		a {
			color: #fff;
			padding: 2rem;
		}
		@media (max-width: 700px) {
			justify-content: space-around;
			width: 100vw;
			align-items: center;
			a {
				margin: 0;
				padding: 0;
				font-size: 1rem;
				size: '4x';
			}
		}
	}
`;

const Footer = props => (
	<StyledFooter>
		<div className="logo">
			<Logo>
				<img src="static/titleIcon.png" alt="" />
			</Logo>
			<h3>sndrnhm fotografie</h3>
		</div>
		<div className="links">
			<a href="">Datenschutz</a>
			<a href="">Impressum</a>
			<a href="">Was weiß ich</a>
		</div>
		<div className="follow">
			<a href="">
				<FontAwesomeIcon icon={faInstagram} size="5x" />
			</a>
			<a href="">
				<FontAwesomeIcon icon={faFacebookSquare} size="5x" />
			</a>
			<a href="">
				<FontAwesomeIcon icon={faTwitter} size="5x" />
			</a>
		</div>
	</StyledFooter>
);

export default Footer;
