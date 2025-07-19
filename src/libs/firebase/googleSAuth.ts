import { toast } from "react-toastify"
import { auth, googleProvider } from "./firebase"
import { signInWithPopup } from "firebase/auth"

export const googleAuth = async ():Promise<boolean>=>{
        try {
            const google = await signInWithPopup(auth, googleProvider)
            if(!google){
              toast.error(google)
             return false
            }
            return true
        } catch (error: any) {
            toast.error(error?.message.split("/")[1])
            return false
        }
    }