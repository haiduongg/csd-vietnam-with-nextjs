import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import {
	GrMail,
	GrYoutube,
	GrSkype,
	GrLinkedin,
	GrTwitter,
} from 'react-icons/gr';
import { FaFacebookSquare } from "react-icons/fa";
import { FaFonticons } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';
import whiteLogoCSD from 'public/logo-white.webp';

function Footer() {
	return (
		<div className='bg-text dark:bg-gray-800 dark:border-t-2 dark:border-solid dark:border-gray-500'>
			<div className='container py-16'>
				<Link href={'/'} title='CSD Vietnam' className='block w-fit'>
					<Image src={whiteLogoCSD} alt='CSD Vietnam' width={150} />
				</Link>
				<div className='mt-8 grid grid-cols-3 xl:grid-cols-3'>
					<div className='col-span-3 lg:col-span-2'>
						<Social />
					</div>
					<div className='col-span-1 xl:block hidden'>
						{/* <Fanpage /> */}
					</div>
				</div>
			</div>
			<div className='h-[50px] leading-[50px] text-center bg-[#130e49] text-white dark:bg-[#191f27] text-lg'>
				<span>Copyright @ 2023 by CADSQUAD - All Right Reserved</span>
			</div>
		</div>
	);
}

// const Fanpage = () => {
// 	return (
// 		<div className=' overflow-hidden md:w-full'>
// 			<iframe
// 				src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCSD.Vie&tabs=timeline&width=500&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId'
// 				width='500'
// 				height='300'
// 				style={{ border: 0, overflow: 'hidden' }}
// 				allowfullscreen={true}
// 				loading='lazy'
// 			></iframe>
// 		</div>
// 	)
// }

const Social = () => {
	const socials = [
		{
			icon: FaFacebookSquare,
			name: 'Facebook.com/CSD.Vie',
			path: 'https://www.facebook.com/CSD.Vie',
		},
		{
			icon: BiSolidPhoneCall,
			name: '076 527 9228',
			path: 'tel:0765279228',
		},
		{
			icon: GrLinkedin,
			name: 'Linkedin.com/in/Cadsquad22',
			path: 'https://www.linkedin.com/in/Cadsquad22',
		},
		{
			icon: GrMail,
			name: 'Contact.us@csdvietnam.com',
			path: 'mailto: contact.us@csdvietnam.com',
		},
		{
			icon: GrTwitter,
			name: 'Twitter.com/csdvietnam',
			path: 'https://twitter.com/csdvietnam',
		},
		{
			icon: FaFonticons,
			name: 'Fiverr.com/vietnamcsd',
			path: 'https://www.fiverr.com/vietnamcsd',
		},
		{
			icon: GrSkype,
			name: 'live:.cid.484f3503905e6563',
			path: 'https://www.facebook.com/CSD.Vie',
		},
		{
			icon: GrYoutube,
			name: '@CSDVietnam',
			path: 'https://www.youtube.com/@CSDVietnam',
		},
	];
	return (
		<div className='text-white grid lg:grid-cols-2'>
			{socials.map((item) => {
				return (
					<div className='flex items-center my-3' key={item.name}>
						<item.icon size={25} className='mr-4' />
						<a
							href={item.path}
							title={item.name}
							target='_'
							className='cursor-pointer opacity-70 hover:opacity-100 border-b-[1px] border-solid border-gray-200 pb-[1px] duration-200'
						>
							{item.name}
						</a>
					</div>
				);
			})}
		</div>
	)
}

export default Footer;