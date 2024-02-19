import React, { useState } from 'react';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToken } from '../utils/redux/userSlice';
const Login = ()=>{
    const [name, setName ] = useState('atuny0');
    const [password, setPassword ] = useState('9uQFF1Lh');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  username: name,
                  password: password,
                })
            })

            const data = await response.json();
            dispatch(addToken(data.token));
            navigate('/home');
        }
        catch(error){
            console.error(error);
        }
        
    }

    return (
        <>
            <Header />
            <div className='mt-20 flex justify-center items-center'>
            <form className='p-5 m-3 flex flex-col w-full md:w-1/2 lg:w-1/4 bg-gray-400 rounded-md' onSubmit={handleLogin}>
                <h3 className='text-center font-bold text-4xl'>Login</h3>
                <div className='mb-4'>
                    <label htmlFor='name' className='mb-1 block text-2xl font-medium'>Name</label>
                    <input type='text' required className='w-full p-2 rounded-lg outline-none' id='name' value={name} placeholder='Enter name' onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='mb-1 block text-2xl font-medium'>Password</label>
                    <input type='password' required className='w-full p-2 rounded-lg outline-none' id='password' value={password} placeholder='Enter password' onChange={(e)=> setPassword(e.target.value)} />      
                </div>
                <button type='submit' className='bg-gray-800 p-2 text-white rounded-lg hover:bg-slate-500 transition'>Login</button>
            </form>
            </div>
        </>
    )
}

export default Login;