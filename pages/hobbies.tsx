import {useState} from "react";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/social";
import styles from "../styles/Home.module.css";
import MenuOverlay from "../components/MenuOverlay";
import Image from "next/image";
import {Client, Models, Storage} from "appwrite";
import BlurImage from "../components/blurimage";
import Gallery from "../components/Gallery";


export default function HobbiesProjects({files}) {
    const [navbarOpen, setNavbarOpen] = useState(false);


    return (
        <div className={styles.bgimg}>
            <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></Navbar>
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></MenuOverlay>

            <div className={"h-full px-10 flex text-black items-center justify-center flex-grow flex-col"}>
                <div
                    className="shortaboutme gradientbackground shadow text-white rounded-2xl drop-shadow-2xl p-10 flex items-center justify-center flex-col">
                    <h1 className={"text-6xl font-black "}>I like to take pictures. Lot&#39;s of them.</h1><br/>

                    <p>Wanna see some?</p>

                </div>
                    <div className='gap-1 columns-3 mt-10'>
                    {files.map((url) => (
                        <img src={url} key={url} className={"w-full mb-1 rounded-2xl"}/>
                    ))}
                </div>
            </div>
            <SocialLinks/>
        </div>
    )
}

export async function getStaticProps() {
    const client = new Client();

    client
        .setEndpoint('https://appwrite.niklas.tech/v1')
        .setProject('64b6b4ca36481febbb70');


    const storage = new Storage(client)

    const promise = storage.listFiles("64b6f78890ebd08b8d99")


    const files: Models.File[] = await promise.then((response) => {
        return response.files;
    });

    const fileurls: string[] = []

    files.forEach((file) => {
        fileurls.push(storage.getFilePreview("64b6f78890ebd08b8d99", file.$id).href)
    })



    return {props: {'files': fileurls}}
}