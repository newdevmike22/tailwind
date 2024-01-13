import Nike1 from "../assets/n1-min.png"
import { QTY, SIZES } from "../constant";
import Select from "./Select";

const Shoe = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
            {/* shoe image */}
            <div className="flex-1 lg:-mt-32 lg:ml-28">
                <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
                    <img className="animate-float" src={Nike1} alt="Nike Air Max 270" />
                </div>
            </div>

            <div className="flex-1 space-y-6">
                {/* shoe text details */}
                <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
                <div className="font-medium md:text-xl">{"The Nike Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."}</div>

                <div className="flex space-x-6">
                    <div className="text-3xl font-extrabold md:text-6xl">$100</div>
                    <Select title={"QTY"} options={QTY} />
                    <Select title={"SIZE"} options={SIZES} />
                </div>

                {/* shoe buttons and links */}
                <div className="space-x-10">
                    <button className="btn-press-anima h-14 w-44 bg-black text-white hover:bg-gray-500 active:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:active:bg-gray-400">Add to Bag</button>
                    <a href="#" className="text-lg font-bold underline underline-offset-4">View Details</a>
                </div>
            </div>
        </div>
    )
}

export default Shoe;