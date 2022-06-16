import React, { useState } from 'react';
import { useAppSelector } from '../hooks/redux';

import MainLayout from '../reusable/Layout';
import { Wrapp } from '../styles/styles';

const MainPage = () => {
	// const [num, setNum] = useState<number>(1);
	// const [str, setStr] = useState<string>('');

	// function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
	// 	setNum(num + 1);
	// 	setStr(str + '!');
	// }

	// const { apartments } = useAppSelector((state) => state.apartments);

	return (
		<MainLayout
			title={'Main page'}
			description={'This is the main page'}
			robots={'index, follow'}
			keywords={'main, page, index'}>
			<Wrapp
				h={'100vh'}
				// onClick={handleClick}
			>
				Main page
			</Wrapp>
		</MainLayout>
	);
};

export default MainPage;
