"use client"
import React from 'react';
import PropTypes from 'prop-types';
import Image, { StaticImageData } from 'next/image';
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SliderImage.propTypes = {
	imageData: PropTypes.array.isRequired
};
function SliderImage(props: { imageData: Array<StaticImageData> }) {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			spaceBetween={25}
			slidesPerView={1}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
		>
			{props.imageData.map((image, index) => (
				<SwiperSlide key={index}>
					<Image src={image} alt={`image ${index}`} width={500} height={500} className="w-full h-auto" />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default SliderImage;