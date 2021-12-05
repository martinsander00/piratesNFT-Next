import Image from 'next/image'
import {motion} from 'framer-motion'
import bgBanner from '../public/landingBanner/BG_BANNER.jpg'
import logoWeb from '../public/landingBanner/LOGO_WEB.png'
import longRocks from '../public/landingBanner/LONG_ROCKS.png'
import redPlanet from '../public/landingBanner/RedPlanet.png'

import styles from '../styles/landingBanner.module.scss';

const LandingBanner = () => {
	const path = '/home/'
	return(
		<div className={styles.lb}>
			<img src="landingBanner/BG_BANNER.jpg" className={styles.lb__bgBanner} />
			<img src="landingBanner/LOGO_WEB.png" className={styles.lb__logoWeb} />
			<img src="landingBanner/LONG_ROCKS.png" className={styles.lb__longRocks} />
			<img src="landingBanner/RedPlanet.png" className={styles.lb__redPlanet} />
		</div>
	);

}

export const ImageBlock = ({ children , className }) => {
	return (
		<motion.div className={className}>
			{children}
		</motion.div>
	);
};

export default LandingBanner;