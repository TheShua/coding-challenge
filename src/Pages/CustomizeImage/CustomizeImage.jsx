import React, { useState } from 'react';
import './CustomizeImage.scss';

const CustomizeImage = () => {
	const [url, setUrl] = useState(null);
	const [size, setSize] = useState(null);
	const baseDim = 80;

	const handleUrl = (event) => {
		setUrl(event.target.value);
	};

	const handleSize = (event) => {
		setSize((baseDim * event.target.value) / 2);
	};

	return (
		<main className="customize-image">
			<h1>Customize Image</h1>
			<form>
				<input type="text" name="url" onChange={handleUrl} />
				<input type="range" name="size" onChange={handleSize} min="1" max="10" />
				{url && (
					<p>
						{size} x {size} px
					</p>
				)}
				{url && <img src={url} alt="" className="image" style={{ width: size, height: size }} />}
			</form>
		</main>
	);
};

export default CustomizeImage;
