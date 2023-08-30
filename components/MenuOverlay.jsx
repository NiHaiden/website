export default function MenuOverlay({navbarOpen, setNavbarOpen}) {
    return (<nav className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 gradientbackground transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
    }`}>
        <ul className={"w-full flex flex-col items-center justify-center text-center"}>
            <li className={"flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out"}>
                <a className={"h-full w-full py-2 text-4xl text-white"} onClick={() => {
                    setNavbarOpen(false);
                }} href={"aboutme"}>About Me</a></li>
            <li className={"flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out"}>
                <a className={"h-full w-full py-2 text-4xl text-white"} onClick={() => {
                    setNavbarOpen(false);
                }} href={"hobbies"}>Hobbies and Projects</a></li>
            <li className={"flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out"}>
                <a className={"h-full w-full py-2 text-4xl text-white"}
                   onClick={() => {
                       setNavbarOpen(false);
                   }} href={"https://appwrite.niklas.tech/v1/storage/buckets/64ef6a6d3dd6478ea89a/files/64ef6a75a9590e107064/view?project=64b6b4ca36481febbb70"}>
                    Resumè
                </a>
            </li>

        </ul>
    </nav>);

}
