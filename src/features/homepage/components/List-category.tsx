import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Listcategory = () => {
    const category:{link: string,text:string}[] = [
        {link: "/women's-fashion",text: "women's fashion"},
        {link: "/men's-fashion",text: "men's fashion"},
        {link: "/electronics",text: "electronics"},
        {link: "/home&lifeystyle",text: "home & lifestyle"},
        {link: "/medicine",text: "medicine"},
        {link: "/sports&outdoor",text: "sport & outdoor"},
        {link: "/bobby's&toys",text: "bobby's & toys"},
        {link: "/groceries & pets",text: "groceries & pets"},
        {link: "/health&beauty",text: "health & beauty"},
    ]
    return ( 
        <div className="w-full xl:w-[217px] py-3 h-full flex flex-col gap-2 items-start justify-between ">
                {category?.map((item,index)=>(
                    <Link key={index} to={item.link} className="flex items-center justify-between w-full p-1 text-sm " >
                        <p className="capitalize">{item.text}</p>
                        { (index===0||index===1)&& <ChevronRight />}           
                    </Link>
                ))}
        </div>
     );
}
 
export default Listcategory;