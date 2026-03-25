'use client';

import Image from 'next/image.js';
import { useState } from 'react';
import ChevronDown from './icons/ChevronDown.jsx';
import ChevronUp from './icons/ChevronUp.jsx';
import IconPlus from './icons/IconPlus.jsx';
import slidesData from './slides';
import './style.css';

const SlideItem = ({ data, handler, index }) => {
	return (
		<li className="slide-list__item">
			<button
				className={`button ${data.isActive ? 'button--open' : ''}`}
				onClick={() => handler(data.id, index)}
			>
				{data.isActive ? (
					<span className="button__text">
						<strong>{data.title}.</strong> {data.desc}
					</span>
				) : (
					<>
						<IconPlus /> <strong>{data.title}</strong>
					</>
				)}
				{/* <IconPlus />
				{data.title} */}
			</button>
		</li>
	);
};

const Slider = () => {
	// console.log(slides);

	const [slides, setSlides] = useState(slidesData);
	const [activeSlide, setActiveSlide] = useState(null);

	const clickHandler = (id, index) => {
		console.log('Click! on ID:', id);
		console.log('Index: ', index);

		setActiveSlide(index);

		setSlides((prev) => {
			return prev.map((slide) => {
				let isActive = false;

				if (slide.id === id) {
					isActive = true;
				}
				return { ...slide, isActive: isActive };
			});
		});
	};

	const sliderMovePrev = () => {
		setSlides((prev) => {
			return prev.map((slide, index) => {
				let isActive = false;

				if (activeSlide - 1 === index) {
					isActive = true;
				}

				return { ...slide, isActive: isActive };
			});
		});
		setActiveSlide((prev) => --prev);
	};

	const sliderMoveNext = () => {
		setSlides((prev) => {
			return prev.map((slide, index) => {
				let isActive = false;

				if (activeSlide + 1 === index) {
					isActive = true;
				}

				return { ...slide, isActive: isActive };
			});
		});
		setActiveSlide((prev) => ++prev);
	};

	console.log('Active slide: ', activeSlide);

	return (
		<div className="slider">
			<div className="controls">
				<div
					className={`controls__arrows ${activeSlide === null && 'controls__arrows--hidden'}`}
				>
					<button
						disabled={activeSlide === 0 ? true : false}
						className="control-order"
						onClick={sliderMovePrev}
					>
						<ChevronUp />
					</button>
					<button
						disabled={
							activeSlide === slides.length - 1 ? true : false
						}
						className="control-order"
						onClick={sliderMoveNext}
					>
						<ChevronDown />
					</button>
				</div>
				<ul className="slide-list">
					{slides.map((slide, index) => (
						<SlideItem
							key={index}
							index={index}
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

			<div className="content">
				<div className="slide-content">
					<Image src="/img/slides/orange.jpg" alt="image" fill />
				</div>
			</div>
		</div>
	);
};

export default Slider;
