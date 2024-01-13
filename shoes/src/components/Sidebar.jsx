const Sidebar = ({ children, isOpen, onClickClose }) => {
    return (
        <div>
            <div className={`dark:bg-night overflow-y-auto p-5 fixed right-0 top-0 z-50 w-full h-full md:w-[50%] lg:w-[35%] bg-gray-100 transition transform duration-300 shadow-lg ${isOpen ? "translate-x-0" : "translate-x-full" }`}>
                <button onClick={onClickClose} className="absolute right-4 top-4 p-2 text-black font-bold dark:text-white">X</button>
                {children}
            </div>
            {isOpen && (
                <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"/>
            )}
        </div>
    )
}

export default Sidebar;