import { Link } from "react-router-dom";
import speaker from "../../../assets/mp-speaker.svg"

const BannerOne = () => {
    return ( 
        <div className="p-4 sm:p-8 lg:px-[135px] w-full py-8 ">
            <div className="bg-black p-8 w-full h-full lg:h-[400px] flex flex-col gap-3 lg:flex-row items-center justify-between ">
                <div className="w-full sm:w-[400px] flex flex-col gap-8 items-start justify-center  ">
                    <p className=" text-sm text-[#00FF66] ">categories</p>
                    <p className="text-5xl text-[#FAFAFA] p-1 ">
                        Enhance Your Music Experience
                    </p>
                    <div className="p-[2px] hidden sm:p-1 sm:flex items-center justify-start flex-wrap sm:flex-nowrap gap-2 sm:gap-3 ">
                        <div className="w-[62px] bg-[#FAFAFA] font-medium text-sm h-[62px] flex flex-col items-center justify-center rounded-full ">
                            <p className="">23</p>
                            <p className="text-[11px] capitalize">hours</p>
                        </div>
                        <div className="w-[62px] bg-[#FAFAFA] font-medium text-sm h-[62px] flex flex-col items-center justify-center rounded-full ">
                            <p className="">05</p>
                            <p className="text-[11px] capitalize">days</p>
                        </div>
                        <div className="w-[62px] bg-[#FAFAFA] font-medium text-sm h-[62px] flex flex-col items-center justify-center rounded-full ">
                            <p className="">59</p>
                            <p className="text-[11px] capitalize">Minutes</p>
                        </div>
                        <div className="w-[62px] bg-[#FAFAFA] font-medium text-sm h-[62px] flex flex-col items-center justify-center rounded-full ">
                            <p className="">35</p>
                            <p className="text-[11px] capitalize">seconds</p>
                        </div>
                    </div>
                    <Link to={`/`} className="bg-[#00FF66] capitalize rounded-sm text-[#FAFAFA] py-[16px] px-[48px] ">
                        buy now
                    </Link>
                </div>
                <img src={speaker} alt={speaker} className="w-[400px] h-full " />
            </div>
        </div>
     );
}
 
export default BannerOne; 