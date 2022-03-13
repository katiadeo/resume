import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import MenuToggle from '../MenuToggle/MenuTogle';
import NavBar from '../NavBar/NavBar';
import './HamburgerMenu.scss';

const menuVariants = {
	open: { transform: 'translateX(3%)' },
	closed: { transform: 'translateX(103%)' },
};

const HamburgerMenu = () => {
	const ref = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	useEffect(() => {
		const checkIfClickOutside = (e) => {
			if (isOpen && ref.current && !ref.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', checkIfClickOutside);
		document.addEventListener('mouseover', checkIfClickOutside);

		return () => {
			document.removeEventListener('mouseup', checkIfClickOutside);
			document.removeEventListener('mouseout', checkIfClickOutside);
		};
	}, [isOpen]);

	return (
		<header className="hamburgerMenuContainer" ref={ref}>
			<MenuToggle toggle={toggleMenu} isOpen={isOpen} />
			<motion.div
				className="menuContainer"
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				variants={menuVariants}
			>
				<NavBar isOpen={isOpen} toggle={toggleMenu} />
			</motion.div>
		</header>
	);
};

export default HamburgerMenu;
