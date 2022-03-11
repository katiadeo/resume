import React from 'react';
import { motion } from 'framer-motion';
import TypeAnimation from 'react-type-animation';
import { GitHub, Telegram, Phone } from '@material-ui/icons';
import Button from '@mui/material/Button';
import Link from '@material-ui/core/Link';
import './Contacts.scss';

const Contacts = () => {
	return (
		<motion.section
			initial={{ x: '100vw', opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ delay: 0.2 }}
			className="contactsSection"
		>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="titleBlock">
				<TypeAnimation
					cursor={false}
					sequence={['', 1000, 'you can contact me via:']}
					wrapper="h3"
					repeat={1}
					className="title"
				/>
			</motion.div>

			<ul className="contacts">
				<motion.li
					whileHover={{ scale: 1.1, originX: 0 }}
					transition={{ type: 'spring', stiffness: 120 }}
				>
					<Link href="https://t.me/katiadeo" target="_blank" className="contactsLink">
						<Button
							endIcon={<Telegram />}
							size="large"
							variant="contained"
							className="btnCommon"
						>
							Telegram me
						</Button>
					</Link>
				</motion.li>
				<motion.li
					whileHover={{ scale: 1.1, originX: 0 }}
					transition={{ type: 'spring', stiffness: 120 }}
				>
					<Link
						href="https://github.com/katiadeo"
						target="_blank"
						className="contactsLink"
					>
						<Button
							endIcon={<GitHub />}
							size="large"
							variant="contained"
							className={`${'githubBtn'} ${'btnCommon'}`}
						>
							GitHub
						</Button>
					</Link>
				</motion.li>

				<motion.li
					whileHover={{ scale: 1.1, originX: 0 }}
					transition={{ type: 'spring', stiffness: 120 }}
				>
					<Link
						href="https://www.linkedin.com/in/katiadeo-tm/"
						target="_blank"
						className="contactsLink"
					>
						<Button
							endIcon={<GitHub />}
							size="large"
							variant="contained"
							className={`${'linkedinBtn'} ${'btnCommon'}`}
						>
							LinkedIn
						</Button>
					</Link>
				</motion.li>
				<motion.li
					whileHover={{ scale: 1.1, originX: 0 }}
					transition={{ type: 'spring', stiffness: 120 }}
				>
					<Link href="tel:+79600435127" target="_blank" className="contactsLink">
						<Button
							endIcon={<Phone />}
							size="large"
							variant="contained"
							className={`${'phoneBtn'} ${'btnCommon'}`}
						>
							Call me
						</Button>
					</Link>
				</motion.li>
				<motion.li
					whileHover={{ scale: 1.1, originX: 0 }}
					transition={{ type: 'spring', stiffness: 120 }}
				>
					<Link
						href="mailto:katiadeo.tm@gmail.com"
						target="_blank"
						className="contactsLink"
					>
						<Button
							endIcon={<Phone />}
							size="large"
							variant="contained"
							className={`${'emailBtn'} ${'btnCommon'}`}
						>
							Email me
						</Button>
					</Link>
				</motion.li>
			</ul>
		</motion.section>
	);
};

export default Contacts;
