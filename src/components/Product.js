import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/redux/cartSlice";
const Product = ({ productData })=>{
    const dispatch = useDispatch();
    const { title, price, images, brand } = productData;

    const handleClick = (product)=>{
        dispatch(addToCart(product));
    }

    if(!images[0]) return;

    return (
        <div className="w-52">
            <img src={images[0]} className="w-52 h-52 object-contain" alt="" />
            <div>
                <h3 className="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">{title}</h3>
                <p className="text-sm font-light">{brand}</p>
                <p className="text-sm font-semibold">Rs.{(price * 83.02).toFixed(2)}</p>
                <button onClick={()=>handleClick(productData)} className="mt-3 bg-gray-500 text-white p-1 rounded-md w-full hover:bg-gray-400">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;