import { useState } from "react";
import ProductsList from "./ProductsList";
function App() {
    const [products, setProducts] = useState([
        {
            title: 'Converse All Star Bb Prototype Cx Mid',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '../images/png1.jpg'
            
        },
        {
            title: 'Jordan Zion 2',
            group: 'Баскетбольные кроссовки',
            price: '100 ₽',
            path : '../images/png2.jpg'
            
        },
        {
            title: 'Jordan One Take 4',
            group: 'Баскетбольные кроссовки',
            price: '10910 ₽',
            path : '../images/png3.jpg'
        }, 
        {
            title: 'Air Jordan 37 XXXVII PF',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '../images/png4.jpg'
            
        }, 
        {
            title: 'Air Jordan 37 XXXVII PF',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '../images/png5.jpg'    
        }
    ])
    return (
        <div>
           <ProductsList props={products}/> 
        </div>
    );
}

export default App;
