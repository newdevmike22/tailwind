import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = [
    "Home",
    "About",
    "Services",
    "Pricing",
    "Contact",
];

const Nav = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between">
            {/* logo */}
            <a href="#">
                <NikeLogo className="h-20 w-20" />
            </a>
            {/* burger button */}
            <button className="focus:ring-2 focus:ring-gray-300 p-2 rounded-md hover:bg-gray-100">
                <RxHamburgerMenu size={25} />
            </button>

            {/* nav list */}
            <div className="w-full">
                <ul className="border border-gray-100 bg-gray-50 text-lg rounded-md p-4">
                    {ROUTES.map((route, i) => {
                        return (
                            <li className={`px-3 py-2 cursor-pointer rounded ${i === 0 ? "bg-blue-800 text-white" : "hover:bg-gray-200"}`} key={route}>{route}</li>    
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;