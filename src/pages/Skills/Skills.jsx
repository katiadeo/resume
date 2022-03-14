import React from 'react';
import { motion } from 'framer-motion';
import TypeAnimation from 'react-type-animation';
import { skillsData } from './skillsData';
import './Skills.scss';

const Skills = () => {
	return (
		<>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="titleBlock">
				<TypeAnimation
					cursor={false}
					sequence={['', 1000, 'my main skills are:']}
					wrapper="h3"
					repeat={1}
					className="title"
				/>
			</motion.div>
			<div className="skillsContainer">
				{skillsData.map((skill) => {
					return (
						<motion.div
							className="skill"
							key={skill.id}
							initial={{ opacity: 0, y: 1000 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: skill.delay }}
						>
							<div className="outer">
								<div className="inner">
									<img className="skillLogo" src={skill.src} alt={skill.name} />
								</div>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								width="160px"
								height="160px"
								viewBox="6.5 6.5 235 235"
							>
								<defs>
									<linearGradient id={skill.gradientId}>
										<stop
											offset="0%"
											stopColor={skill.startColor}
											stopOpacity="0.8"
										/>
										<stop
											offset="100%"
											stopColor={skill.stopColor}
											stopOpacity="0.5"
										/>
									</linearGradient>
								</defs>
								<circle
									className={skill.class}
									cx="80"
									cy="80"
									r="70"
									stroke-linecap="round"
								/>
							</svg>
						</motion.div>
					);
				})}
			</div>
		</>
	);
};

export default Skills;
