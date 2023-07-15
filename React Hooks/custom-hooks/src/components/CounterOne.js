import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterOne() {
	const [smola, incrementSmola, decrementSmola, resetSmola] = useCounter(0, 1)
	const [filteri, increment, decrement, reset] = useCounter(0, 1)

	return (
		<div>
			<h2>Count = {smola}</h2>
			<h2>Count = {filteri}</h2>
			<button onClick={incrementSmola}>Increment</button>
			<button onClick={decrementSmola}>Decrement</button>
			<button onClick={resetSmola}>Reset</button>
		<hr />
		<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>

		</div>
	)
}

export default CounterOne
