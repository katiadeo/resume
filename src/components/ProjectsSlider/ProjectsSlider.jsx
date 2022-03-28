import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IconButton, Button } from '@mui/material';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { projectsData } from './projectData';
import Link from '@material-ui/core/Link';

import './ProjectsSlider.scss';

const ProjectsSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const [move, setMove] = useState('right');

	useEffect(() => {
		projectsData.forEach((project) => {
			const img = new Image();
			img.src = project.src;
			// console.log(project.src);
		});
	}, []);

	const handleNextClick = () => {
		setCurrent(current === slides.length - 1 ? 0 : current + 1);
		setMove('right');
	};

	const handlePreviousClick = (e) => {
		setCurrent(current === 0 ? slides.length - 1 : current - 1);
		setMove('left');
	};

	return (
		<div className="projectsContainer">
			<div className="shape"></div>
			{projectsData.map((project, index) => {
				return (
					<div
						key={project.id}
						className={index === current ? 'projectCard active' : 'projectCard'}
					>
						{index === current && (
							<>
								<motion.img
									initial={
										move === 'right'
											? { x: -300, opacity: 0 }
											: { x: 300, opacity: 0 }
									}
									animate={{ x: 0, opacity: 0.6 }}
									transition={{ stiffness: 120 }}
									src={project.src}
									alt={project.headline}
									className="projectCover"
								/>
								<h3 className="projectName">{project.headline}</h3>
								<Link href={project.link} target="_blank">
									<Button variant="contained" className="demoBtn">
										Demo
									</Button>
								</Link>
								<motion.div
									initial={{ y: 1500 }}
									animate={{ y: 0 }}
									transition={{ delay: 0.3 }}
									className="projectTools"
								>
									{project.tools.map((tool, i) => {
										return <span key={i}>{tool}</span>;
									})}
								</motion.div>
								<div className="arrowsContainer">
									<IconButton className="leftArrow" onClick={handlePreviousClick}>
										<ArrowLeftRoundedIcon
											sx={{ fontSize: '50px', color: 'white' }}
										/>
									</IconButton>
									<IconButton className="rightArrow" onClick={handleNextClick}>
										<ArrowRightRoundedIcon
											sx={{ fontSize: '50px', color: 'white' }}
										/>
									</IconButton>
								</div>
							</>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ProjectsSlider;
