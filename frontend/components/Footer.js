import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faFacebook,
	faFacebookF,
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
	}
	.links {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, auto);
		text-align: center;
		margin: 1rem 0;
		padding: 1rem;
		align-items: center;
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
		<div className="links">
			<a href="">Datenschutz</a>
			<a href="">Impressum</a>
			<a href="">Was weiß ich</a>
		</div>
	</StyledFooter>
);

export default Footer;
