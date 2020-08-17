import React from 'react';
import './MainPage.styles.scss';
import Description from '../../2_units/Description';
import Lake from '../../2_units/Lake';
import Legend from '../../2_units/Legend';

const MainPage = () => {
	return (
		<>
			<Description />
			<Lake />
			<Legend />
		</>
	);
};

export default MainPage;
