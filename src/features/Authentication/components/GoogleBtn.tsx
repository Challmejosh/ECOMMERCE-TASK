import googleIcon from "../../../assets/Icon-Google.svg"
interface Prop{
    type: "submit"|"reset"|"button"|undefined
    text:string
    click: ()=>void
}
const GoogleButton = ({type,click,text}:Prop) => {
    return ( 
        <button onClick={click} type={type}  className="cursor-pointer capitalize w-full py-[16px] px-5 gap-3 rounded-sm flex items-center justify-center bg-white border border-slate-100 ">
           <img src={googleIcon} alt={googleIcon} className="w-[24px h-[24px" />
            <p className="">
                {text}
            </p> 
        </button>
     );
}
 
export default GoogleButton;