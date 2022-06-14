import React from 'react';

import MainLayout from '../reusable/Layout';
import { Wrapp } from '../styles/styles';

const MainPage = () => {
	return (
		<MainLayout
			title={'Main page'}
			description={'This is the main page'}
			robots={'index, follow'}
			keywords={'main, page, index'}>
			<Wrapp h={'100vh'}>Main page</Wrapp>
		</MainLayout>
	);
};

export default MainPage;
