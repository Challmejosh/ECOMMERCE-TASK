import { HeadphonesIcon, ShieldCheck, Truck } from "lucide-react";
import BannerOne from "../components/banner-one";
import Category from "../components/category";
import ExploreProject from "../components/explore-project";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Month from "../components/this-month";
import Today from "../components/Today";
const Index = () => {

    return ( 
        <div className="w-full flex flex-col gap-8 items-center justify-center ">
            <Hero />
            <Today />
            <div className="p-4 sm:p-8 lg:px-[135px] h-full w-full flex-col flex gap-14 ">
                <p className="w-full h-[1px] bg-[#f5f5f5] " />
                <Category />
                <p className="w-full h-[1px] bg-[#f5f5f5] " />
            </div>
            <Month />
            <BannerOne />
            <ExploreProject />
            <Featured />
            <div className=" p-4 sm:p-8 lg:px-[135px] flex flex-col gap-3 items-center justify-center ">
                <div className=" p-4 sm:p-8 lg:py-[50px] lg:px-[116px] grid md:grid-cols-3 items-center justify-center ">
                    <Service 
                    children={<Truck size={25} color="white" />}
                    text={"Free delivery for all orders over $140"}
                    title={"FREE AND FAST DELIVERY"}
                    />
                    <Service 
                    children={<HeadphonesIcon size={25} color="white" />}
                    text={"Friendly 24/7 customer support"}
                    title={"24/7 CUSTOMER SERVICE"}
                    />
                    <Service 
                    children={<ShieldCheck size={25} color="white" />}
                    text={"We reurn money within 30 days"}
                    title={"MONEY BACK GUARANTEE"}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Index;
interface ServiceProp{
    children: React.ReactNode
    title: string
    text:string
}
const Service = ({children,title,text}:ServiceProp)=>{
    return(
        <div className="flex flex-col gap-4 items-center justify-center w-full ">
            <div className="bg-[#c1c0c1] rounded-full w-[80px] h-[80px] flex items-center justify-center ">
                <p className="bg-[#2F2E30] w-[60px] h-[60px] rounded-full flex items-center justify-center ">
                    {children}
                </p>
            </div>
            <h2 className="text-[20px] text-center uppercase font-semibold ">{title}</h2>
            <h2 className="text-sm text-center ">{text}</h2>
        </div>
    )
}