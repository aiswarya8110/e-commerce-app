import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import companyLogo from '../assets/company-logo.png';
import { removeToken } from "../utils/redux/userSlice";
const Header = ()=>{
    const token = useSelector((store)=> store.user.userToken);
    const cart = useSelector((store)=> store.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch(removeToken());
        navigate('/')
    }

    useEffect(()=>{
        if(token){
            navigate('/home')
        }
        else{
            navigate('/')
        }
    },[]);

    return (
        <div className="p-3 flex justify-between items-center bg-slate-300">
            <img src={companyLogo} alt="logo" className="w-20" />
            {token && 
            <div className="flex items-center text-slate-600 font-semibold text-lg">
                <p>Cart({cart.length})</p>
                <button className="ml-8" onClick={handleLogout}>Logout</button>
            </div>}
        </div>
    )
}

export default Header;