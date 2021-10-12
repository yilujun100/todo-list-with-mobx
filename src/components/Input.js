import React, { useState } from 'react';

export default function Input(props) {
	const { submitTitle } = props;
	const [inputValue, setInputValue] = useState('');
	const handleInputValueChange = e => {
		setInputValue(e.target.value);
	};
	const handleSubmit = () => {
		submitTitle(inputValue);
		setInputValue('');
	};
	return (
		<div>
			<input type="text" value={inputValue} onChange={handleInputValueChange} />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}
