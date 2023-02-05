import styles from "../styles/Home.module.css";
import styleAboutMe from "../styles/Aboutme.module.css";
import Navbar from "../components/Navbar";
import {useState} from "react";
import MenuOverlay from "../components/MenuOverlay";
import SocialLinks from "../components/social";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(faBookOpen);
export default function AboutMe() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className={styles.bgimg}>
            <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></Navbar>
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></MenuOverlay>


            <div className={"h-full px-10 flex text-white items-center justify-center flex-grow flex-col"}>
                <div className="aboutmecontainer">
                    <div className="workandedu glassbackground p-10"><h1 className={"text-2xl"}>My Work Experience and Education</h1>
                    <p><img src={"/icons/school-solid.svg"} width={40} height={40} alt={"School Symbol"}/>HTL St.Pölten Informatik Matura<br/>2017-2022</p></div>
                    <div className="skills glassbackground p-10"> hello world</div>
                    <div className="shortaboutme glassbackground p-10 flex items-center justify-center flex-col">
                        <h1 className={"text-4xl"}>Hi. My Name is Niklas!</h1><br/>

                        <p>I am currently employed as a civl servant (&quot;Zivildiener&quot;) in my mandatory military service. I am 20 years old and I love working with computers and various different technologies. My interests reach from DevOps to Software Engineering and everything inbetween. When I am not sitting in front of my computer, I like to travel and take lots of beautiful pictures, some of which you can find on my Instagram page ;).  </p>
                    </div>
                </div>
            </div>

            <SocialLinks></SocialLinks>
        </div>
    );
    // https://paste.niklas.life/ugeyufuvag.sql
}
