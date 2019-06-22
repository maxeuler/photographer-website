import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
	height: 200px;
	margin-top: 10rem;
	background: ${props => props.theme.primary};
`;

const Logo = styled.div`
	.img {
		background-image: url('./static/titleIcon.png');
	}
`;

const Footer = props => (
	<StyledFooter>
		<Logo className="logo">
			<div className="img" />
		</Logo>
		<div className="links" />
		<div className="follow" />
	</StyledFooter>
);

export default Footer;
