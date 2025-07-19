import { Link, useLocation, useNavigate } from "react-router-dom";
import {Heart, LogOutIcon, Menu, Search, ShoppingBag, ShoppingCart, Star, User, X} from "lucide-react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../libs/redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../libs/firebase/firebase";
import { logout } from "../libs/firebase/logout";
import { toggle } from "../libs/redux/slice/navSlice";
const DesktopNav = () => {
    const [show,setShow] = useState<boolean>(false)
    const [user,setUser] = useState<boolean>(false)
    const cart = useSelector((state:RootState)=>state.cart.cart)
    const wishlist = useSelector((state:RootState)=>state.wishlist.wishlist)
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navLinks:{link:string,text:string}[] = [
        {link:"/",text:"home"},
        {link:"/contact",text:"contact"},
        {link:"/about",text:"about"},
        {link:"/signup",text:"signup"},
    ]
    const cartLength = cart.reduce((acc, item) => acc + item.quantity, 0);
        useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(true)
                return 
            } 
            });
        },[navigate])
        const logOut = async ()=>{
            await logout()
            navigate("/signup")
            window.location.reload()
        }
    return ( 
        <header className="p-4 sm:p-8 lg:px-[135px] relative pb-2 pt-5 border-b border-b-[#F5F5F5] ">
            {/* Desktop */}
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between w-full ">
                    <h1 className=" text-2xl font-bold capitalize ">exclusive</h1>
                    {/* for dexktop */}
                    <nav className="hidden lg:flex items-center justify-center gap-4">
                        {navLinks?.map((item,index)=>(
                            <Link key={index} to={item.link} className={`capitalize group `}>
                                <p className="text-[16px] ">{item.text}</p>
                                <p className={` ${location.pathname===item.link&&"w-[100%] "} duration-300 transform transition-all group-hover:w-[100%] w-[0px] h-[1px] bg-[#000000] `} />
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className=" w-full flex items-center justify-end gap-8">
                    {/* for desktop */}
                    <div className="hidden bg-[#F5F5F5] p-1 px-2 rounded-md lg:flex gap-2 items-center justify-start">
                        <input 
                        placeholder="What are you looking for?"
                        type="text" 
                        className="flex w-full focus:outline-none py-2 px-3 " />
                        <Search />
                    </div>
                    <Link to={"/wishlist"} className="relative h-[50px] flex items-center justify-center w-[50px] " >
                        <Heart />
                        <p className="absolute top-0 z-20 w-[20px] h-[20px] p-1 text-xs flex items-center justify-center rounded-full text-white bg-[#DB4444] right-0 ">{wishlist.length?wishlist.length:0}</p>
                    </Link>
                    <Link to="/cart" className="relative h-[50px] flex items-center justify-center w-[50px] ">
                        <ShoppingCart />
                        <p className="absolute top-0 z-20 w-[20px] h-[20px] p-1 text-xs flex items-center justify-center rounded-full text-white bg-[#DB4444] right-0 ">{cartLength}</p>
                    </Link>
                    {user&&<div onClick={()=>setShow(prev=>!prev)} className="cursor-pointer hidden lg:block  ">
                        <User />
                    </div>}
                    <Menu onClick={()=>dispatch(toggle())} className="lg:hidden  " />

                </div>
            </div>
            {show&&
            <div className=" hidden absolute top-20 right-35 text-white lg:flex flex-col gap-3 items-start justify-center w-[224px] rounded-sm p-3 shadow backdrop-blur-2xl bg-gradient-to-tr to-[#959295] from-[#8d6791] via-[#504351] ">
                <DropDown 
                icon={<User />}
                text="manage your account"
                />
                <DropDown 
                icon={<ShoppingBag />}
                text="my order"
                />
                <DropDown 
                icon={
                    <p className="border-[2px] border-white rounded-full flex items-center justify-center " > <X /> </p>
                }
                text="my cancellations"
                />
                <DropDown 
                icon={
                    <Star />
                }
                text="my reviews"
                />
                <DropDown 
                onClick={logOut}
                icon={
                    <LogOutIcon />
                }
                text="logout"
                />
            </div>
            }
            
        </header>
     );
}
 
export default DesktopNav;
interface DropProp{
    icon: React.ReactNode
    text:string
    onClick?:()=>void
}
export const DropDown = ({icon,text,onClick}:DropProp)=>{
    return (
        <div onClick={onClick} className=" w-full flex gap-2  font-medium cursor-pointer items-center justify-start text-sm ">
            {icon}
            <p className="capitalize">{text}</p>
        </div>
    )
}

