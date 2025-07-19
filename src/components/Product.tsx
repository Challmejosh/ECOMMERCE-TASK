import { Eye, Heart, Star, Trash2 } from "lucide-react"
import type { ProductType } from "../utils/types"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../libs/redux/slice/cartSlice"
import { Link, useLocation } from "react-router-dom"
import { clickWishlist } from "../libs/redux/slice/wishlistSclice"
import type { RootState } from "../libs/redux/store"

interface Prop {
    products: ProductType[]
}
const Product =({products}:Prop)=>{
    const dispatch = useDispatch()
    const wishlist = useSelector((state:RootState)=>state.wishlist.wishlist)
    const location = useLocation()
  return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 xl:grid-cols-4 items-start justify-center " >
            {products?.map((product)=>(
                <div key={product.id} className="min-w-[250px] w-full group flex flex-col gap-4 items-center justify-center  ">
                    <div  className="relative rounded-sm w-full flex items-center justify-center h-[250px] bg-[#F5F5F5] ">
                        <img src={product.thumbnail} alt={product.title} className=" w-[150px] h-[150px] object-contain " />
                        {product.percent&&<p className={`absolute top-3 left-5 text-xs w-fit py-1 px-3 rounded-md flex items-center justify-center text-[#fafafa] bg-[#DB4444] `}>
                            -{product.percent}% 
                        </p>}
                        {product.news&&<p className={`absolute uppercase top-3 left-5 text-xs w-fit py-1 px-3 rounded-md flex items-center justify-center text-[#fafafa] bg-[#00FF66] `}>
                            {product.news}
                        </p>}
                        <div className="absolute top-3 right-3 flex flex-col gap-3 items-center justify-center h-fit w-fit " >
                            {wishlist.find(item=>item?.id===product.id)&&location.pathname=="/wishlist" ? 
                                <div onClick={()=>dispatch(clickWishlist(product))} className="bg-white p-1 flex items-center justify-center rounded-full cursor-pointer ">
                                    <Trash2  />
                                </div>
                            :
                                <>
                                    <Heart onClick={()=>dispatch(clickWishlist(product))} className=" cursor-pointer " />
                                    <Eye className=" cursor-pointer " />
                                </>
                            }
                        </div>
                        <div onClick={()=>dispatch(add({product,quantity:1}))} className="cursor-pointer z-50 py-2 px-5 rounded-b-sm absolute bottom-0 hidden w-0 group-hover:w-[100%] group-hover:flex duration-300 transfrom transition-all  bg-black text-white items-center justify-center text-center capitalize ">
                            add to cart
                        </div>
                    </div>
                    <Link to={`/product/${product.id}`} className="w-full flex flex-col items-start justify-center gap-3" >
                        <p className="font-semibold line-clamp-2 text-[16px]  ">
                            {product.title}
                        </p>
                        <div className={` ${product.discount?"flex flex-col gap-3 items-start justify-center ":" flex items-center justify-start gap-3 "} `}>
                            <div className="font-medium flex gap-2 text-[16px] items-center justify-start ">
                                {product.discount&&<p className="text-[#DB4444] ">
                                    ${product.discount}
                                </p>}
                                {product.price&&<p className={` ${!product.discount ? "text-[#DB4444]  ":"line-through"}   `}>
                                    ${product.price}
                                </p>}
                            </div>
                            <p className="text-[#000000] font-medium flex items-center justify-start gap-1">
                                {[1,2,3,4,5].map((index)=>(
                                    <span key={index} >
                                        {index<product.stars?<Star color="#FFAD3" fill="#FFAD33" /> : <Star color="#F5F5F5" fill="#F5F5F5" /> }
                                    </span>
                                ))} 
                                ({product.reviews})
                            </p>
                        </div>
                        <div className="flex items-center justify-start w-full gap-2 ">
                            {product.color?.map((item,indx)=>(
                                <p style={{ backgroundColor: item }} key={indx} className={`${indx===0&&"border-2"} w-[20px] h-[20px] rounded-full `} />
                            ))}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default Product