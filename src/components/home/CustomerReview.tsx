"use client"
import React from 'react';
import PropTypes from 'prop-types';
import { StaticImageData } from 'next/image';
import Heading from './Heading';
import CustomerReviewCard from './CustomerReviewCard/CustomerReviewCard';
import test from '@/assets/test.jpg';
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


function CustomerReview(props: {}) {
	const reviews = [
		{
			id: 1,
			name: 'bazzyman62',
			avatar: test,
			country: 'Canada',
			rate: 5,
			comment:
				'INCREDIBLE work ethic, design ability and communication. Very proficient i his craft. I took a chance on him knowing he was new on fiverr. It was a great decision. I would highly recommend and will use them for 3 more projects. I trust them fully.',
		},
		{
			id: 2,
			name: 'dhruvalpatel113',
			avatar: test,
			country: 'India',
			rate: 5,
			comment:
				'It was very convenient to work with phong. I would definitely recommend this mans effort to fulfill the requirements and urgency of the projects. I really appreciate the work done. awesome guy to work with.',
		},
		{
			id: 3,
			name: 'bayronalexan157',
			avatar: test,
			country: 'Colombia',
			rate: 5,
			comment:
				'Excellent person to work with very good communication understood the design from isomertric image and was able to make 3 model for fabrication. I very please to work with PHONG highly recommended by me - as and true engineer and look forward to completing many project in the future he is definitely someone to be part of your design team.',
		},
		{
			id: 4,
			name: 'deboudek',
			avatar: test,
			country: 'Germany',
			rate: 5,
			comment:
				'Excellent service, beyond expectations, great results, earlier than the promised date. He has much experience in mechanical design, you need to give him instructions and wait for the result without any more complications. 100% recommended, we definitely will keep working together.',
		},
		{
			id: 5,
			name: 'alfrednorrls365',
			avatar: test,
			country: 'United States',
			rate: 5,
			comment:
				"Absolutetly phenomenal work. Fast, accurate, easy to communicate with. Very respectful and professional. Will use again. Do not hesitate to use him if you are thinking about doing it. You won't regret it. Made revisions without being defensive or complaining.",
		},
		{
			id: 6,
			name: 'kemelkheloulati',
			avatar: test,
			country: 'Algeria',
			rate: 5,
			comment:
				'I recently had the privilege of utilizing the CAD services provided by Phong, and I must say they were truly excoptional. He demonstrated an unparalleled lovel of professionalism and expertise, translating my requirements into precise and detailed CAD designs. Ther attention to detail was remarkabl.',
		},
		{
			id: 7,
			name: 'praxmarket',
			avatar: test,
			country: 'United Kingdom',
			rate: 5,
			comment:
				'I was 50 pleased with the service. I received from Phong. He went above and beyond to help me find the. I perfoct design. I was very impressed with the quality of the product I received. I wil definitely place my next order with Phong.',
		},
		{
			id: 8,
			name: 'jonjapltana',
			avatar: test,
			country: 'United States',
			rate: 5,
			comment:
				'Phamtienphong s a very talented and resourceful individual its always a pleasure working with him. Will continue to work with him in the future.',
		},
		{
			id: 9,
			name: 'amara_vayder',
			avatar: test,
			country: 'United States',
			rate: 5,
			comment:
				'He was such a pleasure to work with. He delivered the work on time. He was very communicative and helpful. He was attentive and patient. He exceeded my expectations. Would definitely work with him again. Fantastic work very detailed.',
		},
		{
			id: 10,
			name: 'the7express',
			avatar: test,
			country: 'United States',
			rate: 5,
			comment:
				"After 3 other sellers couldn't build the train exactly as I wanted, I gave CSD a chance and they were on point with every detail and made the train exactly as real life. Will order from again!",
		},
		{
			id: 11,
			name: 'panther343',
			avatar: test,
			country: 'United States',
			rate: 5,
			comment:
				'An absolutely amazing job. Final rendering came out better than expected. Csd.phongpham pays close attention to detail and s very patient with all your request, would definitely be using him again!',
		},
		{
			id: 12,
			name: 'novoal',
			avatar: test,
			country: 'Germany',
			rate: 5,
			comment:
				"phamtienphong is a mastermind in CAD design for injection molds, seamlessly blending years of experlence into each intricate detail. Their designs aren't just functional; they're optimized masterpieces that simplify the molding process. Throughout our collaboration, communication was top-notch, with every design choice backed by sound rationale. If expertise and precision are what you seek in mold design, look no further than phamtienphong. Their work is the gold standard in the industry. Thank you again!",
		},
		{
			id: 13,
			name: 'theaaronestrada',
			avatar: test,
			country: 'United States',
			rate: 5,
			comment:
				'I am very impressed with the CAD drawing I received. The drawings are clear, accurate, and well- Iabeled. The dimensions are precise, and the overall quality is excellent. I would highly recommend this company to anyone who needs CAD drawings. I especially appreciate the fact that the company was able to accommodate my specific requests. They were very responsive to my questions and concerns, and they were always willing to go the extra mile to make sure that I was happy with the final product. I would definitely use this company again in the future, and I would not hesitate to recommend them to others.',
		},
		{
			id: 14,
			name: 'jemueljeremlah',
			avatar: test,
			country: 'United States',
			rate: 5,
			comment:
				"I Am very very satisfied with the work done for me. He delivered the most excellent diagrams and I explanations of them. He was so thorough and timely he delivered his work on time just like he said he I would. He is one that can bring your imagination to real life and he's the man for any job in this :category, in this field. I highly recommend him!",
		},
	];
	return (
		<div className='pt-[75px]' id='Customer Review'>
			<div className='group'>
				<Heading title='Customer Review' />
				<div className='mt-12'><SliderReview dataSlide={reviews} /></div>
			</div>
		</div >
	);
}

const SliderReview = (props: { dataSlide: { id: number, name: string, avatar: StaticImageData, country: string, rate: number, comment: string }[] }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			spaceBetween={25}
			slidesPerView={2}
			autoplay={{
				delay: 2200,
				disableOnInteraction: false,
			}}
		>
			{props.dataSlide.map((review, index) => (
				<SwiperSlide key={index}>
					<CustomerReviewCard dataCustomer={review} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default CustomerReview;