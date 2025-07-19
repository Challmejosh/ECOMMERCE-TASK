import { useEffect } from "react";
import DesktopNav from "../components/DesktopNav";
import { useDispatch } from "react-redux";
import { load } from "../libs/redux/slice/cartSlice";
import { loadWish } from "../libs/redux/slice/wishlistSclice";
import {ToastContainer} from "react-toastify"
import Footer from "../components/footer";
import { MobileNav } from "../components/MobileNav";
const AppLayout = ({children}:{children:React.ReactNode}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(load())
        dispatch(loadWish())
    },[])
    return ( 
        <div className="w-full">
            <ToastContainer />
            <DesktopNav />
            <MobileNav />
            <div className="min-h-dvh  ">
                {children}
            </div>
            <Footer />
        </div>
     );
}
 
export default AppLayout;