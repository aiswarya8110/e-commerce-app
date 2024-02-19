import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentProducts, addFiltredProductsBasedOnPrice } from '../utils/redux/productsSlice';
import Product from './Product';
const ProductsContainer = ()=>{
    const dispatch = useDispatch();
    const filteredProducts = useSelector((store)=> store.products.filteredProductsBasedOnPrice);
    const getProducts = async()=>{
       try{
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            dispatch(addCurrentProducts(data.products));
            dispatch(addFiltredProductsBasedOnPrice(data.products));
       }
       catch(error){
        console.error(error);
       }
    }
    useEffect(()=>{
        getProducts();
    },[])

    // Checking if no products found
    if(filteredProducts?.length === 0) return <h3 className='text-center text-lg font-bold text-gray-800'>No results found!!</h3>

    // Shows loading if filteredProducts not loaded
    if(!filteredProducts) return <h3 className='text-center text-lg font-bold text-gray-800'>Loading..</h3>


    return (
        <div className='p-4 flex flex-wrap items-center justify-center gap-10'>
            {filteredProducts?.map((item)=> <Product key={item.id} productData={item} />)}
        </div>
    )
}

export default ProductsContainer;