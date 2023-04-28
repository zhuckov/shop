import '../style/product.css';
import ProductButton from '../UI/button/ProductButton';
import SaleBlock from '../UI/sale/saleBlock';
function Product(props) {
    return( 
            <div className='product'>
                    <div>
                        <img className='products__item__img' src={process.env.PUBLIC_URL + "images/" + props.item.path} alt=''/>
                    </div>
                    <div className='product__info'>
                        {props.item.sale  ? <SaleBlock>{props.item.sale}</SaleBlock> : ''}
                        <h3 className='product__title'>{props.item.title}</h3>
                        <p className='product__group'>{props.item.group}</p>
                        {
                            props.item.sale ? 
                                <p className='product__price'>{parseInt(props.item.price) - (props.item.sale / 100) * parseInt(props.item.price) + ' ₽'} <span style={{textDecoration:'line-through', marginLeft:'px'}}>{props.item.price}</span></p>
                            :
                            <p className='product__price'>{props.item.price}</p>
                        }
                        <div className='product_panel'>
                            <ProductButton type='button'>More</ProductButton>
                            <ProductButton type='button' isBlack>Buy</ProductButton>
                        </div>
                    </div>
            </div>
    )
}
export default Product;
