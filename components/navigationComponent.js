import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


import styles from '../styles/navigation.module.scss';


const Navigation = () => {
	return(
		<header className={"fixed-top " + styles.header}>
			<nav className="navbar container navbar-expand-lg navbar-light">
				<Link className="navbar-brand" href="/">
					<a className={styles.header__brand}><Image  src="/home/PiratesSkull.png" alt="hola" width={58} height={58}/></a>
				</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">

				<ul className=" navbar-nav  mt-2 mt-lg-0">
							<li className="nav-item">
								<Link href="/"><a className={styles.header__link}>MINT</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/"><a className={styles.header__link}>ROADMAP</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/"><a className={styles.header__link}>CREW</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/"><a className={styles.header__link}>JOIN US</a></Link>
							</li>
						</ul>
				<button  hidden className="btn btn-outline-success my-2 my-sm-0" type="submit">Connect</button>
			</div>
			</nav>
		</header>




	);
}

export default Navigation;

