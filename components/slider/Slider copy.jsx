'use client';

import { useState } from 'react';
import IconPlus from './icons/IconPlus.jsx';
import slidesData from './slides';
import './style.css';

const SlideItem = ({ data, handler }) => {
	return (
		<li className="slide-list__item">
			<button className="button" onClick={handler}>
				<IconPlus />
				{data.title}
			</button>
		</li>
	);
};

const Slider = () => {
	// console.log(slides);

	const [slides, setSlides] = useState(slidesData);

	const clickHandler = () => {
		console.log('Click!');
	};

	return (
		<div className="slider">
			<div className="controls">
				<ul className="slide-list">
					{slides.map((slide, index) => (
						<SlideItem
							key={index}
							data={slide}
							handler={clickHandler}
						/>
					))}

					{/* <li className="slide-list__item">
						<button className="button">Colors</button>
					</li>
					<li className="slide-list__item">
						<button className="button">Aluminum unibody</button>
					</li> */}
				</ul>
			</div>
		</div>
	);
};

export default Slider;
