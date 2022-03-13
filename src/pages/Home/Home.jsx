import React from 'react';
import { motion } from 'framer-motion';
import TypeAnimation from 'react-type-animation';
import ProfilePhoto from '../../assets/photos/profile.jpg';
import './Home.scss';

const Home = () => {
	return (
		<>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="titleBlock">
				<TypeAnimation
					cursor={false}
					sequence={['', 1000, 'I am a Frontend Developer']}
					wrapper="h3"
					repeat={1}
					className="title"
				/>
			</motion.div>
			<motion.div
				className="profileCard"
				initial={{ opacity: 0, x: -250 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5 }}
			>
				<div className="profileSummary">
					<div>
						An enthusiastic and rather efficient Developer seeking for an entry position
						in a rapidly evolving community
					</div>
					<h3 className="profileName">Tatiana</h3>
				</div>
				<img src={ProfilePhoto} alt="profile" className="profilePhoto" />
			</motion.div>
		</>
	);
};

export default Home;
