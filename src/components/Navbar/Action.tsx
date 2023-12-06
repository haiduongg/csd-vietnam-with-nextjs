"use client"
import React from 'react';
import { useTheme } from "next-themes";
import Link from 'next/link';
import { Button } from '../ui/button';
import { RiSunFill } from 'react-icons/ri';

function Action() {
	const { theme, setTheme } = useTheme();
	return (
		<div>
			{/* Action */}
			<div className='flex items-center justify-center gap-7'>
				<div className='mr-3 h-7 w-px bg-gray-300 dark:bg-black-900-stroke 2xl:block 3xl:mx-7'></div>
				<div className='cursor-pointer opacity-60 hover:opacity-90 duration-300' onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>
					<RiSunFill size={24} />
				</div>
				<div>
					<Link href={'https://facebook.com/CSD.Vie'} target='_blank'>
						<Button className='uppercase bg-clrPrimary-900 hover:bg-clrPrimary-800 text-white'>
							Contact
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Action;