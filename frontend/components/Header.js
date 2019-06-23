import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.header`
	height: 11vh;
	display: flex;
	justify-content: space-between;
	background: #fff;
`;

const Nav = styled.nav`
	margin: 0;
	padding: 0;
	display: flex;
	justify-self: end;
	align-items: center;
	a {
		font-size: 2rem;
		font-weight: 300;
		text-decoration: none;
		padding: 1rem 3rem;
		color: ${props => props.theme.primary};
		:hover,
		:active {
			font-style: italic;
		}
		@media (max-width: 700px) {
			padding: 1rem 1rem;
			font-size: 1.7rem;
		}
	}
`;

export const Logo = styled.div`
	height: 10rem;
	margin-left: 2rem;
	cursor: pointer;
	img {
		padding: 1rem;
		height: 100%;
	}
	@media (max-width: 700px) {
		margin-left: 0;
		height: 70px;
	}
`;

const Header = props => (
	<StyledHeader>
		<Logo>
			<Link href="/">
				<img src="static/titleIcon.png" alt="" />
			</Link>
		</Logo>
		<Nav>
			<Link href="/portfolio">
				<a>Portfolio</a>
			</Link>
			<a href="">Kontakt</a>
		</Nav>
	</StyledHeader>
);

export default Header;
