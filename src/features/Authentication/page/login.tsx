import { useState } from "react";
import Input from "../components/Input";
import AuthLayout from "../layout/AuthLayout";
import Title from "../components/title";
import Button from "../components/Button";
import { logUser } from "../../../libs/firebase/logUser";

const LoginIndex = () => {
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [error,setError]= useState<boolean>(false)
    // const navigate = useNavigate()
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>,email:string,password:string)=>{
        e.preventDefault()
        if(!email.trim()||!email.includes("@")||!password.trim()||password.length<8){
            setError(true)
            return
        }
        setError(false)
        // const create = 
        await logUser(email,password)
        // if(create){
        //     navigate("/")
        // }
    }
    return ( 
        <AuthLayout children={
            <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>handleSubmit(e,email,password)} className="p-4 sm:p-8 rounded-md sm:rounded-none shadow-sm sm:shadow-none  w-full sm:w-[400px] flex flex-col gap-8 items-start justify-center  " >
                <Title 
                title="Login to Exculsive"
                desc="Enter your details below"
                />
                <Input 
                type="text"
                value={email}
                set={setEmail}
                placeholder="Email or phone number"
                />
                {error&&!email.trim()&&
                <p className="text-xs text-red-500"> fill out email </p>
                }
                {error&&(!email.includes("@")&&email.trim())&&
                <p className="text-xs text-red-500"> email must contain "@" </p>
                }
                <Input 
                type="password"
                value={password}
                set={setPassword}
                placeholder="Password"
                />
                                {error&&!password.trim()&&
                <p className="text-xs text-red-500"> fill out password </p>
                }
                {error&&(password.length<8&&password.trim())&&
                <p className="text-xs text-red-500"> password character 8+ </p>
                }
                <div className="flex flex-wrap sm:flex-nowrap items-center  gap-8 justify-between w-full">
                    <Button 
                    type="submit"
                    text="log in"
                    full="no"
                    />
                    <p className="text-[#DB4444] text-lg py-4 px-2  ">forgot password?</p>
                </div>
            </form>
        } />
     );
}
 
export default LoginIndex;