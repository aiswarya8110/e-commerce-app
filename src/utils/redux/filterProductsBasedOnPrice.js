const filterProductsBasedOnPrice = (price, products)=>{
    const filteredProducts = products.filter((product)=> ((product.price*83.02).toFixed(2)) > price);

    return filteredProducts;
}

export default filterProductsBasedOnPrice;