import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constant";

const CartItem = ({ item }) => {
    return (
        <div className="cursor-pointer bg-gray-100 hover:bg-[#DAFFA2] p-2 space-y-2">
            <div className="flex space-x-2">
                {/* Image */}
                <img className="h-24" src={item.src} alt={item.title} />
                <div className="space-y-2">
                    {/* title and description */}
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                </div>
                {/* price */}
                <div className="font-bold">${item.price}</div>
            </div>

            <div className="flex justify-between pl-32">
                <div className="flex space-x-6">
                    <div>
                        <div className="font-bold">SIZE</div>
                        <Select title="" options={SIZES} />
                    </div>
                    <div>
                        <div className="font-bold">QTY</div>
                        <Select title="" options={QTY} />
                    </div>
                </div>
                <button>
                    <CiTrash size={25} className="text-black" />
                </button>
            </div>
        </div>
    )
}

export default CartItem;