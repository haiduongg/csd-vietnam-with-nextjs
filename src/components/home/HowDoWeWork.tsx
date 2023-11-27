import React from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import { ImArrowDown, ImArrowRight } from 'react-icons/im';
import { TiStar } from "react-icons/ti";

const Diagram = () => {
	return (
		<div className='relative flex flex-col items-center text-clrPrimary-800 w-[512px]'>
			<div className='turn-arrow'>
				<div className='absolute h-5 w-24 bg-clrPrimary-800 top-[360px] left-[68px]'></div>
				<div className='absolute h-48 w-5 bg-clrPrimary-800 top-[180px] left-[68px]'></div>
				<div className='absolute h-[21px] w-6 bg-clrPrimary-800 top-[167px] left-[68px]'></div>
				<div className='absolute top-[150px] left-[91px]'>
					<ImArrowRight size={55} />
				</div>
			</div>
			<div className='w-56 h-20 bg-black-600 text-center rounded-full grid place-items-center'>
				<span className='text-base font-bold text-white'>Idea Reception</span>
			</div>
			<ImArrowDown size={55} />
			<div className='w-56 h-20 bg-black-600 text-center grid place-items-center'>
				<span className='text-base font-bold text-white'>
					3D Modeling and Techial Drawings
				</span>
			</div>
			<ImArrowDown size={55} />
			<div className='mt-7 mb-4 w-36 h-36 bg-black-600 text-center grid place-items-center rotate-45 z-50'>
				<span className='text-lg font-bold rotate-[-45deg] text-white'>
					3D Modeling and Techial Drawings
				</span>
			</div>
			{/* frame  */}
			<div className='absolute bottom-[-20px] w-80 h-64 border-dashed border-red-400 border-4'></div>
			<div className='z-40'><ImArrowDown size={55} /></div>
			<div className='w-56 h-20 bg-black-600 text-center grid place-items-center'>
				<span className='text-base font-bold text-white'>Production</span>
			</div>
			<ImArrowDown size={55} />
			<div className='w-56 h-20 bg-black-600 text-center grid place-items-center'>
				<span className='text-base font-bold text-white'>Acceptance Testing</span>
			</div>
		</div>
	);
};

const Detail = (props: { dataProcedure: { id: number, title: string, description: string }[] }) => {
	return (
		<div className='w-[calc(100%-512px)]'>
			<ul>
				{props.dataProcedure?.map((item) => (
					<li
						key={item.id}
						className='mt-10 first:mt-5 flex gap-6 items-center justify-center'
					>
						<p className='uppercase text-center bg-clrPrimary-900 rounded-xl p-3 text-sm text-white'>
							Step <span className='font-bold'>{item.id}</span>
						</p>
						<p className='text-justify rounded-lg border-solid border-2 p-3'>
							{item.description}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};
Detail.propTypes = {
	dataProcedure: PropTypes.array.isRequired,
};

const Procedure = () => {
	const procedures = [
		{
			id: 1,
			title: 'Idea Reception',
			description:
				"We begin by receiving your concept and understanding your vision. Our team collaborates closely with you to grasp your project's objectives and unique requirements.",
		},
		{
			id: 2,
			title: '3D Modeling and Technical Drawings',
			description:
				'Once we have a clear understanding of your idea, our experts proceed to create detailed 3D models and technical drawings. These serve as the foundation for the design and engineering aspects of the project.',
		},
		{
			id: 3,
			title: 'Inspection and Handover',
			description:
				'After the 3D models and technical drawings are complete, we conduct thorough quality checks to ensure that all aspects meet the specified standards. Upon successful validation, we deliver the project to you.',
		},
		{
			id: 4,
			title: 'Production',
			description:
				'Depending on the nature of your project, this step can involve the actual production, fabrication, or realization of the design. We tailor our production processes to align with your specific project requirements and goals.',
		},
		{
			id: 5,
			title: 'Acceptance Testing',
			description:
				"The final phase involves acceptance testing, which is performed based on your project's individual needs and criteria. We work closely with you to conduct the necessary testing and ensure that the end product aligns with your expectations.",
		},
	];
	return (
		<div className='flex justify-start items-start'>
			<Diagram />
			<Detail dataProcedure={procedures} />
		</div>
	);
};

function HowDoWeWork() {
	return (
		<div className='pt-[75px]' id='How Do We Work'>
			<div className='group'>
				<Heading title='How Do We Work' />
				<div className='mt-8 w-full'>
					<Procedure />
				</div>
				<div className='mt-9 text-base text-clrPrimary-900'>
					<div className='inline-block h-[15px] mr-1 text-red-500'><TiStar /></div>
					<p className='inline'>Please note that the last two stages, Production and Acceptance Testing, are flexible and can be adjusted to suit the specific demands and preferences of our clients. Our commitment is to work closely with you throughout the process to achieve the best possible outcome for your project.</p>
				</div>
			</div>
		</div>
	);
}

export default HowDoWeWork;
