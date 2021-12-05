import GeneralCard from './generalCardComponent'
import Image from 'next/image'
import useSWR from 'swr'

import styles from '../styles/team.module.scss'



const Team = () => {
	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const { data, error } =  useSWR('/api/team', fetcher);
	const title = "THE CREW";
	const text = "A Pirate Community must be led by a strong Pirate Crew.";
	return(
		<div className={"container justify-content-center " + styles.team}>
			<div className="row text-center">
				<div className="col">
					<h2 className={styles.team__title}>{title}</h2>
					<h4 className={styles.team__subtitle}>{text}</h4>
				</div>
			</div>
			<div className="row justify-content-center">
				{data?.map((teamIt,i) => (
					<>
					<GeneralCard  key={i} {...teamIt} cardClass={styles.team__item} imgClass={styles.team__image}  titleClass={styles.team__twitter} subtitleClass={styles.team__position} cardClass="col-6 col-sm-4 col-md-2 text-center" />
					{ i === 2 && <div className="w-100 d-none d-md-block"></div>}
					</>
				))}
			</div>
		</div>
	);

}

export async function getStaticProps(context){
	const res = await fetch('/api/team');
	const data = await res.json();
}


export default Team;