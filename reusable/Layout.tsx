import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import FooterConteiner from '../components/Footer/FooterConteiner';
import HeaderConteiner from '../components/Header/HeaderConteiner';

import globalStyles from '../styles/globals';

import { MainLayoutProps } from '../types/components';

const Wrapp = styled.div`
	min-height: 100vh;
`;

const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	title,
	description,
	robots,
	keywords,
}) => {
	return (
		<Wrapp>
			<Head>
				<title>{title || `Sanatorium`}</title>
				<meta name='description' content={description || ``} />
				<meta name='robots' content={robots || `index, follow`} />
				<meta name='keywords' content={keywords || ``} />
			</Head>
			<HeaderConteiner />
			{children}
			<FooterConteiner />
			<style jsx global>
				{globalStyles}
			</style>
		</Wrapp>
	);
};

export default MainLayout;
