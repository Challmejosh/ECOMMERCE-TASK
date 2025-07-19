import Product from "../../../components/Product";
import type { ProductType } from "../../../utils/types";
import Title from "./title";
import blackCamera from "../../../assets/black-camera.svg"
import laptop from "../../../assets/laptop.svg"
import lotion from "../../../assets/lotion.svg"
import dogfood from "../../../assets/dogfood.svg"
import car from "../../../assets/car.svg"
import boot from "../../../assets/boot.svg"
import xbox from "../../../assets/xbox.svg"
import greenShirt from "../../../assets/green-shirt.svg"
const ExploreProject = () => {
        const products:ProductType[]=[
        {stock: "in stock",title: "Breed Dry Dog Food",price: 100, reviews: 35,stars: 3,id:"Breed Dry Dog Food",description: "",size:"m",thumbnail:dogfood,image:[""]},
        {stock: "in stock",title: "CANON EOS DSLR Camera",price: 360, reviews: 95,stars: 4,id:"CANON EOS DSLR Camera",description: "",size:"m",thumbnail:blackCamera,image:[""]},
        {stock: "in stock",title: "ASUS FHD Gaming Laptop",price: 700, reviews: 325,stars: 5,id:"ASUS FHD Gaming Laptop",description: "",size:"m",thumbnail:laptop,image:[""]},
        {stock: "in stock",title: "Curology Product Set ",price: 500, reviews: 145,stars: 4,id:"Curology Product Set ",description: "",size:"m",thumbnail:lotion,image:[""]},
        {stock: "in stock",color: ["#FB1314","#DB4444"] ,news:"new",title: "Kids Electric Car",price: 960, reviews: 65,stars: 5,id:"Kids Electric Car",description: "",size:"m",thumbnail:car,image:[""]},
        {stock: "in stock",color: ["#EEFF61","#DB4444"] ,title: "Jr. Zoom Soccer Cleats",price: 1160, reviews: 35,stars: 5,id:"Jr. Zoom Soccer Cleats",description: "",size:"m",thumbnail:boot,image:[""]},
        {stock: "in stock",color: ["#DB4444","#DB4444"] ,news:"new",title: "GP11 Shooter USB Gamepad",price: 660, reviews: 55,stars: 4,id:"GP11 Shooter USB Gamepad",description: "",size:"m",thumbnail:xbox,image:[""]},
        {stock: "in stock",color: ["#DB4444","#DB4444"] ,title: "Quilted Satin Jacket",price: 660, reviews: 35,stars: 4,id:"Quilted Satin Jacket",description: "",size:"m",thumbnail:greenShirt,image:[""]},
    ]
    return ( 
        <div className="p-4 sm:p-8 lg:px-[135px] w-full flex flex-col gap-8 items-start justify-center ">
            <Title 
            title="our products"
            largeText="explore our products"
            arrow={true}
            />
            <Product 
            products={products}
            />
        </div>
     );
}
 
export default ExploreProject;