import Title from "./title";
import Phone from "../../../assets/Category-CellPhone.svg"
import Computer from "../../../assets/Category-Computer.svg"
import Watch from "../../../assets/Category-SmartWatch.svg"
import { Camera, Headphones,Gamepad } from "lucide-react";
import { Link } from "react-router-dom";
type CategoryType = {
    img: React.ReactNode
    text: string
    link: string
}
const Category = () => {
    const category: CategoryType[]=[
        {img: <img src={Phone} alt={Phone} className=" w-[56px] h-[56px] " /> ,text:"phones",link:"/category/phone" },
        {img: <img src={Computer} alt={Computer} className=" w-[56px] h-[56px] " />,text:"computers",link:"/category/computer" },
        {img: <img src={Watch} alt={Watch} className=" w-[56px] h-[56px] " />,text:"smartWatch",link:"category/watch" },
        {img: <Camera size={36} /> ,text:"camera",link:"/category/camera" },
        {img: <Headphones size={36} />,text:"HeadPhones",link:"/category/headphones" },
        {img: <Gamepad size={36} />  ,text:"gaming",link:"/category/gaming" },
    ]
    return ( 
        <div className="flex flex-col gap-6 items-start justify-center ">
            <Title 
            arrow={true}
            title="categories"
            largeText="browser by category"
            />
            <div className="w-full grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-center ">
                {category?.map((item,index)=>(
                    <Link key={index} to={item.link} className=" hover:bg-[#DB4444] hover:text-white hover:shadow-[#0000000D] hover:shadow rounded-sm flex flex-col items-center justify-center gap-2 border border-[#0000004D] h-[145px] w-full ">
                        <>
                            {item.img}
                        </>
                        <p className="capitalize font-medium ">{item.text}</p>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default Category;