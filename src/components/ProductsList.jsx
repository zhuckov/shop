import Product from "./Product";

function ProductsList({props}) {
    const products = props;
    const getRandomId = () => { 
        return Math.floor(Math.random() * 10000000)
    }
    return (
        <div className="product-list">
            {
                products.map(el => (
                    <Product key={getRandomId()} item={el} /> 
                ))
            }
        </div>
    );
}

export default ProductsList;
