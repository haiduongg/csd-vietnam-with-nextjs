"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import FacebookMessenger from '@/assets/img/social/facebook-messenger.webp';
import Skype from '@/assets/img/social/skype-2019.webp';
import Whatsapp from '@/assets/img/social/whatsapp.webp';

const variants = {
	show: {
		opacity: 1,
		x: 0,
		transition: {
			delayChildren: 1,
		},
	},
	hidden: {
		opacity: 0,
		x: 100,
	},
};

function SocialFloatButton() {
	const socials: {
		id: number;
		icon: StaticImageData;
		title: string;
		href: string;
		time: string;
	}[] = [
			{
				id: 1,
				icon: FacebookMessenger,
				title: 'Facebook',
				href: 'https://www.messenger.com/t/CSD.Vie',
				time: '(8h00 - 24h00)',
			},
			{
				id: 2,
				icon: Skype,
				title: 'Skype',
				href: 'Skype:live:.cid.484f3503905e6563',
				time: '(8h00 - 24h00)',
			},
			{
				id: 3,
				icon: Whatsapp,
				title: '076.527.9228',
				href: 'tel:0765279228',
				time: '(8h00 - 24h00)',
			},
		];
	return (
		<motion.div initial='hidden' animate='show' variants={variants}>
			{socials.map((social) => (
				<motion.div
					key={social.id}
					className='group p-2 lg:pl-3 lg:pr-6 lg:py-2 mb-3 bg-white dark:bg-black-900 rounded-xl shadow-lg dark:shadow-slate-700 select-none'
					whileTap={{ scale: 0.95 }}
					whileHover={{ x: -10 }}
					initial={{ x: 0 }}
				>
					<a href={social.href} target='_' className='flex items-center'>
						<Image
							src={social.icon}
							alt={social.title}
							width='40'
							height='40'
							className='mr-0 lg:mr-3'
						/>
						<p className='hidden md:block dark:text-white'>
							<span className='group-hover:text-primary-900 font-semibold'>
								{social.title}
							</span>
							<br />
							<span className='font-semibold text-sm opacity-60'>
								{social.time}
							</span>
						</p>
					</a>
				</motion.div>
			))}
		</motion.div>
	);
}

export default SocialFloatButton;
