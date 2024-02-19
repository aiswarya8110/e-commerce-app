import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addCurrentProducts, addFiltredProductsBasedOnPrice, changeSelectedPrice } from '../utils/redux/productsSlice';
import filterProductsBasedOnPrice from '../utils/redux/filterProductsBasedOnPrice';
const Search = ()=>{
    const inputRef = useRef();
    const dispatch = useDispatch();
    const products = useSelector((store)=> store.products.currentProducts);
    const selectedPrice = useSelector((store)=> store.products.selectedPrice);
    const onChangeHandler = (e)=>{
        const filteredProducts = filterProductsBasedOnPrice(Number(e.target.value), products);
        dispatch(addFiltredProductsBasedOnPrice(filteredProducts));
        dispatch(changeSelectedPrice(Number(e.target.value)));
    }

    const handleSearch = async(e)=>{
        e.preventDefault();
        const response = await fetch(`https://dummyjson.com/products/search?q=${inputRef.current.value}`);
        const data = await response.json();
        dispatch(addCurrentProducts(data.products));
        dispatch(addFiltredProductsBasedOnPrice(data.products));
    }

    useEffect(()=>{
        if(products){
            const filteredProducts = filterProductsBasedOnPrice(selectedPrice, products);
            dispatch(addFiltredProductsBasedOnPrice(filteredProducts));
        }
    },[products])

    return (
        <div className='p-5 flex flex-col md:flex-row justify-center items-center'>
            <form onSubmit={handleSearch} className='flex justify-center items-center w-full md:w-2/5'>
                <input ref={inputRef} type="search" placeholder="search for products" className='w-full h-12 p-2 outline-none border border-black'/>
                <button type="submit" className='bg-gray-500 h-12 text-white p-2  w-1/5 hover:bg-gray-400'>search</button>
            </form>
            <select
            value={selectedPrice}
            className='outline-none cursor-pointer bg-gray-500 h-12 text-white p-2 rounded-lg mt-8 md:ml-8 md:mt-0' 
            onChange={onChangeHandler}>
                <option value="500">above Rs.500</option>
                <option value="1000">above Rs.1000</option>
                <option value="3000">above Rs.3000</option>
                <option value="5000">above Rs.5000</option>
                <option value="10000">above Rs.10000</option>
                <option value="50000">above Rs.50000</option>
                <option value="100000">above Rs.100000</option>
            </select>
        </div>
        
    )
}

export default Search;