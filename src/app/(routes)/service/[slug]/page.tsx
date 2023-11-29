import React from 'react';
import PropTypes from 'prop-types';

async function getServicesData() {
	try {
		const res = await fetch(`https://api-csd-vietnam.onrender.com/services`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (err) {
		console.log(err);
	}
}

export default async function ServiceDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	const dataServices = await getServicesData();
	const service = dataServices.find(
		(i: {
			id: number;
			name: string;
			href: string;
			content: string;
			images: Array<object>;
		}) => { return i.href === params.slug }
	) ?? {};

	return (
		<div>
			<h1>{service.name}</h1>
		</div>
	);
}
