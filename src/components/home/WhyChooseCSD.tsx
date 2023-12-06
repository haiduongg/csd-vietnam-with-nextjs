import React from 'react';
import Image, { StaticImageData } from 'next/image';
import PropTypes from 'prop-types';
import Heading from './Heading';
import experience from '@/assets/gif/best-customer-experience.gif';
import service from '@/assets/gif/customer-service.gif';
import premium from '@/assets/gif/premium.gif';
import innovation from '@/assets/gif/innovation.gif';
import learning from '@/assets/gif/learning.gif';
import delivery from '@/assets/gif/delivery-truck.gif';
import satisfaction from '@/assets/gif/customer-satisfaction.gif';
import dollar from '@/assets/gif/dollar.gif';

const ReasonCard = (props: { data: { icon: StaticImageData, title: string, description: string } }) => {
	return (
		<div className='p-4 border-[1px] dark:border-gray-500 border-solid border-gray-300 rounded-xl hover:border-text dark:hover:border-primary hover:shadow-xl duration-300'>
			<Image
				src={props.data.icon}
				alt={props.data.title}
				width={70}
				height={70}
				className='mx-auto my-6'
			/>
			<p className='text-center font-bold'>{props.data.title}</p>
			<p className='mt-2 text-sm leading-normal dark:group-hover:text-primary-900 opacity-80 text-center'>
				{props.data.description}
			</p>
		</div>
	);
};
ReasonCard.propTypes = {
	data: PropTypes.object.isRequired,
};

function WhyChooseCSD() {
	const reasons = [
		{
			id: 1,
			title: 'Experience and Expertise',
			description:
				"CADSQUAD boasts a wealth of experience in 3D modeling and rendering, particularly in the field of mechanical and 3D artist. Our team's deep expertise ensures high-quality results.",
			icon: experience,
		},
		{
			id: 2,
			title: 'Comprehensive Services',
			description:
				'We offer a wide range of services, including 3D modeling, 2D drawings, steel structure, landscape design, simulation, rendering, 3D printing, portraits, caricatures, and logo design. Our versatility caters to various client needs.',
			icon: service,
		},
		{
			id: 3,
			title: 'Quality Assurance',
			description:
				'CADSQUAD is committed to delivering top-notch results with a focus on precision and attention to detail. Our quality assurance processes guarantee excellence in every project we undertake',
			icon: premium,
		},
		{
			id: 4,
			title: 'Creative Solutions',
			description:
				'Our team of 3D artists is dedicated to bringing your ideas to life with creativity and innovation, turning concepts into stunning visual representations that make a lasting impact.',
			icon: innovation,
		},
		{
			id: 5,
			title: 'Cutting-Edge Technology',
			description:
				'We leverage the latest software and hardware tools to stay at the forefront of the industry, ensuring efficiency and accuracy in all our projects.',
			icon: learning,
		},
		{
			id: 6,
			title: 'Timely Delivery',
			description:
				'CADSQUAD understands the importance of deadlines. We are dedicated to delivering projects on time, helping you stay on track with your project schedules.',
			icon: delivery,
		},
		{
			id: 7,
			title: 'Client-Centric Approach',
			description:
				'We prioritize open communication with our clients, ensuring that your vision and feedback are incorporated into the design process to achieve your desired outcomes.',
			icon: satisfaction,
		},
		{
			id: 8,
			title: 'Competitive Pricing',
			description:
				'Despite our high-quality services, CADSQUAD offers competitive pricing options, making professional 3D modeling, rendering, and design services accessible to a broad range of clients.',
			icon: dollar,
		},
	];
	return (
		<div className='pt-[75px]' id='Why choose CSD'>
			<div className='group'>
				<Heading title='Why choose ' highlight='CSD' />
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:mx-0 px-8 gap-7 mt-10'>
					{reasons.map((reason) => (
						<ReasonCard key={reason.id} data={reason} />
					))}
				</div>
			</div>
		</div>
	);
}

export default WhyChooseCSD;
