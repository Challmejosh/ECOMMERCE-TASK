import Product from "../../../components/Product";
import Title from "./title";
import Gucci from "../../../assets/gucci-bag.svg"
import shelf from "../../../assets/shelf.svg"
import speaker from "../../../assets/speaker.svg"
import redShirt from "../../../assets/red-shirt.svg"
import type { ProductType } from "../../../utils/types";
import { Link } from "react-router-dom";

const Month = () => {
    const products:ProductType[]=[
        {stock: "in stock",title: "The north coat",price: 360, discount: 260,reviews: 88,stars: 5,id:"The northe coat",description: "",size:"m",thumbnail:redShirt,image:[""]},
        {stock: "in stock",title: "Gucci duffle bag",price: 1160, discount: 960,reviews: 65,stars: 4.5,id:"Gucci duffle bag",description: "",size:"m",thumbnail:Gucci,image:[""]},
        {stock: "in stock",title: "RGB liquid CPU Cooler",price: 170, discount: 160,reviews: 65,stars: 4.5,id:"RGB liquid CPU Cooler",description: "",size:"m",thumbnail:speaker,image:[""]},
        {stock: "in stock",title: "Small BookSelf", discount: 360,reviews: 99,stars: 4.5,id:"Small BookSelf",description: "",size:"m",thumbnail:shelf,image:[""]},
    ]
    return ( 
        <div className="p-4 sm:p-8 lg:px-[135px] flex flex-col gap-6 items-start justify-center  ">
            <Title 
            arrow={false}
            title="this month"
            largeText="best selling products"
            children={
                <Link to={`/`} className="capitalize text-white bg-[#DB4444] py-2 sm:py-[16px] px-3 sm:px-[48px] rounded-sm ">
                    view all
                </Link>
            }
            />
            <Product
            products={products}
            />
        </div>
     );
}
 
export default Month;