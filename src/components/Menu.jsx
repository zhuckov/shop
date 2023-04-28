import { NavLink } from "react-router-dom";
function Menu({filterNew,filterSale,getFullList}) {
    return (  
        <div className="menu">
            <div>
                <div className="logo__block">
                    <h1 className="logo__text">Kicks<br/>Avenue</h1>
                </div>
            </div>
            <nav>
                <NavLink onClick={filterNew}>НОВИНКИ</NavLink>
                <NavLink onClick={filterSale}>СКИДКИ</NavLink>
                <NavLink onClick={getFullList}>КРОССОВКИ</NavLink>
                <NavLink>ПРОФИЛЬ</NavLink>
                <NavLink>КОРЗИНА</NavLink>
            </nav>
        </div>
    );
}

export default Menu;