import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
	&.obiwan {
		display: none !important;
	}
`;

const Textarea = styled.textarea`
	resize: none;
`;

const Input = ({ label, type, name, placeholder }) => {
	let r = '';

	switch (type) {
		case 'text':
		default:
			r = <InputField type="text" name={name} placeholder={placeholder} />;
			break;

		case 'honey':
			r = <InputField type="checkbox" name={name} className="obiwan" value="1" tabIndex="-1" autoComplete="off" />;
			break;

		case 'area':
			r = <Textarea name={name} placeholder={placeholder}></Textarea>;
			break;
	}

	if (label) {
		r = (
			<React.Fragment>
				<label htmlFor={name}>{label}</label> {r}
			</React.Fragment>
		);
	}

	return <React.Fragment>{r}</React.Fragment>;
};

export default Input;
