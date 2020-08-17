import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';

const Section = styled.section`
	height: 500px;
`;

// Will be imported as a component
const Project = styled.article``;
const FakeProjects = [0, 0, 0, 0];
const Projects = () => {
	return (
		<Section>
			<Element name="Projects">
				<h3>Projects</h3>
				{FakeProjects.map((prj, i) => (
					<Project key={i} data={prj} />
				))}
			</Element>
		</Section>
	);
};

export default Projects;
