import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";

export const createUser = async (email: string,password:string):Promise<boolean>=>{
            try{
            const createUser = await createUserWithEmailAndPassword(auth,email,password)
            if(!createUser){
                toast.error(createUser)
                return false
            }
            console.log(createUser)
            toast.success("Registration succesfull ")
            return true
        }catch(error: any){
            toast.error(error?.message.split("/")[1])
            return false
        }
    }
