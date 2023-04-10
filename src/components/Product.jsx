import { useState } from 'react';
import '../style/product.css'
function Product({props}) {
    const [info, setInfo] = useState({
        path : props.path, 
        title : props.title, 
        group : props.group,
        price : props.price  
    })
    
    return( 
                <div className='products__item'>
                    <div>
                        <img className='products__item__img' src={require('../../public/images/png1.jpg')}/>
                    </div>
                    <div className='products__item__info-block'>
                        <h3 className='products__item__title'>{info.title}</h3>
                        <p className='products__item__group-name'>{info.group}</p>
                        <p className='products__item__price'>{info.price}</p>
                        <button type='button' className='products__item__button'>Kупить</button>
                    </div>
                </div>
                )
                
        

}
export default Product;
