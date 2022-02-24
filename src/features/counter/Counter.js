import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, resetToValue } from './counterSlice'

const Counter = () => {

	const count = useSelector(state => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<button onClick={() => dispatch(increment())}>Increment</button>
			{
				count < 0 ? (
					<button>{dispatch(resetToValue(0))}</button>

				) : (
					<button>{count}</button>
				)
			}
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	)
}

export default Counter