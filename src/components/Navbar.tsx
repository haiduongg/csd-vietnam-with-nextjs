'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
import Logo from './Navbar/logo';
import Navigation from './Navbar/Navigation';
import Action from './Navbar/Action';

function Navbar() {
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
					href: '/service/3d-modeling-rendering',
					icon: TbBoxModel,
				},
				{
					id: 'services:2',
					label: 'Steel Structure & Landscape',
					href: '/service/steel-structure-landscape',
					icon: CgGhostCharacter,
				},
				{
					id: 'services:3',
					label: 'Simulation & Rendering',
					href: '/service/simulation-rendering',
					icon: AiOutlineCodepen,
				},
				{
					id: 'services:4',
					label: '3D Artist & 3D Printing',
					href: '/service/3d-artist-3d-printing',
					icon: AiOutlineMacCommand,
				},
				{
					id: 'services:5',
					label: 'Portraits & Caricatures',
					href: '/service/portraits-caricatures',
					icon: PiTreeStructureDuotone,
				},
				{
					id: 'services:6',
					label: 'Logo Design',
					href: '/service/logo-design',
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
				<Logo width={140} />
				<motion.nav
					className='ml-10 w-full flex items-center justify-between'
					animate={{ x: 0, opacity: 1 }}
					initial={{ x: 80, opacity: 0 }}
				>
					<Navigation navigationMenu={menu} />
					<Action />
				</motion.nav>
			</div>
		</div>
	);
}

export default Navbar;
