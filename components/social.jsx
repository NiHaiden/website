export default function SocialLinks() {
    return (
        <div className={"flex justify-center gap-8 items-center fill-white mb-3 md:justify-end md:mr-4"}>
            <div className={"flex icons-gradient justify-center items-center gap-8 gradientborder p-3 rounded-3xl"}><a
                href={"https://instagram.com/nklsh.jpeg"} target={"_blank"} rel={"noreferrer"}> <img
                src={"/icons/instagram.svg"} width={35}
                height={60}/></a>
                <a href={"https://github.com/NiHaiden"} target={"_blank"} rel={"noreferrer"}><img
                    src={"/icons/github.svg"} width={35} height={60}/></a><a
                    href={"https://www.linkedin.com/in/niklas-haiden-352853123/"} target={"_blank"}
                    rel="noreferrer"><img src={"/icons/linkedin-in.svg"}
                                          width={35}
                                          height={60}/></a>
                <a href={"mailto:nkls@duck.com"}><img
                    src={"/icons/envelope-regular.svg"}
                    width={35} height={60}/></a></div>
        </div>
    );
}