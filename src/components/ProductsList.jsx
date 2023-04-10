import Product from "./Product";

function ProductsList({props}) {
    const products = props;
    return (
        <div>
            {
                products.map(el => (
                    <Product key={el.path} props={el} /> 
                ))
                
            }
            
        </div>
    );
}

export default ProductsList;
