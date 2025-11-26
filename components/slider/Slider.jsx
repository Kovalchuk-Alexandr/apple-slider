import IconPlus from './icons/IconPlus.jsx';
import slides from './slides';
import './style.css';

const SlideItem = ({ data }) => {
	return (
		<li className="slide-list__item">
			<button className="button">
				<IconPlus />
				{data.title}
			</button>
		</li>
	);
};

const Slider = () => {
	// console.log(slides);
	return (
		<div className="slider">
			<div className="controls">
				<ul className="slide-list">
					{slides.map((slide, index) => (
						<SlideItem key={index} data={slide} />
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
