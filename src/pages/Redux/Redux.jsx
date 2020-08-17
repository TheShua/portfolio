import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'actions';

const Redux = () => {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();
	return (
		<main>
			<h1>Redux Page</h1>
			<h2>Counter: {counter}</h2>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			{isLogged && <h3>Valuable information I shouldn't see</h3>}
		</main>
	);
};

export default Redux;
