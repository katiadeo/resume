import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';
import Skills from './pages/Skills/Skills';

import './assets/css/global.scss';

const App = () => {
	return (
		<>
			<Router>
				<HamburgerMenu />
				<main className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/skills" element={<Skills />} />
					</Routes>
				</main>
			</Router>
		</>
	);
};

export default App;
