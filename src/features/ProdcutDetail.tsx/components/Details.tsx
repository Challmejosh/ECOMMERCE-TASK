import { Heart, Minus, Plus, RefreshCcw, Star, Truck } from "lucide-react";
import type { ProductType } from "../../../utils/types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../../libs/redux/slice/cartSlice";

const Details = ({product}:{product: ProductType}) => {
    const dispatch = useDispatch()
    const [productSize,setProductSize] = useState<"xs"|"m"|"s"|"l"|"xl">(product.size)
    const [quantity,setQuantity] = useState<string>("1")
    const size: ("xs" | "m" | "s" | "l" | "xl")[] = [
         "xs","m","s","l","xl"
    ]
    const addQ = (number: number,)=>{
        const operation = Number(quantity) + number
        setQuantity(String(operation))
    }
    const removeQ = (number: number,)=>{
        const operation = Number(quantity) - number
        const limit = operation === 0 ? 1 :operation
        setQuantity(String(limit))
    }
    return ( 
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-4">
            <div className="flex flex-wrap-reverse sm:flex-nowrap gap-4 items-start justify-center ">
                <div className="flex flex-wrap sm:flex-nowrap sm:flex-col gap-4 items-center justify-center ">
                    {product.image?.map((img,index)=>(
                        <div key={index} className="w-full sm:w-[170px] h-[138px] flex items-center justify-center bg-[#F5F5F5] ">
                            <img src={img} alt={img} className="w-[121px] h-[114px] " />
                        </div>
                    ))}
                </div>
                <div className="w-full sm:w-[400px] lg:w-[500px] h-full sm:h-[600px] bg-[#F5F5F5] flex items-center justify-center ">
                    <img src={product.thumbnail} alt={product.thumbnail} className=" w-full lg:w-[446px] h-full sm:h-[315px] " />
                </div>
            </div>
            <div className=" w-full flex flex-col gap-3 items-start justify-center ">
                <div className="p-2 flex flex-col gap-3 items-start justify-center border-b border-b-[#fafafa] ">
                    <h2 className="text-[24px]  ">{product.title}</h2>
                    <div className="flex gap-2 items-center justify-start ">
                        <p className="text-[#000000] font-medium flex items-center justify-start gap-1">
                            {[1,2,3,4,5].map((index)=>(
                                <span key={index} >
                                    {index<product.stars?<Star color="#FFAD3" fill="#FFAD33" /> : <Star color="#F5F5F5" fill="#F5F5F5" /> }
                                </span>
                            ))} 
                            ({product.reviews + "reviews"})
                        </p>
                        <p className="w-[2px] h-[14px] bg-[#f5f5f5] " />
                        <p className="capitalize text-[#00FF66] ">{product.stock}</p>
                    </div>
                    <p className="text-[24px] ">${product.discount?product.discount.toFixed(2):product.price?.toFixed(2)}</p>
                    <p className="text-sm">
                        {product.description}
                    </p>
                </div>
                <div className="flex flex-col gap-3 items-start justify-center  ">
                    <div className="flex items-center justify-start gap-3">
                        <p className="text-[20px]">Colours:</p>
                        <div className="flex items-center justify-start w-full gap-2 ">
                            {product.color?.map((item,indx)=>(
                                <p key={indx} className={`${indx===0&&"border"} bg-[${item}] w-[20px] h-[20px] rounded-full `} />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-3">
                        <p className="text-[20px]">Size:</p>
                        <div className="flex items-center justify-start gap-2 ">
                            {size.map((item,index)=>(
                                <div onClick={()=>setProductSize(item)} key={index} className={` h-[40px] w-[40px] cursor-pointer ${productSize===item&& " text-white bg-[#DB4444]"} p-2 rounded-sm border flex items-center justify-center uppercase `}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-start gap-3">
                        <div className="flex gap-1 items-center justify-center rounded-sm border w-[159px] h-[44px] ">
                            <p onClick={()=>removeQ(1)} className="w-full border-r h-full font-semibold flex items-center justify-center text-center cursor-pointer hover:bg-[#DB4444] hover:text-[#fafafa] "> <Minus /> </p>
                            <input title="quantity" type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} className="w-full focus:outline-none flex " />
                            <p onClick={()=>addQ(1)} className="w-full border-l h-full font-semibold flex items-center justify-center text-center cursor-pointer hover:bg-[#DB4444] hover:text-[#fafafa] "> <Plus /> </p>
                        </div>
                        <div onClick={()=>dispatch(add({product,quantity: Number(quantity)}))} className="capitalize bg-[#DB4444] h-[44px] cursor-pointer text-[#fafafa] py-[10px] px-[40px] rounded-sm ">
                            buy now
                        </div>
                        <div className="capitalize border h-[44px] cursor-pointer flex items-center justify-center w-fit p-2 rounded-sm ">
                            <Heart />
                        </div>
                    </div>
                    <div className="border border-[#f5f5f5] w-full rounded-md flex flex-col gap-2 items-start justify-center ">
                        <div className="flex items-center justify-start gap-4 p-3 ">
                            <Truck size={40} />
                            <div className="">
                                <p className="capitalize text-[16px] ">free delivery</p>
                                <p className="text-[12px] underline ">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-[#f5f5f5] " />
                        <div className="flex items-center justify-start gap-4 p-3 ">
                            <RefreshCcw size={40} />
                            <div className="">
                                <p className="capitalize text-[16px] ">free delivery</p>
                                <p className="text-[12px]  ">Free 30 Days Delivery Returns. <span className="underline">Details</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Details; 