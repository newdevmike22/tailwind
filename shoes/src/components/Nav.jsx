import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx"

const Nav = () => {
    return (
        <nav className="flex items-center justify-between">
            {/* logo */}
            <a href="#">
                <NikeLogo className="h-20 w-20" />
            </a>
            {/* burger button */}
            <button className="focus:ring-2 focus:ring-gray-300 p-2 rounded-md hover:bg-gray-100">
                <RxHamburgerMenu size={25} />
            </button>
        </nav>
    )
}

export default Nav;