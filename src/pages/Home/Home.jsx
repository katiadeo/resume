import React from 'react';
import { motion } from 'framer-motion';
import TypeAnimation from 'react-type-animation';

const Home = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="titleBlock">
			<TypeAnimation
				cursor={false}
				sequence={['', 1000, 'I am a Frontend Developer']}
				wrapper="h3"
				repeat={1}
				className="title"
			/>
		</motion.div>
	);
};

export default Home;
