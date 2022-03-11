import React from 'react';
import { motion } from 'framer-motion';
import TypeAnimation from 'react-type-animation';
import { Button } from '@material-ui/core';
import { saveAs } from 'file-saver';

const Resume = () => {
	const saveFile = () => {
		saveAs('./CV_Tatiana_Mukhortova.pdf', 'CV_Tatiana_Mukhortova.pdf.pdf');
	};

	return (
		<>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="titleBlock">
				<TypeAnimation
					cursor={false}
					sequence={['', 1000, 'download my cv here:']}
					wrapper="h3"
					repeat={1}
					className="title"
				/>
			</motion.div>
			<Button variant="contained" color="primary" size="large" onClick={saveFile}>
				Download CV
			</Button>
		</>
	);
};

export default Resume;
