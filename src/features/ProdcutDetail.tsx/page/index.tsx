import { Link } from "react-router-dom";
import { Products } from "../../../utils/data";
import Details from "../components/Details";
import type { ProductType } from "../../../utils/types";
import Product from "../../../components/Product";

const Index = ({id}:{id:string}) => {
    const product = Products?.find(product=>product.id.toLowerCase().trim()===id.toLowerCase().trim())
    return ( 
        <div className=" p-4 sm:p-8 lg:px-[135px] flex flex-col gap-6 items-start justify-center">
            <Link to={"/"} className="flex items-center justify-start gap-4 text-sm ">
                <p className="text-slate-500 ">Account</p>
                <p className="text-slate-500 ">/</p>
                <p className="text-slate-500 ">{product?.thumbnail.split("/").pop()?.split(".")[0]}</p>
                <p className="">/</p>
                <p className="">{id.trim()}</p>
            </Link>
            <Details product={product? product: {} as ProductType} />
            <div className="my-13 flex flex-col gap-4 items-start justify-center w-full ">
                <div className="flex gap-3 items-center justify-start">
                    <p className="bg-[#DB4444] rounded-[2px] h-[40px] w-[20px]  " />
                    <h2 className="  text-[#DB4444] capitalize text-[16px] ">related items</h2>
                </div>
                <Product products={Products?.slice(0,4)} />
            </div>
        </div>
     );
}
 
export default Index;