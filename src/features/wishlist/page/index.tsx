import { useSelector } from "react-redux";
import type { RootState } from "../../../libs/redux/store";
import Product from "../../../components/Product";
import { Link } from "react-router-dom";
import { ShoppingBasket } from "lucide-react";
import { Products } from "../../../utils/data";

const Index = () => {
    const wishlist = useSelector((state:RootState) => state.wishlist.wishlist )
    return ( 
        <div className="p-4 sm:p-8 lg:px-[135px] w-full flex flex-col gap-3 items-center justify-center  ">
            {wishlist.length>0&&
            <>
                <div className="flex flex-col gap-8 items-start justify-center w-full ">
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between w-full ">
                        <p className="capitalize">
                            wishlist ({wishlist.length})
                        </p>
                        <div className="px-[48px] capitalize rounded-sm cursor-pointer py-[12px] flex items-center justify-center border border-[#00000080] ">
                            move all to bag
                        </div>
                    </div>
                    <Product products={wishlist} />
                </div>
                <div className="flex flex-wrap sm:flex-nowrap flex-col gap-8 items-start justify-center w-full ">
                    <div className="flex items-center justify-between w-full ">
                        <div className="flex gap-3 items-center justify-start">
                            <p className="bg-[#DB4444] rounded-[2px] h-[40px] w-[20px]  " />
                            <h2 className="  text-[#DB4444] capitalize text-[16px] ">just for you</h2>
                        </div>
                        <Link to="/shop" className="px-[48px] capitalize rounded-sm cursor-pointer py-[12px] flex items-center justify-center border border-[#00000080] ">
                            see all
                        </Link>
                    </div>
                    <Product products={Products?.slice(0,4)} />
                </div>
            </>
            }
            {wishlist.length<1&&
                <p className="text-lg text-black flex items-center justify-center w-full "> <ShoppingBasket /> Wish list is empty </p>
            }
        </div>
     );
}
 
export default Index;