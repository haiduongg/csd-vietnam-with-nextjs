"use client"
import React from 'react';
import { Button } from '../../ui/button';
import P061 from '@/assets/img/hero/FIVERR.P082-000-FA-000_White.png';
import P066 from '@/assets/img/hero/FIVERR.P066-000-FA-000_White.png';
import P082 from '@/assets/img/hero/FIVERR.P082-000-FA-000_White.png';
import P128 from '@/assets/img/hero/FIVERR.P128-000-FA-001_White.png';
import P135 from '@/assets/img/hero/FIVERR.P135-000-FA-001_White.png';
import HM from '@/assets/img/hero/HM_White.png';
import darkP061 from '@/assets/img/hero/FIVERR.P082-000-FA-000_Dark.png';
import darkP066 from '@/assets/img/hero/FIVERR.P066-000-FA-000_Dark.png';
import darkP082 from '@/assets/img/hero/FIVERR.P082-000-FA-000_Dark.png';
import darkP128 from '@/assets/img/hero/FIVERR.P128-000-FA-001_Dark.png';
import darkP135 from '@/assets/img/hero/FIVERR.P135-000-FA-001_Dark.png';
import darkHM from '@/assets/img/hero/HM_Dark.png';
import Link from 'next/link';
import SliderImage from './SliderImage';
import { useTheme } from "next-themes";

function Hero() {
	const images = [P061, P066, P082, P128, P135, HM];
	const darkImages = [darkP061, darkP066, darkP082, darkP128, darkP135, darkHM];
	const { systemTheme, theme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;
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
						<Button className='uppercase rounded-xl text-lg bg-clrPrimary-900 hover:bg-clrPrimary-800 text-white' size={'lg'}>
							Contact
						</Button>
					</Link>
				</div>
			</div>
			<div className='w-[500px] h'>
				<SliderImage imageData={currentTheme == 'dark' ? darkImages : images} />
			</div>
		</div>
	);
}

export default Hero;
