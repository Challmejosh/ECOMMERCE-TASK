import { ChevronDown, ChevronUp } from "lucide-react";
import type { CartType } from "../../../../utils/types";
import { useDispatch } from "react-redux";
import { addQuantity, remove } from "../../../../libs/redux/slice/cartSlice";

interface Prop{
    cart: CartType[]
}
const EachCart = ({cart}:Prop) => {
    const dispatch = useDispatch()
    return ( 
        <div className="flex flex-col items-start justify-start p-3 [&::-webkit-scrollbar]:hidden shadow-inner w-full h-full overflow-x-scroll lg:overflow-x-hidden  max-h-[400px] sm:w-full md:h-[400px] gap-3">
            <div className="text-[16px] font-[400] rounded-sm p-4 shadow-sm w-[600px] sm:w-full items-center justify-between grid grid-cols-4">
                <p className="capitalize w-full flex items-center justify-start ">product</p>
                <p className="capitalize w-full flex items-center justify-center ">price</p>
                <p className="capitalize w-full flex items-center justify-center ">quantity</p>
                <p className="capitalize w-full flex items-center justify-center ">subtotal</p>
            </div>
            {cart?.map(product=>(
                <div key={product.uid} className="text-[16px] w-[600px] sm:w-full font-[400] rounded-sm p-4 shadow-sm items-center justify-between grid gap-4 grid-cols-4 ">
                    <div className="w-full flex gap-4 items-center justify-start  ">
                        <img src={product.thumbnail} alt={product.title} className="w-[54px] h-[54px] object-contain " />
                        <p className="text-[16px]  ">{product.title}</p>
                    </div>
                    {(product?.price||product?.discount)&& 
                        <p className=" flex items-center justify-center w-full ">
                            {`$ ${product.discount? product?.discount : product?.price} `}
                        </p>
                    }
                    <div className="w-full flex items-center justify-center ">
                        <div className="flex gap-3 items-center justify-center border-[1.5px] border-[#00000066] p-1 rounded-sm w-[72px] h-[44px]  ">
                            {/* <input title="quantity" inputMode="numeric" pattern="[0-9]" value={product.quantity} type="tel" className="w-[20px] h-[20px]" /> */}
                            <p className="">{product.quantity}</p>
                            <div className="flex flex-col items-center justify-between ">
                                <ChevronUp onClick={()=>dispatch(addQuantity({product,quantity: 1}))} className="cursor-pointer" />
                                <ChevronDown onClick={()=>dispatch(remove({product}))} className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        {product?.price &&!product.discount && (
                            <div className="">
                                ${Math.round(product.price) * product?.quantity}
                            </div>
                        )}
                        {!product?.price && product.discount && (
                            <div className="">
                                ${Math.round(product.discount) * product?.quantity}
                            </div>
                        )}
                        {product?.price && product.discount && (
                            <div className="">
                                ${Math.round(product.discount) * product?.quantity}
                            </div>
                        )}
                    </div>

                </div>
            ))}
        </div>
     );
}
 
export default EachCart;