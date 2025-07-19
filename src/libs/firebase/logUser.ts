import { toast } from "react-toastify"
import { auth } from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export const logUser = async (email: string,password: string):Promise<boolean>=>{
        try {
            const getRecord =  await signInWithEmailAndPassword(auth,email,password)
            if(!getRecord){
                return getRecord
                
            }
            toast.success("Login successfully")
            return true
        } catch (error: any) {
            toast.error(error?.message.split("/")[1])
            return false
        }
    }