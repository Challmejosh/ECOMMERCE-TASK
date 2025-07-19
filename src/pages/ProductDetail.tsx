import { useParams } from "react-router-dom";
import Index from "../features/ProdcutDetail.tsx/page";

const ProductDetail = () => {
    const params = useParams()
    return ( 
        <Index id={String(params.id)} />
     );
}
 
export default ProductDetail;