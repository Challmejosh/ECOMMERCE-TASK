interface Prop{
    type: "submit"|"reset"|"button"|undefined
    text:string
    full: "yes"|"no"
}
const Button = ({type,text,full}:Prop) => {
    return ( 
        <button type={type}  className={`${full==="yes"?"w-full py-[16px] px-[40px]":' py-4 px-12 '} cursor-pointer capitalize   rounded-sm text-[#f5f5f5] flex items-center justify-center text-center bg-[#DB4444] `}>
            {text}
        </button>
     );
}
 
export default Button;