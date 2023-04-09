import { useState } from 'react';
import '../style/product.css'

function Product() {

    const [info, setInfo] = useState({
        title: 'Converse All Star Bb Prototype Cx Mid',
        group: 'Баскетбольные кроссовки',
        price: '8910 ₽'
    })
    return (
        <div className='products__item'>
            <div>
                <img className='products__item__img' src={require("../images/png1.jpg")} />
            </div>
            <div className='products__item__info-block'>
                <h3 className='products__item__title'>{info.title}</h3>
                <p className='products__item__group-name'>{info.group}</p>
                <p className='products__item__price'>{info.price}</p>
                <button type='button' className='products__item__button'>Kупить</button>
            </div>
        </div>
    );
}


export default Product;