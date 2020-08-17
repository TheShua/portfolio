import React from 'react';
import styled from 'styled-components';
import themeVar from 'utils/style-variables';
import Header from 'components/widgets/Header';
import Navigation from 'components/widgets/Navigation';
import AboutMe from 'components/categories/AboutMe';
import Projects from 'components/categories/Projects';
import Contact from 'components/categories/Contact';

const Main = styled.main`
	background: ${themeVar.appBackground};
	color: white;
	margin: 0 auto;
	width: 90%;
	min-width: 900px;
`;

const Home = () => {
	return (
		<Main>
			<Navigation />
			<Header />
			<AboutMe />
			<Projects />
			<Contact />
		</Main>
	);
};

export default Home;
