import { X, Search, User, ShoppingBag, Star, LogOutIcon } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../libs/redux/slice/navSlice"
import { logout } from "../libs/firebase/logout"
import { Link, useNavigate } from "react-router-dom"
import { DropDown } from "./DesktopNav"
import type { RootState } from "../libs/redux/store"

export const MobileNav = ()=>{
    const dispatch = useDispatch()
    const nav = useSelector((state:RootState)=>state.nav.nav)
    const navigate = useNavigate()
    const navLinks:{link:string,text:string}[] = [
        {link:"/",text:"home"},
        {link:"/contact",text:"contact"},
        {link:"/about",text:"about"},
        {link:"/signup",text:"signup"},
    ]
    const logOut = async ()=>{
        await logout()
        navigate("/signup")
        window.location.reload()
    }
    return (
        <div className={`${nav?"translate-x-0":"translate-x-full"} bg-white duration-300 transform transition-all flex flex-col items-start p-2 gap-5 justify-start w-full h-screen fixed inset-0 z-30 `}>
            <X onClick={()=>dispatch(toggle())} className=" " />
            <div className="bg-[#F5F5F5] p-1 px-2 rounded-md w-full flex gap-2 items-center justify-start">
                <input 
                placeholder="What are you looking for?"
                type="text" 
                className="flex w-full focus:outline-none py-2 px-3 " />
                <Search />
            </div>
            <nav className="flex flex-col w-full items-start justify-center gap-4">
                {navLinks?.map((item,index)=>(
                    <Link key={index} to={item.link} className={`capitalize group w-full `}>
                        <p className="text-[16px] ">{item.text}</p>
                        <p className={` ${location.pathname===item.link&&"w-[100%] "} duration-300 transform transition-all group-hover:w-[100%] w-[0px] h-[1px] bg-[#000000] `} />
                    </Link>
                ))}
            </nav>
            <div className=" flex flex-col gap-4 items-start justify-center w-full ">
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
        </div>
    )
}