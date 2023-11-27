import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

Heading.propTypes = {
	title: PropTypes.string.isRequired
};

function Heading(props: { title: string, highlight?: string }) {
	return (
		<div className='flex flex-col items-center justify-center py-2'>
			<Link href={`#${props.title + (props.highlight ?? '')}`}><h3 className='font-bold text-center uppercase pb-2 text-3xl'><span>{props.title}</span><span className='text-clrPrimary-900'>{props.highlight ?? null}</span></h3></Link>
			<div className='w-16 group-hover:w-32 duration-300 h-1 bg-clrPrimary-900 rounded-full opacity-50'></div>
		</div>
	);
}

export default Heading;