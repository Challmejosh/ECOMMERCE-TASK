import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../../libs/redux/store";
import EachCart from "./components/EachCart";
import { checkout, update } from "../../../libs/redux/slice/cartSlice";
import { ShoppingBasketIcon } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../libs/firebase/firebase";
import { toast } from "react-toastify";

const Index = () => {
    const cart = useSelector((state:RootState)=>state.cart.cart)
    const subtotal = cart.reduce((acc, item) => acc + item.quantity * (item.discount ?? item.price ?? 0),0);
    const dispatch = useDispatch()
    const handleCart = ()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(checkout())
            return 
        }else{
            toast("login to proceed")
            return
        }
        });
    }
    return ( 
        <div className="p-4 sm:p-8 lg:px-[135px] w-full flex flex-col gap-10 items-center justify-center ">
            <div className="w-full flex items-center justify-start">
                <Link to={"/"} className="capitalize flex items-center justify-start gap-3 ">
                    <span className="text-slate-500 ">
                        home
                    </span>
                    <span className="text-slate-500">
                        /
                    </span>
                    <span className="">
                        cart
                    </span>
                </Link>
            </div>
            {cart.length>0&&<div className="w-full flex flex-col gap-4 items-center justify-center ">
                    <EachCart 
                    cart={cart}
                    />
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between w-full ">
                    <Link to="/" className="py-4 px-12 border border-[#00000080] hover:text-[#fafafa] hover:bg-[#DB4444] bg-[#FAFAFA] text-[16px] rounded-sm capitalize ">
                        return to shop
                    </Link>
                    <div onClick={()=>dispatch(update(cart))} className="py-4 px-12 border border-[#00000080] hover:text-[#fafafa] hover:bg-[#DB4444] bg-[#FAFAFA] text-[16px] rounded-sm capitalize ">
                        update cart
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center lg:flex-row w-full lg:items-start lg:justify-between ">
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-center lg:justify-start gap-3 w-full ">
                        <input placeholder="Coupon Code" type="text" className="p-4 focus:outline-none border border-[#00000080] text-[16px] rounded-sm capitalize " />
                        <div className="py-4 px-12 cursor-pointer text-[#fafafa] bg-[#DB4444] text-[16px] rounded-sm capitalize ">
                            apply coupon
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-center w-full sm:w-[470px] border border-[#000000] p-3 rounded-md ">
                        <p className="capitalize font-medium text-[20px] ">cart total</p>
                        <div className="w-full ">
                            <div className=" text-[16px] flex border-b border-b-[#f5f5f5] p-2 items-center justify-between w-full ">
                                <p className="">Subtotal:</p>
                                <p className="">${subtotal}</p>
                            </div>
                            <div className=" text-[16px] flex border-b border-b-[#f5f5f5] p-2 items-center justify-between w-full ">
                                <p className="">Shipping:</p>
                                <p className="">Free</p>
                            </div>
                            <div className=" text-[16px] flex border-b border-b-[#f5f5f5] p-2 items-center justify-between w-full ">
                                <p className="">Total:</p>
                                <p className="">${subtotal}</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center ">
                            <div onClick={handleCart} className=" py-4 px-12 text-[#f5f5f5] bg-[#DB4444] text-[16px] cursor-pointer rounded-sm capitalize ">
                                proceed to checkout
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {cart.length<1&&
                <p className="flex gap-3 items-center justify-center w-full ">
                    <ShoppingBasketIcon /> cart is empty
                </p>
            }
        </div>
     );
}
 
export default Index;