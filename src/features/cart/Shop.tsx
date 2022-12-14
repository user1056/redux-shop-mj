// podejście klasowe lub funkcyjne

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Alert } from '../notifications/Alert';
import { AlertList } from '../notifications/AlertList';
import {
	loadProducts,
	ProductModel,
	selectProducts,
	selectSearchResults,
} from '../product/productsSlice';
import { Cart } from './Cart';
import { Product } from './Product';
import './Shop.css';

// funkcyjne:
export function Shop() {
	// obsługa, alias na Hook - dispatch
	// const dispatch = useAppDispatch();

	// ile jest naszych itemów, informacja - wyciągnij ze stanu:
	// const quantity = useAppSelector(selectItemsQuantity);

	// const product: Item = {
	// 	id: '1',
	// 	name: 'Tomb Raider',
	// 	price: 150,
	// };

	const products: ProductModel[] = useAppSelector(selectSearchResults);
	// nowe
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadProducts());
	}, []);

	// zad. 1
	// Utwórz komponent Cart, który wyświetli informacje o statnie koszyka

	// zad. 2
	// Utwórz komponent Produkt który z opcja dodania do koszyka

	// Zad. 3 dla chętnych (dodatkowe selectory, itd.)
	// Wyświetl w koszyku dostępne produktu

	// zad. 4. dodaj stylowanie i jakąś ikonkę koszyka
	// Dodaj stylowanie i ikonkę koszyka

	// zad. 2.1
	// Dodaj tablicę produktów (np. 8 produktów)

	// zad. 2.2
	// Wyświetl wszystkie produkty w komponencie

	// tworzymy komponent
	return (
		<div className="position-relative">
			<Cart />
			{/* dla 1 obiektu */}
			{/* <Product name={product.name} id={product.id} price={product.price} /> */}

			{/* mapowanie po products */}
			<div className="container mt-5">
				<div className="products-list mb-5">
					{products.map((product, key) => (
						<Product
							key={key}
							name={product.name}
							id={product.id}
							price={product.price}
						/>
					))}
				</div>

				<AlertList />
				{/* <Alert type="info" message="Produkt został dodany do koszyka." />
				<Alert type="warning" message="Produkt został dodany do koszyka." />
				<Alert type="error" message="Produkt został dodany do koszyka." />
				<Alert type="default" message="Produkt został dodany do koszyka." /> */}
			</div>
		</div>
	);
}

// ile jest naszych itemów, informacja - wyciągnij ze stanu:
// 	const quantity = useAppSelector(selectItemsQuantity);

// 	const product: Item = {
// 		id: '1',
// 		name: 'Tomb Raider',
// 		price: 150,
// }
