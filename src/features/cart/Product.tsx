import { useAppDispatch } from '../../app/hooks';
import { addNotification } from '../notifications/notificationsSlice';
import { addItem, Item } from './cartSlice';
import './Product.css';

export interface ProductPros {
	name: string;
	price: number;
	id: string;
}

export function Product(product: ProductPros) {
	const dispatch = useAppDispatch();

	const item: Item = {
		id: product.id,
		name: product.name,
		price: product.price,
		quantity: 1,
	};

	const handleClick = () => {
		dispatch(addItem(item));
		dispatch(
			addNotification({
				message: `Produkt ${item.name} został dodany do koszyka.`,
				type: 'success',
			})
		);
	};

	return (
		<div className="card">
			<div className="card-body">
				<h3 className="card-title">{product.name}</h3>
				<span className="product-price">{product.price}</span>
				<button className="btn btn-primary" onClick={handleClick}>
					Add product
				</button>
			</div>
		</div>
	);
}
