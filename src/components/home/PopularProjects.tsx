'use client';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import Image from 'next/image';

export default function PopularProjects(props: {
	data: { id: number; title: string; src: string }[];
}) {
	return (
		<div className='pt-[75px]' id='Popular Projects'>
			<div className='group'>
				<Heading title='Popular Projects' />
				<div className='grid grid-cols-4 gap-6 mt-8'>
					{props.data &&
						props.data.map((item, index) => {
							return (
								<div
									key={index}
									className='relative min-h-[155px] rounded-xl overflow-hidden'
									title={item.title}
								>
									<Image
										src={item.src}
										alt={`image ${index}`}
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										loading='lazy'
										className='object-cover rounded-xl hover:scale-110 hover:opacity-70 duration-300'
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
