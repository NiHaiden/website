import {useState} from "react";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/social";
import styles from "../styles/Home.module.css";
import MenuOverlay from "../components/MenuOverlay";
import {getFileUrls} from "../components/service/appwrite.service";
import ProjectCard from "../components/ProjectCard";
import GridImage from "../components/GridImage";

export default function HobbiesProjects({ files }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className={styles.bgimg}>
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></Navbar>
      <MenuOverlay
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      ></MenuOverlay>
        <div
            className={
                "flex flex-col flex-grow justify-center items-center px-10 h-full text-black"
            }
        >

            <h1 className={"text-8xl font-black gradienttext"}>Projects</h1>
            <div className={"w-full mt-6 mb-6 grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-5 gap-0"}>
                <ProjectCard title={"Aries, your personal PaaS."}
                             description={"Exploring a client-server-agent architecture and the various elements of Spring is one of the goals of this project." +
                                 " I want to explore building a personal Platform-as-a-Service from scratch. Remix + Spring + a Docker Agent is the end-goal."}/>
                <ProjectCard title={"Holà, a personal dashboard."}
                             description={"Holá is a personal project where I intend to learn RemixJS by building a Full-Stack JavaScript App " +
                                 "where a user can add various links to selfhosted applications."}/>
                <ProjectCard title={"Aurora, a personalized Linux OS."}
                             description={"Aurora is a container-like OS Image built on top of Fedora Kinoite and " +
                                 "features various customizations and built-in tools to get started quicker when setting up a new development machine."}/>
            </div>
            <h1 className={"text-8xl font-black gradienttext"}>Photography</h1>
            <div className="gap-1 mt-10 columns-1 md:columns-2 lg:columns-3">
                {files.map((url) => (
                    <GridImage key={url} url={url}/>
                ))}
            </div>
        </div>
        <SocialLinks/>
    </div>
  );
}

/*this gets the file urls from the appwrite server*/
export async function getServerSideProps() {
    return {props: {files: await getFileUrls()}};
}
