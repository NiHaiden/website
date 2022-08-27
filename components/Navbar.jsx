import Image from "next/image";
import styles from "../styles/Navbar.module.css"
export default function Navbar({navbarOpen, setNavbarOpen}) {
    return (
        <header>
            <nav
                className={"flex flex-wrap items-center justify-between w-full py-4 md:py-0 pl-2 text-lg text-white"}>
                <div>
                    <a href="#" className={"pl-0.5"}>
                        <Image src={"/NH_var2_optimized.svg"} width={100} height={55}></Image>
                    </a>
                </div>

                <svg className={" text-white cursor-pointer md:hidden block"} id={"menubtn"} onClick={() => setNavbarOpen(!navbarOpen)}
                     fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="80px" height="40px">
                    <path
                        d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/>
                </svg>

                <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul
                        className="
              pt-10
              pr-4
              text-base text-gray-700
              md:flex
              md:justify-between
              md:pt-0"
                    >
                        <li>
                            <a className="pr-14 py-2 text-white block" href="#"
                            >Blog</a
                            >
                        </li>
                        <li>
                            <a className="py-2 pr-14 block text-white" href="#"
                            >About Me</a
                            >
                        </li>
                        <li>
                            <a className={"transition-all md:p-2 py-2 resume w-28 h-10 text-center block text-white rounded-2xl"} href={"#"}>
                                Resumé
                            </a>
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