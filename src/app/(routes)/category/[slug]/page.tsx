import React from 'react';

export default function CategoryDetailPage({ params }: { params: { slug: string } }) {
	return (
		<div>
			{params.slug}
		</div>
	);
}