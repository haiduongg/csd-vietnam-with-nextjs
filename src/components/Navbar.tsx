"use client"
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { RiSunFill } from 'react-icons/ri';
import { HiChevronDown } from 'react-icons/hi';
import { AiOutlineCodepen, AiOutlineMacCommand } from 'react-icons/ai';
import { GiTeleport } from 'react-icons/gi';
import { TbBoxModel } from 'react-icons/tb';
import { LuBadgeCheck } from 'react-icons/lu';
import { MdOutlineClass } from 'react-icons/md';
import {
	PiTreeStructureDuotone,
	PiUserListDuotone,
	PiUsersFourLight,
} from 'react-icons/pi';
import { CgGhostCharacter } from 'react-icons/cg';
import logoCSD from 'public/logo.webp';
import whiteLogoCSD from 'public/logo-white.webp';

function Navbar() {
	const subMenuMotion = {
		show: {
			display: 'block',
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 300, damping: 24 },
		},
		hidden: { display: 'none', opacity: 0, y: 20, transition: { duration: 0.2 } },
	};
	const menu = [
		{
			id: 1,
			label: 'About us',
			children: [
				{
					id: 'about:1',
					label: 'Vision',
					href: '/vision',
					icon: PiUserListDuotone,
				},
				{
					id: 'about:2',
					label: 'Our Journey',
					href: '/our-journey',
					icon: PiUsersFourLight,
				},
			],
		},
		{
			id: 2,
			label: 'Services',
			children: [
				{
					id: 'services:1',
					label: '3D Modeling & Rendering',
					href: '/services/3d-modeling-rendering',
					icon: TbBoxModel,
				},
				{
					id: 'services:2',
					label: 'Steel Structure & Landscape',
					href: '/services/steel-structure-landscape',
					icon: CgGhostCharacter,
				},
				{
					id: 'services:3',
					label: 'Simulation & Rendering',
					href: '/services/simulation-rendering',
					icon: AiOutlineCodepen,
				},
				{
					id: 'services:4',
					label: '3D Artist & 3D Printing',
					href: '/services/3d-artist-3d-printing',
					icon: AiOutlineMacCommand,
				},
				{
					id: 'services:5',
					label: 'Portraits & Caricatures',
					href: '/services/portraits-caricatures',
					icon: PiTreeStructureDuotone,
				},
				{
					id: 'services:6',
					label: 'Logo Design',
					href: '/services/logo-design',
					icon: GiTeleport,
				},
				{
					id: 'services:7',
					label: 'Training Courses',
					href: 'https://courses.csdvietnam.com',
					icon: MdOutlineClass,
				},
			],
		},
		{
			id: 3,
			label: 'Categories',
			children: [
				{
					id: 'categories:1',
					label: '3D Modeling & 2D Drawings',
					href: '/category/3d-modeling-rendering',
					icon: LuBadgeCheck,
				},
				{
					id: 'categories:2',
					label: 'Steel Structure & Landscape',
					href: '/category/steel-structure-landscape',
					icon: LuBadgeCheck,
				},
				{
					id: 'categories:3',
					label: 'Simulation & Rendering',
					href: '/category/simulation-rendering',
					icon: LuBadgeCheck,
				},
				{
					id: 'categories:4',
					label: '3D Artist & 3D Printing',
					href: '/category/3d-artist-3d-printing',
					icon: LuBadgeCheck,
				},
				{
					id: 'categories:5',
					label: 'Portraits & Cricatures',
					href: '/category/portraits-cricatures',
					icon: LuBadgeCheck,
				},
				{
					id: 'categories:6',
					label: 'Logo Design',
					href: '/category/logo-design',
					icon: LuBadgeCheck,
				},
			],
		},
		{
			id: 4,
			label: 'New & Media',
			children: [
				{
					id: 'news:1',
					label: 'Carrers',
					href: '/news/carrers',
					icon: LuBadgeCheck,
				},
				{
					id: 'news:2',
					label: 'Blogs',
					href: '/blogs',
					icon: LuBadgeCheck,
				},
			],
		},
	];

	return (
		<div className='fixed w-full backdrop-blur-3xl border-b border-slate-900/10 z-50'>
			<div className='container h-[72px] flex items-center justify-between'>
				<motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }}>
					<Link href={'/'}>
						<Image
							src={logoCSD}
							alt='CSD logo'
							width={140}
							height={53}
							unoptimized
						/>
					</Link>
				</motion.div>
				<motion.nav className='ml-10 w-full flex items-center justify-between' animate={{ x: 0, opacity: 1 }} initial={{ x: 80, opacity: 0 }}>
					<ul className='flex items-center justify-start'>
						{menu.map((item) => {
							return (
								<li key={item.id} className='group relative'>
									<div className='py-3.5 px-3 mx-2 cursor-pointer'>
										<span className='uppercase font-bold text-sm duration-300 group-hover:text-clrPrimary-900 dark:group-hover:text-clrPrimary-900'>{item.label}</span>
										<HiChevronDown
											className='inline-block group-hover:rotate-180 duration-300 group-hover:text-clrPrimary-900 dark:group-hover:text-clrPrimary-900'
											size={20}
										/>
									</div>
									{item.children && (
										<ul className='hidden group-hover:block absolute  bg-white dark:bg-black-900 top-full left-2 shadow-[0px_10px_40px_rgba(0,0,0,0.05)] py-4 px-5 rounded-xl border-[1px] border-solid border-black-100 dark:border-black-800'>
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
										</ul>
									)}
								</li>
							);
						})}
					</ul>

					{/* Action */}
					<div className='flex items-center justify-center gap-7'>
						<div className='mr-3 h-7 w-px bg-gray-300 dark:bg-black-900-stroke 2xl:block 3xl:mx-7'></div>
						<div className='cursor-pointer opacity-60 hover:opacity-90 duration-300'>
							<RiSunFill size={24} />
						</div>
						<div>
							<Link href={'https://facebook.com/CSD.Vie'} target='_blank'><Button className='uppercase bg-clrPrimary-900 hover:bg-clrPrimary-800'>Contact</Button></Link>
						</div>
					</div>
				</motion.nav>
			</div>
		</div>
	);
}

export default Navbar;
