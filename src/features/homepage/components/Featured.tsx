import Title from "./title";
import ps5 from "../../../assets/ps5.svg"
import woman from "../../../assets/woman.svg"
import minispeaker from "../../../assets/mini-speaker.svg"
import perfume from "../../../assets/perfume.svg"
import { Link } from "react-router-dom";
const Featured = () => {
    return ( 
        <div className="p-4 sm:p-8 lg:px-[135px] w-full h-full lg:h-[768px] flex flex-col gap-8 items-start justify-center ">
            <Title 
            title="featured"
            largeText="new arrival"
            arrow={false}
            /> 
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-start gap-4 ">
                <div className="relative w-full lg:w-1/2 bg-black h-[585px] ">
                    <img src={ps5} alt={ps5} className="w-full h-full " />
                    <div className="absolute bottom-0 left-0 ">
                        <Text 
                        title="playStation 5"
                        text="Black and White version of the PS5 coming out on sale."
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start justify-center ">
                    <div className="relative w-full h-[284px] bg-black flex justify-end ">
                        <img src={woman} alt={woman} className="w-full h-full " />
                        <div className="absolute bottom-0 left-0 ">
                            <Text 
                            title="women's collection"
                            text="Featured woman collections that give you another vibe."
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-4 ">
                        <div className="relative h-[284px] flex items-center justify-center w-full bg-black ">
                            <img src={minispeaker} alt={minispeaker} className="w-full h-[200px] " />
                            <div className="absolute bottom-0 left-0 ">
                                <Text 
                                title="speakers"
                                text="Amazon wireless speakers"
                                />
                            </div>
                        </div>
                        <div className="relative h-[284px] flex items-center justify-center w-full bg-black ">
                            <img src={perfume} alt={perfume} className="w-full h-[200px] " />
                            <div className="absolute bottom-0 left-0 ">
                                <Text 
                                title="perfume"
                                text="GUCCI INTENSE OUD EDP"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Featured;

const Text = ({title,text}:{title: string,text:string})=>{
    return (
        <div className="flex flex-col gap-3 p-2 items-start text-[#FAFAFA] justify-center w-[300px] ">
            <div className="flex flex-col gap-3  ">
                <p className="text-2xl font-medium capitalize ">{title}</p>
                <p className="text-sm  ">{text}</p>
            </div>
            <Link to="/" className="capitalize border-b border-b-white text-[16px] " >
                show now
            </Link>
        </div>
    )
}