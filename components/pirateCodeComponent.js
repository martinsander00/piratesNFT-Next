import GeneralCard from './generalCardComponent';
import useSWR from 'swr'
import styles from '../styles/pirateCode.module.scss'

const PirateCode = () =>  {
	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const { data, error } =  useSWR('/api/pirateCode', fetcher);

  const title = 'THE PIRATE CODE';
  const stitle = 'Five Principles';
	
	return(
    <div className="container movebot_code">
      <div className="row text-center">
        <div className="col">
          <h1 className={styles.pirateCode__title}>{title}</h1>
          <h4 className={styles.pirateCode__subtitle}>{stitle}</h4>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {data?.map((pcIt)=>(
          <GeneralCard key={pcIt[1]} {...pcIt} titleClass={styles.pirateCode__item__title} textClass="description"  />
        ))}
      </div>
    </div>
	);
}

export default PirateCode;