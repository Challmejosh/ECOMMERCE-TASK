import Product from "../../../components/Product";
import type { ProductType } from "../../../utils/types";
import Title from "./title";
import keyboard from "../../../assets/keyboard.svg"
import chair from "../../../assets/chair.svg"
import television from "../../../assets/television.svg"
import gamepad from "../../../assets/gamepad.svg"
import { Link } from "react-router-dom";

const Today = () => {
    const products:ProductType[]=[
        {stock: "in stock",percent: 40,title: "HAVIT HV-G92 Gamepad",discount: 160, price: 120,reviews: 88,stars: 5,id:"HAVIT HV-G92 Gamepad",description: "",size:"m",thumbnail:gamepad,image:[""]},
        {stock: "in stock",percent: 35,title: "AK-900 Wired Keyboard",discount: 960, price: 1160,reviews: 75,stars: 4,id:"AK-900 Wired Keyboard",description: "",size:"m",thumbnail:keyboard,image:[""]},
        {stock: "in stock",percent: 30,title: "IPS LCD Gaming Monitor",discount: 370, price: 400,reviews: 99,stars: 5,id:"IPS LCD Gaming Monitor",description: "",size:"m",thumbnail:television,image:[""]},
        {stock: "in stock",percent: 25,title: "S-Series Comfort Chair ",discount: 375, price: 400,reviews: 99,stars: 4.5,id:"S-Series Comfort Chair ",description: "",size:"m",thumbnail:chair,image:[""]},
        // {stock: "in stock",percent: 25, title: "S-Series Comfort Chair ",discount: 375, price: 400,reviews: 99,stars: 4.5,id:"S-Series Comfort Chair ",description: "",size:"m",thumbnail:chair,image:[""]},
    ]
    return ( 
        <div className="w-full p-4 sm:p-8 lg:p-0 flex flex-col gap-8 items-center justify-center">
            <div className="lg:px-[135px] w-full ">
                <Title 
                arrow={true}
                title="today's"
                largeText="flash sale's"
                show={true}
                />
            </div>
            <div className=" lg:pl-[135px] w-full">
                <Product 
                products={products}
                />
            </div>
            <div className="flex items-center my-5 justify-center w-full ">
                <Link to={"/"} className="capitalize text-white bg-[#DB4444] py-[16px] px-[48px] rounded-sm ">
                    view all products
                </Link>
            </div>
        </div>
     );
}
 
export default Today;