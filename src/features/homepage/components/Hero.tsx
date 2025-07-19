import HeroIphone from "../../../assets/hero_iphone.svg"
import Apple from "../../../assets/apple.svg"
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Listcategory from "./List-category";
const Hero = () => {
    return ( 
        <div className=" p-4 sm:p-8 lg:px-[135px] h-full flex flex-wrap-reverse xl:flex-nowrap items-start justify-start gap-5 ">
            <Listcategory />
            <div className="bg-[#F5F5F5] h-[365px] hidden xl:block w-[1px] " />
            <div className="py-3 w-full ">
                <div className="bg-black w-full p-3 flex flex-col lg:flex-row gap-3 items-center justify-evenly
                 ">
                    <div className=" w-full p-6 flex flex-col gap-4 items-start justify-center ">
                        <div className="w-full flex items-center justify-start gap-3 ">
                            <img src={Apple} alt="hero section" className="" />
                            <p className="text-[#FAFAFA] ">iphone 14 Series</p>
                        </div>
                        <div className="">
                            <h2 className="text-5xl text-[#FAFAFA] ">
                                Up to 10% <br /> off Voucher
                            </h2>
                            <Link to="/" className="flex items-center justify-start gap-4 " >
                                <p className="capitalize">
                                    shop now
                                </p>
                                <ArrowRight />
                            </Link>
                        </div>
                    </div>
                    <img src={HeroIphone} alt="hero section" className="w-full h-full " />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;