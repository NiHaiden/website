import Image from "next/image";
import Link from "next/link";

export default function Navbar({navbarOpen, setNavbarOpen}) {
    return (
        <header>
            <nav
                className={"flex flex-wrap navbar items-center justify-between pl-2 w-full py-4 md:py-4 md:pl-4 md:pr-4 text-lg "}>
                <div>
                    <Link href="/" className={"p-0"}>
                        <Image src={"/NH_var2_optimized.svg"} width={85} height={60}></Image>
                    </Link>
                </div>


                <button
                    className="md:hidden flex top-0 right-0 z-20 relative w-20 h-10 text-white focus:outline-none"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <div className="absolute w-10 transform -translate-x-1/2 -translate-y-1/2 left-1.5 top-1/2">
                        <span
                            className={`absolute h-0.5 w-10 bg-black transform transition duration-300 ease-in-out ${navbarOpen ? "rotate-45 delay-200 bg-white" : "-translate-y-1.5"
                            }`}
                        ></span>
                        <span
                            className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${navbarOpen ? "w-0 opacity-50 bg-white" : "w-10 delay-200 opacity-100"
                            }`}
                        ></span>
                        <span
                            className={`absolute h-0.5 w-10 bg-black transform transition duration-300 ease-in-out ${navbarOpen ? "-rotate-45 delay-200 bg-white" : "translate-y-1.5"
                            }`}
                        ></span>
                    </div>
                </button>

                <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul
                        className="
              pt-10
              text-2xl text-black
              md:flex
              md:justify-between
              md:pt-0
              hover:text-white
              gap-1
              "
                    >
                        <li>
                            <a className="p-1.5 py-2 text-black block group transition duration-300 linkslide  hover:text-white p-3 rounded-3xl"
                               href="aboutme"
                            >
                                <div
                                    className={"text-black text-transparent bg-clip-text bg-gradient-to-br from-startingblue to-endingpurple hover:text-white p-1.5"}>About
                                    Me
                                </div>
                            </a
                            >
                        </li>
                        <li>
                            <a className=" py-2 text-black block group transition duration-300 linkslide hover:text-white p-3"
                               href="hobbies"
                            >
                                <div
                                    className={"text-black text-transparent bg-clip-text bg-gradient-to-br from-startingblue to-endingpurple hover:text-white p-1.5"}>Hobbies
                                    and Projects
                                </div>
                            </a
                            >
                        </li>
                        <li>
                            <a className="  py-2 text-black block group transition duration-300 linkslide hover:text-white p-3"
                               href="aboutme"
                            >
                                <div
                                    className={"text-black text-transparent bg-clip-text bg-gradient-to-br from-startingblue to-endingpurple hover:text-white p-1.5"}>Resumè
                                </div>
                            </a
                            >
                        </li>


                    </ul>
                </div>
            </nav>
        </header>

    );
}

function closeOpenMenu() {
    const button = document.querySelector('#menubtn');
    const menu = document.querySelector('#menu');

    menu.classList.toggle('hidden');
    menu.style.zIndex = 999;
}
