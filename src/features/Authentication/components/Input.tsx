import type { Dispatch, SetStateAction } from "react";

interface Prop{
    value: string
    type:string
    placeholder: string
    set: Dispatch<SetStateAction<string>>
}
const Input = ({placeholder,value,set,type}:Prop) => {
    return ( 
        <input 
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>set(e.target.value)}
        type={type} 
        className="focus:outline-none flex w-full py-2 border-b-[2px] border-b-[#f5f5f5] text-[#000000]  " 
        />
     );
}
 
export default Input;