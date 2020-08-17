import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import Input from 'components/helpers/Input';

const Section = styled.section`
	height: 500px;

	form {
		/* background: white; */
	}
`;

const Contact = () => {
	return (
		<Section>
			<Element name="Contact">
				<h3>Contact</h3>
				<form method="post">
					<Input label="Your name" type="text" name="name" placeholder="Your name..." />
					<Input label="Your mail" type="text" name="mail" placeholder="Your mail..." />
					<Input label="Your message" type="area" name="message" placeholder="Enter your message here..." />
					<Input type="honey" name="obiwan" />
					<button>Send !</button>
				</form>
			</Element>
		</Section>
	);
};

export default Contact;
