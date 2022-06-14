import React from 'react';

import MainLayout from '../reusable/Layout';

const MainPage = () => {
	return (
		<MainLayout
			title={'Main page'}
			description={'This is the main page'}
			robots={'index, follow'}
			keywords={'main, page, index'}>
			<h1>Main page</h1>
		</MainLayout>
	);
};

export default MainPage;
