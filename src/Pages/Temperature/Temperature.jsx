import React, { useState } from 'react';
import './Temperature.scss';

const Temperature = () => {
	const [temperature, setTemperature] = useState(0);
	const [displayMessage, setDisplayMessage] = useState(null);
	const [classText, setClassText] = useState(null);

	const handleTemperature = (event) => {
		setTemperature(event.target.value);

		if (temperature < 10) {
			setDisplayMessage("It's cold ❄️");
			setClassText('cold');
		} else if (temperature >= 10 && temperature <= 30) {
			setDisplayMessage("It's nice 🌼");
			setClassText(null);
		} else {
			setDisplayMessage("It's warm ☀️");
			setClassText('warm');
		}
	};

	return (
		<main class="temperature">
			<h1>Temperature</h1>
			<form>
				<input type="number" name="temperature" onChange={handleTemperature} placeholder="Temperature in °C" />
				{displayMessage && <p className={classText}>{displayMessage}</p>}
			</form>
		</main>
	);
};

export default Temperature;
