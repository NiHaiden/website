import { useState } from "react";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/social";
import styles from "../styles/Home.module.css";
import MenuOverlay from "../components/MenuOverlay";
import { Client, Models, Storage } from "appwrite";

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
        <div className="flex flex-col justify-center items-center p-10 w-full text-white rounded-2xl shadow drop-shadow-2xl shortaboutme gradientbackground">
          <h1 className={"text-5xl font-black"}>
            I like to take pictures. Lot&#39;s of them.
          </h1>
          <br />

          <p>Wanna see some?</p>
        </div>
        <div className="gap-1 mt-10 columns-1 md:columns-2 lg:columns-3">
          {files.map((url) => (
            <img
              src={url}
              key={url}
              className={"mb-3 w-full rounded-3xl drop-shadow-md aspect-auto"}
            />
          ))}
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}

/*this gets the file urls from the appwrite server*/
export async function getStaticProps() {
  const client = new Client();

  client
    .setEndpoint("https://appwrite.niklas.tech/v1")
    .setProject("64b6b4ca36481febbb70");

  const storage = new Storage(client);

  const promise = storage.listFiles("64b6f78890ebd08b8d99");

  const files: Models.File[] = await promise.then((response) => {
    return response.files;
  });

  const fileurls: string[] = [];

  files.forEach((file) => {
    fileurls.push(
      storage.getFilePreview("64b6f78890ebd08b8d99", file.$id, undefined, 700).href
    );
  });

  return { props: { files: fileurls } };
}
