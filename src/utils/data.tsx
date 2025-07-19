import type { ProductType } from "./types";
import xbox from "../assets/xbox.svg"
import dogfood from "../assets/dogfood.svg"
import blackCamera from "../assets/black-camera.svg"
import laptop from "../assets/laptop.svg"
import lotion from "../assets/lotion.svg"
import car from "../assets/car.svg"
import boot from "../assets/boot.svg"
import greenShirt from "../assets/green-shirt.svg"
import redShirt from "../assets/red-shirt.svg"
import Gucci from "../assets/gucci-bag.svg"
import speaker from "../assets/speaker.svg"
import shelf from "../assets/shelf.svg"
import gamepad from "../assets/gamepad.svg"
import keyboard from "../assets/keyboard.svg"
import television from "../assets/television.svg"
import chair from "../assets/chair.svg"


export const Products:ProductType[] = [
        {color: ["#DB4444","#DB4444"],stock: "in stock",title: "Breed Dry Dog Food",price: 100, reviews: 35,stars: 3,id:"Breed Dry Dog Food",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:dogfood,image:[dogfood,dogfood,dogfood,dogfood]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",title: "CANON EOS DSLR Camera",price: 360, reviews: 95,stars: 4,id:"CANON EOS DSLR Camera",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:blackCamera,image:[blackCamera,blackCamera,blackCamera,blackCamera]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",title: "ASUS FHD Gaming Laptop",price: 700, reviews: 325,stars: 5,id:"ASUS FHD Gaming Laptop",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:laptop,image:[laptop,laptop,laptop,laptop,]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",title: "Curology Product Set ",price: 500, reviews: 145,stars: 4,id:"Curology Product Set ",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:lotion,image:[lotion,lotion,lotion,lotion,]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",news:"new",title: "Kids Electric Car",price: 960, reviews: 65,stars: 5,id:"Kids Electric Car",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:car,image:[car,car,car,car,]},
        {color: ["#EEFF61","#DB4444"] ,stock: "in stock",title: "Jr. Zoom Soccer Cleats",price: 1160, reviews: 35,stars: 5,id:"Jr. Zoom Soccer Cleats",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:boot,image:[boot,boot,boot,boot,]},
        {color: ["#FB1314","#DB4444"],stock: "in stock",news:"new",title: "GP11 Shooter USB Gamepad",price: 660, reviews: 55,stars: 4,id:"GP11 Shooter USB Gamepad",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:xbox,image:[xbox,xbox,xbox,xbox,]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",title: "Quilted Satin Jacket",price: 660, reviews: 35,stars: 4,id:"Quilted Satin Jacket",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:greenShirt,image:[greenShirt,greenShirt,greenShirt,greenShirt,]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",title: "The north coat",price: 360, discount: 260,reviews: 88,stars: 5,id:"The northe coat",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:redShirt,image:[redShirt,redShirt,redShirt,redShirt,]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",title: "Gucci duffle bag",price: 1160, discount: 960,reviews: 65,stars: 4.5,id:"Gucci duffle bag",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:Gucci,image:[Gucci,Gucci,Gucci,Gucci,Gucci,]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",title: "RGB liquid CPU Cooler",price: 170, discount: 160,reviews: 65,stars: 4.5,id:"RGB liquid CPU Cooler",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:speaker,image:[speaker,speaker,speaker,speaker,]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",title: "Small BookSelf", discount: 360,reviews: 99,stars: 4.5,id:"Small BookSelf",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:shelf,image:[shelf,shelf,shelf,shelf,]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",percent: 40,title: "HAVIT HV-G92 Gamepad",discount: 160, price: 120,reviews: 88,stars: 5,id:"HAVIT HV-G92 Gamepad",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:gamepad,image:[gamepad,gamepad,gamepad,gamepad,]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",percent: 35,title: "AK-900 Wired Keyboard",discount: 960, price: 1160,reviews: 75,stars: 4,id:"AK-900 Wired Keyboard",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:keyboard,image:[]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",percent: 30,title: "IPS LCD Gaming Monitor",discount: 370, price: 400,reviews: 99,stars: 5,id:"IPS LCD Gaming Monitor",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:television,image:[television,television,television,television,]},
        {color: ["#DB4444","#DB4444"],stock: "in stock",percent: 25,title: "S-Series Comfort Chair ",discount: 375, price: 400,reviews: 99,stars: 4.5,id:"S-Series Comfort Chair ",description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",size:"m",thumbnail:chair,image:[chair,chair,chair,chair,]},
]