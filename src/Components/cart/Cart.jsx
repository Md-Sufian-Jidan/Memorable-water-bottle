import PropTypes from 'prop-types'
import './cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Cart : {cart.length}</h4>
            <div>
                {cart.map((bottle) => <img key={bottle.id} src={bottle.img}></img>)}
            </div>
        </div>
    );
};

Cart.PropTypes ={
    cart : PropTypes.array.isRequired
}

export default Cart;