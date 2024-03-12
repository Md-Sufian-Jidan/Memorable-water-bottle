import { useEffect, useState } from 'react';
import { } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css';
import { addToLs, getStoredCart } from '../../utilities/localStorage';

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`bottles.json`)
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    //load card from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);
            const savedCart = [];
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find((bottle) => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle);
                }
            }
            console.log('saved cart', savedCart);
            setCart(savedCart);

        }
    }, [bottles]);

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLs(bottle.id);
    };

    return (
        <div>
            <h3>bottles Available : {bottles.length}</h3>
            <h4>Cart : {cart.length}</h4>
            <div className='bottles'>
                {
                    bottles.map((bottle) => <Bottle key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;