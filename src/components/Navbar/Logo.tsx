"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import logoCSD from 'public/logo.webp';
import whiteLogoCSD from 'public/logo-white.webp';
import PropTypes from 'prop-types';

Logo.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number,
};
export default function Logo(props: { width: number, height?: number }) {
	const { systemTheme, theme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }}>
			<Link href={'/'}>
				<Image
					src={currentTheme == 'dark' ? whiteLogoCSD : logoCSD}
					alt='CSD logo'
					width={props.width ?? 50}
					unoptimized
					placeholder='blur'
				/>
			</Link>
		</motion.div>
	);
}