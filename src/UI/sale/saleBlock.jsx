import style from './sale-block.module.css'
function saleBlock({children,...props}) {
    
    return (
        <div className={style.sale}>
            <p {...props}>-{children} %</p>
        </div>
    );
}
export default saleBlock;