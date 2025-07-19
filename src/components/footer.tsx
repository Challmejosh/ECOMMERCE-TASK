import { Send } from "lucide-react";
import { Link } from "react-router-dom";
import copyright from "../assets/icon-copyright.svg"
import qrcode from "../assets/qr-code.svg"
import google from "../assets/GooglePlay.svg"
import apple from "../assets/AppStore.svg"
const Footer = () => {
    const links: {text:string,link:string}[] = [
        {text:"my account",link:"/account"},
        {text:"login  /  register",link:"/signup"},
        {text:"cart",link:"/cart"},
        {text:"wishlist",link:"/wishlist"},
        {text:"shop",link:"/shop"},
    ] 
    const quick: {text:string,link:string}[] = [
        {text:"privacy policy",link:"/privacy-policy"},
        {text:"terms of use",link:"/terms-of-use"},
        {text:"FAQ",link:"/faq"},
        {text:"contact",link:"/contact"},
    ] 
    return ( 
        <footer className="p-4 sm:p-8 lg:px-[135px] lg:py-[80px] h-full relative bg-black w-full flex flex-col items-center justify-center gap-6 text-[#FAFAFA] ">
            <div className=" my-3 w-full grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-start justify-center ">
                <div className="flex flex-col gap-3 items-start justify-center w-full ">
                    <h2 className="capitalize text-[24px] font-semibold ">exclusive</h2>
                    <p className="capitalize text-[20px] font-medium ">subscribe</p>
                    <p className="">Get 10% off your first order</p>
                    <div className="w-full flex items-center justify-start gap-3 p-2 border rounded-sm border-white  ">
                        <input title="newsletter" placeholder="Enter your email" type="text" className="flex w-full py-1 px-3 focus:outline-none " />
                        <Send color="white" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-center w-full ">
                    <p className="capitalize text-[20px] font-medium ">support</p>
                    <p className="">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className="">exclusive@gmail.com</p>
                    <p className="">+88015-88888-9999</p>
                </div>
                <div className="flex flex-col gap-3 items-start justify-center w-full ">
                    <p className="capitalize text-[20px] font-medium ">Account</p>
                    {links?.map((item,index)=>(
                        <Link to={item.link} className=""key={index}>
                            {item.text} 
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-3 items-start justify-center w-full ">
                    <p className="capitalize text-[20px] font-medium ">quick link</p>
                    {quick?.map((item,index)=>(
                        <Link to={item.link} className=""key={index}>
                            {item.text} 
                        </Link>
                    ))}

                </div>
                <div className="flex flex-col gap-3 items-start justify-center w-full ">
                    <p className="capitalize text-[20px] font-medium ">download app</p>
                    <div className="flex flex-col gap-3 items-start justify-center ">
                        <p className="">Save $3 with App New User Only</p>
                        <div className="flex items-start justify-start ">
                            <img src={qrcode} alt={qrcode} className="w-1/2 h-full " />
                            <div className="flex flex-col gap-3 items-start justify-center  ">
                                <img src={google} alt={qrcode} className="w-full h-full " />
                                <img src={apple} alt={qrcode} className="w-full h-full " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-[#F9F9F933] absolute bottom-0 flex gap-2 items-center justify-center">
                <img src={copyright} alt={copyright} className="" />
                <p className="">Copyright Rimel {new Date().getFullYear()}. All right reserved</p>
            </div>
        </footer>
     );
}
 
export default Footer;