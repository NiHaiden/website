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
                    className={"backgroundimg hover:backgroundimg2 bg-fixed bg-center bg-cover bg-no-repeat min-w-fit min-h-fit md:min-w-0 md:h-1/2 w-1/2 p-4 lg:w-3/4 lg:h-3/4 rounded-3xl border hover:border-blue-500 text-center hover:bg-clip-text hover:text-transparent hover:shadow-2xl hover:transition-all transition-all duration-500"}>
                    <div className={"font-black text-5xl sm:text-6xl lg:text-9xl xl:text-extrabig"}>👋 Hi there!</div>
                    <div className={"pt-5 text-xl sm:text-4xl"}>I am Niklas, 20 year old geek and aspiring software engineer living in Hamburg.
                    </div>
                </div>
            </div>
            <SocialLinks/>
        </div>
    )
// backgroundimg bg-fixed transition-all duration-300 hover:shadow-2xl hover:transition-all hover:duration-300 hover:border-black " +
//                         "w-1/2 p-4 rounded-3xl  hover:text-white text-black text-center border-blue-500 border-2 flex items-center justify-center flex-col flex-col"
}
