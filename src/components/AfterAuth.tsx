import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../libs/firebase/firebase";
import { useEffect } from "react";

const AfterAuth = ({children}:{children:React.ReactNode}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            navigate("/")
            return 
        } 
        });
    },[navigate])
    return ( 
        <>
        {children}
        </>
     );
}
 
export default AfterAuth;