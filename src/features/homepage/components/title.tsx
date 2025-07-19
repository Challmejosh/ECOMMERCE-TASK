import { ArrowLeft, ArrowRight } from "lucide-react";

interface Prop{
    largeText: string
    title: string
    show?: boolean
    children?:React.ReactNode
    arrow: boolean
}
const Title = ({title,largeText,show,children,arrow}:Prop) => {
    return ( 
        <div className=" w-full space-y-3 ">
            <div className="flex gap-3 items-center justify-start">
                <p className="bg-[#DB4444] rounded-[2px] h-[40px] w-[20px]  " />
                <h2 className="  text-[#DB4444] capitalize text-[16px] ">{title}</h2>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-3 items-center justify-between w-full ">
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-start gap-8 ">
                    <h2 className="text-2xl sm:text-4xl font-semibold capitalize ">{largeText}</h2>
                    {show&&<div className="flex items-center justify-center gap-1 ">
                        <div className="font-semibold flex flex-col ">
                            <p className="capitalize text-xs ">days</p>
                            <p className="p-1 text-[32px] ">03</p>
                        </div>
                        <p className="text-[#E07575] text-[32px]  ">:</p>
                        <div className="font-semibold flex flex-col ">
                            <p className="capitalize text-xs ">hours</p>
                            <p className="p-1 text-[32px] ">23</p>
                        </div>
                        <p className="text-[#E07575] text-[32px] ">:</p>
                        <div className="font-semibold flex flex-col ">
                            <p className="capitalize text-xs ">minutes</p>
                            <p className="p-1 text-[32px] ">19</p>
                        </div>
                        <p className="text-[#E07575] text-[32px] ">:</p>
                        <div className="font-semibold flex flex-col ">
                            <p className="capitalize text-xs ">seconds</p>
                            <p className="p-1 text-[32px] ">56</p>
                        </div>
                    </div>}
                </div>
                {arrow&&<div className="flex items-center justify-center gap-2 ">
                    <div className="cursor-pointer flex items-center justify-center h-[46px] w-[46px] rounded-full bg-[#f5f5f5] ">
                        <ArrowLeft />
                    </div>
                    <div className="cursor-pointer flex items-center justify-center h-[46px] w-[46px] rounded-full bg-[#f5f5f5] ">
                        <ArrowRight />
                    </div>
                </div>}
                {children&&<>
                {children}
                </>}
            </div>
        </div>
     );
}
 
export default Title;