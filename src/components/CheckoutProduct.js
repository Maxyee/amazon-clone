import React from 'react'
import '../componentStyle/CheckoutProduct.css'
import { useStateValue } from '../redux/store/StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from busket
        dispatch({
            type: 'REMOVE_FROM_BUSKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img
                className='checkoutProduct__image'
                src={image}
                alt=""
            />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>&#11088;</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
