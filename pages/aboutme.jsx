import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import {useState} from "react";
import MenuOverlay from "../components/MenuOverlay";
import SocialLinks from "../components/social";

export default function AboutMe() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className={styles.bgimg}>
            <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></Navbar>
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></MenuOverlay>


            <div className={"flex flex-col flex-grow justify-center items-center px-10 h-full text-black"}>
                <div className="w-4/5 max-w-3xl md:w-1/2 aboutmecontainer">
                   

                    <div
                        className="flex flex-col justify-center items-center p-10 text-white rounded-2xl shadow drop-shadow-2xl shortaboutme gradientbackground">
                        <h1 className={"text-6xl font-black"}>Sitting in front of a screen since the beginning of time.</h1><br/>

                        <p className={"text-lg"}>Since the beginning of my prime I have been interested in computers,
                            from sending my first email at the age of 5 and destroying functioning OS installs to
                            attending an IT vocational school from 2017-2022.
                            My interests reach far and wide, from the field of DevOps to, especially, programming
                            various things in different languages.
                            When I&#39;m not consuming blue light in front of a screen, I&#39;m out and about, I
                            especially like to visit various places and take photos of them.
                            Feel free to browse around my various profiles and let&#39;s connect on Linkedin!</p>
                    </div>
                    <div className="mt-10 workandedu">
                        <div className={"mb-3 text-7xl font-black gradienttext"}>Work and Education</div>
                        <div
                            className={"grid grid-cols-1 grid-rows-3 gap-10 md:grid-cols-1 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 xl:grid-cols-2 xl:grid-rows-2 2xl:grid-cols-3 2xl:grid-rows-1"}>
                            <div className={"p-10 text-white rounded-xl shadow gradientbackground"}>
                                <p className={"text-2xl mb-0.5 text-left"}><a href={"https://htlstp.ac.at"}>HTL
                                    St.Pölten</a><br/> Informatik Matura</p>
                                <p className={"text-xl"}>2017-2022</p>
                            </div>
                            <div className={"p-10 text-white rounded-xl shadow gradientbackground"}>
                                <p className={"text-2xl mb-0.5 text-left"}><a href={"https://bernard-gruppe.com"}>RED
                                    Bernard GmbH</a><br/>Internship</p>
                                <p className={"text-xl"}>2020-2022</p>
                            </div>
                            <div className={"p-10 text-white rounded-xl shadow gradientbackground"}>
                                <p className={"text-2xl mb-0.5 text-left"}><a href={"https://gdv-dl.de"}>GDV-DL GmbH</a><br/> Azubi
                                    FiAe</p>
                                <p className={"text-xl"}>2023-present</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SocialLinks></SocialLinks>
        </div>
    );
// <!-- <div className="p-10 skills glassbackground"> hello world</div>-->
}
