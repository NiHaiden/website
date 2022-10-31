import styles from "../styles/Home.module.css";
import styleAboutMe from "../styles/Aboutme.module.css";
import Navbar from "../components/Navbar";
export default function AboutMe() {
  return (
    <div className={styles.bgimg}>
      <Navbar></Navbar>
      <div className={styleAboutMe.container}>
        <div className={styleAboutMe.aboutmetext}>Hello, I am Niklas Haiden, currently living near Vienna in the beautiful country of Austria. 
        Since my early childhood, I am interest in computers and all that has to do with it. In June 2022 I received my high school diploma from the department of Informatics at HTL St.Pölten.
        I am currently doing my mandatory service, also called &quot;Zivildienst&quot;. When I am not in front of the computer, I enjoy travelling around, visiting new places and taking pictures with my camera or phone. I also enjoy cycling. </div>
        <div className={styleAboutMe.aboutmeimage}></div>
      </div>
    </div>
  );
}
