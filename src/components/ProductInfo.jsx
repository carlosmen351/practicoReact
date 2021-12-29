import React from 'react';
import '@styles/ProductInfo.scss';
import bike from '@logos/bike.jpg';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
	return (
		<>
			<img src={bike} alt="bike" />
			<div className="ProductInfo">
				<p>$35,00</p>
				<p>Bike</p>
				<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
				<button className="primary-button add-to-cart-button">
					<img src={addCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;