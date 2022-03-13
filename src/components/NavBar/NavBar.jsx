import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import './NavBar.scss';

const variants = {
	show: { transform: 'translateX(0em)', opacity: 1, x: -20 },
	hide: { transform: 'translteX(1em)', opacity: 0 },
};

const NavBar = ({ isOpen, toggle }) => {
	return (
		<nav className="navContainer">
			<ul className="navList">
				<motion.li
					className="navLink"
					initial={false}
					animate={isOpen ? 'show' : 'hide'}
					variants={{
						show: { ...variants.show, transition: { delay: 0.2 }, duration: 0.2 },
						hide: { ...variants.hide, transition: { delay: 0.05 }, duration: 0.05 },
					}}
				>
					<NavLink to="/">
						<Button className="linkBtn" onClick={toggle}>
							About me
						</Button>
					</NavLink>
				</motion.li>
				<motion.li
					className="navLink"
					initial={false}
					animate={isOpen ? 'show' : 'hide'}
					variants={{
						show: { ...variants.show, transition: { delay: 0.4 }, duration: 0.2 },
						hide: { ...variants.hide, transition: { delay: 0.1 }, duration: 0.05 },
					}}
				>
					<NavLink to="/contacts">
						<Button className="linkBtn" onClick={toggle}>
							Contacts
						</Button>
					</NavLink>
				</motion.li>
				<motion.li
					className="navLink"
					initial={false}
					animate={isOpen ? 'show' : 'hide'}
					variants={{
						show: { ...variants.show, transition: { delay: 0.6 }, duration: 0.2 },
						hide: { ...variants.hide, transition: { delay: 0.15 }, duration: 0.05 },
					}}
				>
					<NavLink to="/skills">
						<Button className="linkBtn" onClick={toggle}>
							Skills
						</Button>
					</NavLink>
				</motion.li>
				<motion.li
					className="navLink"
					initial={false}
					animate={isOpen ? 'show' : 'hide'}
					variants={{
						show: { ...variants.show, transition: { delay: 0.8 }, duration: 0.2 },
						hide: { ...variants.hide, transition: { delay: 0.2 }, duration: 0.05 },
					}}
				>
					<NavLink to="/projects">
						<Button className="linkBtn" onClick={toggle}>
							Projects
						</Button>
					</NavLink>
				</motion.li>
				<motion.li
					className="navLink"
					initial={false}
					animate={isOpen ? 'show' : 'hide'}
					variants={{
						show: { ...variants.show, transition: { delay: 0.9 }, duration: 0.2 },
						hide: { ...variants.hide, transition: { delay: 0.25 }, duration: 0.05 },
					}}
				>
					<NavLink to="/resume">
						<Button className="linkBtn" onClick={toggle}>
							Resume
						</Button>
					</NavLink>
				</motion.li>
			</ul>
		</nav>
	);
};

export default NavBar;
// TODO: update animations
