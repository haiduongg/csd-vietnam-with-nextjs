import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ui/button';
import P061 from '@/assets/img/hero/FIVERR.P082-000-FA-000_White.png';
import P066 from '@/assets/img/hero/FIVERR.P066-000-FA-000_White.png';
import P082 from '@/assets/img/hero/FIVERR.P082-000-FA-000_White.png';
import P128 from '@/assets/img/hero/FIVERR.P128-000-FA-001_White.png';
import P135 from '@/assets/img/hero/FIVERR.P135-000-FA-001_White.png';
import HM from '@/assets/img/hero/HM_White.png';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
	const images = [P061, P066, P082, P128, P135, HM];
	return (
		<div className='flex items-start justify-between'>
			<div className='mt-[30px] w-full text-center lg:text-left flex flex-col items-center justify-center lg:items-start lg:justify-between'>
				<h2 className='font-semibold'>Welcome here</h2>
				<h1 className='font-bold mt-2 text-clrPrimary-900 dark:text-clrPrimary-700'>
					We are CSD Vietnam
				</h1>
				<ul className='m-0 mx-10 list-disc'>
					<li className='my-4'>
						<h4>Professional CAD Services</h4>
					</li>
					<li className='my-4'>
						<h4>Unique and creative</h4>
					</li>
					<li className='my-4'>
						<h4>Reaching the world</h4>
					</li>
				</ul>
				<div className='mt-3'>
					<Link href={'https://facebook.com/CSD.Vie'} target='_blank'>
						<Button className='uppercase rounded-xl text-lg bg-clrPrimary-900 hover:bg-clrPrimary-800' size={'lg'}>
							Contact
						</Button>
					</Link>
				</div>
			</div>
			<div>
				<Image src={P061} alt='banner' width={800} />
			</div>
		</div>
	);
}

export default Hero;
