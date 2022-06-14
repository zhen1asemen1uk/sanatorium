import React from 'react';
import FooterConteiner from '../components/Footer/FooterConteiner';
import HeaderConteiner from '../components/Header/HeaderConteiner';
import Head from '../node_modules/next/head';
import { MainLayoutProps } from '../types/test';

const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	title,
	description,
	robots,
	keywords,
}) => {
	return (
		<>
			<Head>
				<title>{title || `Sanatorium`}</title>
				<meta name='description' content={description} />
				<meta name='robots' content={robots || `index, follow`} />
				<meta name='keywords' content={keywords} />
			</Head>
			<HeaderConteiner />
			{children}
			<FooterConteiner />
		</>
	);
};

export default MainLayout;
