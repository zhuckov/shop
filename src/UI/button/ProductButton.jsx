import styles from './product-button.module.css';

export function ProductButton({children,isBlack, ...props}) {
    return ( 
        <button className={isBlack ? [styles.product__button, styles.product_buy__button].join(' '):[styles.product__button, styles.product_show__button].join(' ')} {...props}>{children}</button>
    )
}

export default ProductButton;