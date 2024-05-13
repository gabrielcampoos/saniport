import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Inital } from '../../pages/Inital';
import { Absoluta } from '../../pages/Absoluta';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inital />} />
				<Route path="/saniport" element={<Home />} />
				<Route path="/absoluta" element={<Absoluta />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
