"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

interface INav {
	id: number;
	label: string;
	children?: {
		id: string,
		label: string,
		href: string,
		icon?: any
	}[]
}

export default function Navigation(props: { navigationMenu: INav[] }) {
	const subMenuMotion = {
		show: {
			display: 'block',
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 300, damping: 24 },
		},
		hidden: {
			display: 'none',
			opacity: 0,
			y: 20,
			transition: { duration: 0.2 },
		},
	};
	return (
		<ul className='flex items-center justify-start'>
			{props.navigationMenu.map((item) => {
				return (
					<motion.li
						initial='hidden'
						animate='hidden'
						whileHover='show'
						key={item.id}
						className='group relative'
					>
						<div className='py-3.5 px-3 mx-2 cursor-pointer'>
							<span className='uppercase font-bold text-sm duration-300 group-hover:text-clrPrimary-900 dark:group-hover:text-clrPrimary-900'>
								{item.label}
							</span>
							<HiChevronDown
								className='inline-block group-hover:rotate-180 duration-300 group-hover:text-clrPrimary-900 dark:group-hover:text-clrPrimary-900'
								size={20}
							/>
						</div>
						{item.children && (
							<motion.ul
								variants={subMenuMotion}
								className='sub-menu absolute  bg-white dark:bg-black-900 top-full left-2 shadow-[0px_10px_40px_rgba(0,0,0,0.05)] py-4 px-5 rounded-xl border-[1px] border-solid border-black-100 dark:border-black-800'
							>
								{item.children.map((child) => (
									<li key={child.id}>
										<Link
											href={child.href}
											className='flex items-center rounded-md py-3 pl-4 pr-6 duration-300 hover:bg-black-100 dark:hover:bg-black-800 mb-2'
											target={child.href.indexOf('http') ? '' : '_blank'}
										>
											<div className='mr-4 inline-block'>
												<child.icon size={18} />
											</div>
											<span className='whitespace-nowrap text-sm'>
												{child.label}
											</span>
										</Link>
									</li>
								))}
							</motion.ul>
						)}
					</motion.li>
				);
			})}
		</ul>
	);
}