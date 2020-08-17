import React from 'react';
import themeVar from 'utils/style-variables';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavBar = styled.nav`
	background: ${themeVar.background};
	ul {
		display: flex;
		justify-content: space-around;
		padding: 1em 0;
		li {
			cursor: pointer;
		}
	}

	a {
		color: ${themeVar.links};
	}
`;

const Navigation = () => {
	const config = {
		speed: 300,
	};
	return (
		<NavBar>
			<ul>
				<Link to="About" smooth={true} duration={config.speed}>
					<li>About me</li>
				</Link>
				<Link to="Projects" smooth={true} duration={config.speed}>
					<li>Works</li>
				</Link>
				<Link to="Contact" smooth={true} duration={config.speed}>
					<li>Contact</li>
				</Link>
			</ul>
		</NavBar>
	);
};

export default Navigation;
