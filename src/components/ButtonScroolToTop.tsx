'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FaArrowUp } from 'react-icons/fa';

function ButtonScroolToTop() {
	const [show, setShow] = useState(false);
	const controlShow = () => {
		if (window.scrollY > 2) {
			setShow(true)
		} else {
			setShow(false)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', controlShow)
		return () => {
			window.removeEventListener('scroll', controlShow)
		}
	}, [])

	return (
		<motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.90 }}>
			<Button
				variant={'outline'}
				onClick={() => {
					window.scrollTo(0, 0);
				}}
				className={`${show ? 'block' : 'hidden'} duration-300 px-8 py-2`}
			>
				<FaArrowUp />
			</Button>
		</motion.div>
	);
}

export default ButtonScroolToTop;
