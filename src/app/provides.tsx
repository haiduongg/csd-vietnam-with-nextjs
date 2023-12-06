"use client"
import React from 'react';
import { ThemeProvider } from 'next-themes';

export default function Provides({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider attribute='class' enableSystem={false} >{children}</ThemeProvider>
	);
}