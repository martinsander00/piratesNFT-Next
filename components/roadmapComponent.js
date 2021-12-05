
import Container from 'react-bootstrap/Container';
import pt from '../public/roadmap/PiratesSkull.png';

import styles from '../styles/roadmap.module.scss';

const Roadmap = () => {
	return(
		<div className=" container movebot_roadmap_card mask">

      
      <div className="skull-card ">
        <img className="skull-img" src={pt} alt=""/>
        <div className="row text-center">
          <h2 className={styles.roadmap__title}>ROADMAP</h2>
          <p className={styles.roadmap__subtitle}>COMING SOON...</p>
        </div>
      </div>
		</div>

	);

}

export default Roadmap;