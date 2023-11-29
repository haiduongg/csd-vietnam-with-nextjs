"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logoCSD from 'public/logo.webp';
import whiteLogoCSD from 'public/logo-white.webp';
import PropTypes from 'prop-types';

Logo.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number,
};
Logo.defaultProps = {
	width: 150,
};


export default function Logo(props: { width: number, height?: number }) {
	return (
		<motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }}>
			<Link href={'/'}>
				<Image
					src={logoCSD}
					alt='CSD logo'
					width={props.width}
					unoptimized
				/>
			</Link>
		</motion.div>
	);
}