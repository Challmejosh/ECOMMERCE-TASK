import { useState } from "react";
import Input from "../components/Input";
import AuthLayout from "../layout/AuthLayout";
import Title from "../components/title";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleBtn";
import { Link } from "react-router-dom";
import { createUser } from "../../../libs/firebase/createUser";
import { googleAuth } from "../../../libs/firebase/googleSAuth";

const SignIndex = () => {
    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [error,setError] = useState<boolean>(false)
    // const navigate = useNavigate()
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>,email:string,password:string)=>{
        e.preventDefault()
        if(!email.trim()||!email.includes("@")||!password.trim()||password.length<8||!name.trim()||name.length<4){
            setError(true)
            return
        }
        setError(false)
        // const create = 
        await createUser(email,password)
        // if(create){
        //     navigate("/")
        // }
    }
    return ( 
        <AuthLayout children={
            <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>handleSubmit(e,email,password)} className="p-4 sm:p-8 rounded-md sm:rounded-none shadow-sm sm:shadow-none  w-full sm:w-[400px] flex flex-col gap-8 items-start justify-center  " >
                <Title 
                title="Create an account"
                desc="Enter your details below"
                />
                <Input 
                type="text"
                value={name}
                set={setName}
                placeholder="Name"
                />
                {error&&!name.trim()&&
                <p className="text-xs text-red-500"> fill out name </p>
                }
                {error&&(name.trim()&&name.length<4)&&
                <p className="text-xs text-red-500"> character of 4+ </p>
                }
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
                <Button 
                type="submit"
                text="create account"
                full="yes"
                />
                <GoogleButton 
                type="button"
                click={googleAuth}
                text="Sign up with Google"
                />
                <div className="flex items-center justify-center gap-3 w-full ">
                    <p className="">Already have account?</p>
                    <Link to="/login" className="capitalize underline text-[#000000] font-medium " >
                        log in
                    </Link>
                </div>
            </form>
        } />
     );
}
 
export default SignIndex;