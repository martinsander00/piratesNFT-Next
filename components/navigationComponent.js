import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


import styles from '../styles/navigation.module.scss';


const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

	
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };


	return(


		<header className={styles.header}>
			<div className={styles.header__content}>
				<div>
					<Link className={styles.header__brand} href="/">
						<a><Image src="/home/PiratesSkull.png" alt="hola" width={58} height={58}/></a>
					</Link>
				</div>
				<nav
					className={styles.header__nav }
				>
					<div>
						<ul>
							<li>
								<Link href="/"><a className="">MINT</a></Link>
							</li>
							<li>
								<Link href="/"><a className="">ROADMAP</a></Link>
							</li>
							<li>
								<Link href="/"><a className="">CREW</a></Link>
							</li>
							<li>
								<Link href="/"><a className="">JOIN US</a></Link>
							</li>
							<button >Connect</button>
						</ul>
					</div>
				</nav>
				<div className={styles.header__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
			</div>
		</header>



	);
}

export default Navigation;



/*


		{<nav className="menu nav-bar navbar-expand-md">
			<div className="container">
				<Link class="navbar-brand" href="/"><a><Image src="/home/PiratesSkull.png" alt="hola" width={100} height={100}/></a></Link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse">
					<div className="navbar-nav ms-auto d-flex justify-content-evenly ">
						<Link href="/mint/"><a className={""/*styles.navlink}>MINT</a></Link>
						<Link href="/"><a className={""/*styles.navlink}>ROADMAP</a></Link>
						<Link href="/"><a className={""/*styles.navlink}>CREW</a></Link>
						<Link href="/"><a className={""/*styles.navlink}>JOIN US</a></Link>
					</div>
				</div>
			</div>
		</nav>}*/