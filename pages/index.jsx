import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import MenuOverlay from "../components/MenuOverlay";
import {useState} from "react";
import SocialLinks from "../components/social";


export default function Home() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className={styles.bgimg}>
            <Head>
                <title>Niklas Haiden</title>
                <link rel="icon" href="NH_var2_optimized.svg"/>
                <meta name="description" content="Hi, I'm Niklas, an aspiring developer. Come check my website out!"/>
                <meta name={"author"} content={"Niklas Haiden"}/>
                <meta property="og:image" content="/bgimg2.jpg"/>

            </Head>
            <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></Navbar>
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></MenuOverlay>

            <div
                className={"px-10 flex text-white items-center justify-center flex-grow flex-col"}>
                <div
                    className={"backgroundimg hover:backgroundimg2 bg-fixed bg-center bg-cover bg-no-repeat w-1/2 p-4 rounded-3xl border hover:border-blue-500 text-center hover:bg-clip-text hover:text-transparent hover:shadow-2xl hover:transition-all transition-all duration-500"}>
                    <div className={"font-black md:text-extrabig"}>👋 Hi there!</div>
                    <div className={"pt-5 text-4xl md:text-4xl"}>I am Niklas, currently employed as a
                        civil servant and aspiring to become a Fullstack Dev in the future.
                    </div>
                </div>
            </div>
            <SocialLinks/>
        </div>
    )
// backgroundimg bg-fixed transition-all duration-300 hover:shadow-2xl hover:transition-all hover:duration-300 hover:border-black " +
//                         "w-1/2 p-4 rounded-3xl  hover:text-white text-black text-center border-blue-500 border-2 flex items-center justify-center flex-col flex-col"
}
