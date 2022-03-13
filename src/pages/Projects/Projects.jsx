import React from 'react';
import { motion } from 'framer-motion';
import TypeAnimation from 'react-type-animation';
import ProjectsSlider from '../../components/ProjectsSlider/ProjectsSlider';
import { projectsData } from '../../components/ProjectsSlider/projectData';

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
		</>
	);
};

export default Projects;
