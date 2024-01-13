import { useState } from "react";
import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = [
    "Home",
    "About",
    "Services",
    "Pricing",
    "Contact",
];

const Nav = ({ onClickShoppingBtn }) => {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

    return (
        <nav className="relative z-10 flex flex-wrap items-center justify-between">
            {/* logo */}
            <a href="#">
                <NikeLogo className="h-20 w-20 dark:fill-white" />
            </a>
            {/* burger button */}
            <button onClick={() => setIsMobileMenuShown(!isMobileMenuShown)} className="dark:text-gray-400 dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 p-2 rounded-md hover:bg-gray-100 lg:hidden">
                <RxHamburgerMenu size={25} />
            </button>

            {/* menu list */}
            <div className={`${isMobileMenuShown === false && "hidden"} w-full lg:block lg:w-auto`}>
                <ul className="lg:space-x-8 flex flex-col lg:flex-row border border-gray-100 lg:border-none bg-gray-50 lg:bg-transparent text-lg rounded-md p-4 lg:dark:text-white">
                    {ROUTES.map((route, i) => {
                        return (
                            <li 
                                className={`lg:hover:bg-transparent lg:hover:text-blue-600 px-3 py-2 cursor-pointer rounded ${i === 0 ? "bg-blue-800 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-200"} ${(i == 3 || i == 4) && "lg:text-white"}`} 
                                key={route}>{route}
                            </li>    
                        )
                    })}
                </ul>
            </div>

            {/* cart button */}
            <div onClick={onClickShoppingBtn} className="btn-press-anima fixed left-4 bottom-4 lg:static lg:mr-8">
                <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md cursor-pointer">
                    <TbShoppingBag />
                </div>
            </div>
        </nav>
    )
}

export default Nav;