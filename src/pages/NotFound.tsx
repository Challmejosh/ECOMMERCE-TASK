import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return ( 
        <div className=" p-4 sm:p-8 lg:px-[135px] flex flex-col items-center justify-between gap-15 ">
            <Link to={"/"} className="flex gap-3 items-center justify-start w-full" >
                <span className="text-slate-500">home</span>
                <span className="text-slate-500">/</span>
                <span className="">Error</span>
            </Link>
            <div className="flex flex-col gap-15 items-center justify-center ">
                <p className="uppercase text-center text-3xl sm:tex-7xl lg:text-9xl ">404 not found</p>
                <p className="text-lg text-center">Your visited page not found. You may go home page.</p>
            </div>
            <div className="w-full flex items-center justify-center ">
                <div onClick={()=>navigate("/")} className="py-4 px-6 bg-[#DB4444] rounded-sm text-[#fafafa] flex items-center justify-center text-center ">
                    Back to home page
                </div>
            </div>
        </div>
     );
}
 
export default NotFound;