import React from 'react';
import { motion } from 'framer-motion';
import TypeAnimation from 'react-type-animation';
import ProjectsSlider from '../../components/ProjectsSlider/ProjectsSlider';
import { projectsData } from '../../components/ProjectsSlider/projectData';
// import Slider from '../../components/Slider/Slider';
// import { sliderData } from '../../components/Slider/sliderData';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea } from '@mui/material';

const Projects = () => {
	return (
		<>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="titleBlock">
				<TypeAnimation
					cursor={false}
					sequence={['', 1000, 'you can find my pet projects here:']}
					wrapper="h3"
					repeat={1}
					className="title"
				/>
			</motion.div>

			<ProjectsSlider slides={projectsData} />

			{/* <Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="100%"
						image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg"
						alt="green iguana"
					/>
				</CardActionArea>
			</Card> */}
			{/* <Slider slides={sliderData} heading="Example Slider" /> */}
		</>
	);
};

export default Projects;
