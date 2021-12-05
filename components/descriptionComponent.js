import Image from 'next/image'
import description from '../public/description/description.json';
import GeneralCard from './generalCardComponent';

import styles from '../styles/description.module.scss';

const Description = () => {
	const desc = description[0];
	return(
		<div className="container">
			<div className="row">
			<GeneralCard {...desc} 
				cardClass="col-sm-6"
				titleClass={styles.description__title} subtitleClass={styles.description__subtitle} />
			</div>
		</div >
	);
}

export default Description;