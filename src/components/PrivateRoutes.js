import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PrivateRoutes = ()=>{
    const navigate = useNavigate();
    const auth = false;

    useEffect(()=>{
        if(auth){
            navigate('/home')
        }
        else{
            navigate('/');
        }
    },[])

    return <h3>Loading...</h3>
}

export default PrivateRoutes;