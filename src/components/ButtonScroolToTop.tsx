'use client';
import React, { useState, useEffect } from 'react';
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
		<Button
			type='button'
			onClick={() => {
				window.scrollTo(0, 0);
			}}
			className={`${show ? 'block' : 'hidden'} duration-300 bg-clrPrimary-900 hover:bg-clrPrimary-800`}
		>
			<FaArrowUp />
		</Button>
	);
}

export default ButtonScroolToTop;
