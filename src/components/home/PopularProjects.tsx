"use client"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import Image from 'next/image';

const ProjectList = (props: { projectsList: { id: number, title: string, src: string }[] }) => {
	return (
		<div className='grid grid-cols-4 gap-6 mt-8'>
			{props.projectsList && props.projectsList.map((item, index) => {
				return (
					<div key={index} className='relative min-h-[155px] rounded-xl overflow-hidden' title={item.title}>
						<Image src={item.src} alt={`image ${index}`} fill loading='lazy' className='object-cover rounded-xl hover:scale-110 hover:opacity-70 duration-300' />
					</div>
				)
			})}
		</div>
	)
}
ProjectList.propTypes = {
	projectsList: PropTypes.array.isRequired
}

function PopularProjects() {
	const [dataProjects, setDataProjects] = useState([]);
	const baseUrl = 'https://api-csd-vietnam.onrender.com/projects';
	useEffect(() => {
		fetch(baseUrl)
			.then(response => response.json())
			.then(data => setDataProjects(data))
	}, [])

	return (
		<div className='pt-[75px]' id='Popular Projects'>
			<div className='group'>
				<Heading title='Popular Projects' />
				<ProjectList projectsList={dataProjects} />
			</div>
		</div >
	);
}

export default PopularProjects;