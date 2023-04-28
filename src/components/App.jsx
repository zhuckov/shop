import { useState } from "react";
import ProductsList from "./ProductsList";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";
function App(){
    const defaultList = [
        {
            title: 'Converse All Star Bb Prototype Cx Mid',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '/png1.jpg',
            sale : 30
            
        },
        {
            title: 'Jordan Zion 2',
            group: 'Баскетбольные кроссовки',
            price: '100 ₽',
            path : '/png2.jpg',
            sale : 50,
            isNew: true
        },
        {
            title: 'Jordan One Take 4',
            group: 'Баскетбольные кроссовки',
            price: '10910 ₽',
            path : '/png3.jpg',
            isNew: true,
        }, 
        {
            title: 'Air Jordan 37 XXXVII PF',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '/png4.jpg',            
            isNew: true
        }, 
        {
            title: 'Air Jordan 37 XXXVII PF',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '/png5.jpg',
        },
        {
            title: 'Air Jordan 37 XXXVII PF',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '/png4.jpg',            
            
        }, 
        {
            title: 'Air Jordan 37 XXXVII PF',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '/png5.jpg',
        },        {
            title: 'Converse All Star Bb Prototype Cx Mid',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '/png1.jpg',
            isNew: true
        },
        {
            title: 'Jordan Zion 2',
            group: 'Баскетбольные кроссовки',
            price: '100 ₽',
            path : '/png2.jpg',
        },
        {
            title: 'Jordan One Take 4',
            group: 'Баскетбольные кроссовки',
            price: '10910 ₽',
            path : '/png3.jpg'
        }, 
        {
            title: 'Air Jordan 37 XXXVII PF',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '/png4.jpg', 
            isNew: true           
            
        }, 
        {
            title: 'Air Jordan 37 XXXVII PF',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '/png5.jpg',
            isNew: true
        },
        {
            title: 'Air Jordan 37 XXXVII PF',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '/png4.jpg',            
        }, 
        {
            title: 'Air Jordan 37 XXXVII PF',
            group: 'Баскетбольные кроссовки',
            price: '8910 ₽',
            path : '/png5.jpg',
        }
        
    ]
    const [products, setProducts] = useState(defaultList)
    const filterNew = () => {
        const newProductList = defaultList.filter(el => el.isNew !== undefined)
        setProducts(newProductList)
    } 
    const filterSale = () => {
        const newProductList = defaultList.filter(el => el.sale !== undefined)
        setProducts(newProductList)
    } 
    const getFullList = () => {
        setProducts(defaultList)
    } 
    return (
        <BrowserRouter>
            <div className="zxc">
            <img draggable={false} src={process.env.PUBLIC_URL + "images/" + 'man.jpg'} className="background__image" />
            <Menu filterNew={filterNew} filterSale={filterSale} getFullList ={getFullList}/>
            <ProductsList props={products}/> 
             </div>
        </BrowserRouter>
    );
}

export default App;
