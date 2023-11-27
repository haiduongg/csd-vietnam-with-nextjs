import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa';

function LastNews() {
	return (
		<div className='pt-[75px]' id='Last News'>
			<div className='group'>
				{/* Heading */}
				<div className='flex justify-between items-center'>
					<div className='flex items-center justify-start gap-3'>
						<Link href={'#Last News'}>
							<h3 className='font-bold text-left uppercase text-3xl'>
								Last News
							</h3>
						</Link>
						<div className='group-hover:w-24 w-12 h-1 bg-black-400 duration-300'></div>
					</div>
					<div>
						<Button>
							<Link href={'/blogs'} className='flex items-center gap-2'>
								<span>View all news</span>
								<FaArrowRight />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LastNews;
