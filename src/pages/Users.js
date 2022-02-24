import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUsers } from "../features/users/usersSlice"

const Users = () => {

	const dispatch = useDispatch();
	const { users } = useSelector(state => state.users)

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<div className='flex items-center justify-center h-max'>
			<div className="flex-col justify-center bg-gray-100 w-1/3 p-5 my-10 text-green-700">
				{/* <button className="bg-cyan-200 p-2 rounded-lg" onClick={showContent}>Show Users</button> */}
				{users && users.map((item, index) => (
					<h3 className="text-black p-2" key={index}>{item[index].name}</h3>
				))}
			</div>
		</div>
	)
}

export default Users