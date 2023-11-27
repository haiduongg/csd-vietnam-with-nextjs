import React from 'react';
import PropTypes from 'prop-types';
import FacebookMessenger from '@/assets/img/social/facebook-messenger.webp';
import Skype from '@/assets/img/social/skype-2019.webp';
import Whatsapp from '@/assets/img/social/whatsapp.webp';
import Image, { StaticImageData } from 'next/image';

function SocialFloatButton() {
	const socials: { id: number, icon: StaticImageData, title: string, href: string, time: string }[] = [
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
		<div>
			{socials.map((social) => (
				<div
					key={social.id}
					className='group p-2 lg:pl-3 lg:pr-6 lg:py-2 mb-3 bg-white dark:bg-black-900 rounded-xl shadow-lg dark:shadow-slate-700 select-none'
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
				</div>
			))}
		</div>
	);
}

export default SocialFloatButton;