import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import LandingPageText from "../components/LandingPageText";
import MenuOverlay from "../components/MenuOverlay";
import {useState} from "react";

export default function Home() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className={styles.bgimg}>
            <Head>
                <title>Niklas Haiden</title>
                <link rel="icon" href="NH_var2_optimized.svg"/>
                <meta name="description" content="Hi, I'm Niklas, an aspiring developer. Come check my website out!"/>
                <meta name={"author"} content={"Niklas Haiden"}/>
                <meta property="og:image" content="/bgimg.jpg"/>

            </Head>
            <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></Navbar>
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></MenuOverlay>
            <LandingPageText/>
            <div className={"object-bottom pb-1 pl-1 text-white"}>Early Dev Release, far from finished.</div>
        </div>
    )
}
