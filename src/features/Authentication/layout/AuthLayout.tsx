import authpic from "../../../assets/AuthPic.svg"
const AuthLayout = ({children}:{children: React.ReactNode}) => {
    return ( 
        <div className="flex items-center justify-center w-full h-full ">
            <div className="hidden w-full bg-[#CBE4E8] h-full lg:flex items-center justify-center ">
                <img src={authpic} alt={authpic} />
            </div>
            <div className=" p-4 sm:p-8 h-dvh xl:my-8 w-full flex items-center justify-center ">
                {children}
            </div>
        </div>
     );
}
 
export default AuthLayout;