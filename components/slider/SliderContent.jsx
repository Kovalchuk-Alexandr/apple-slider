import { AnimatePresence } from 'framer-motion';
import Image from 'next/image.js';
import FadeIn from '../Fadein.jsx';

const SliderContent = ({slides, activeSlide}) => {
	return (
		<AnimatePresence mode="wait" initial={true}>
			<FadeIn key={activeSlide}>
				<div className="slide-content">
					{slides[activeSlide]['content'] && (
						<video muted autoPlay className="video-cover">
							<source
								src={`/img/slides/${slides[activeSlide]['content']['url']}`}
								type="video/mp4"
							/>
						</video>
					)}
					{!slides[activeSlide]['content'] && (
						<Image
							src={`/img/slides/${slides[activeSlide]['img']}`}
							className="object-cover"
							alt="image"
							fill
							priority
						/>
					)}
				</div>
			</FadeIn>
		</AnimatePresence>
	);
};

export default SliderContent;
