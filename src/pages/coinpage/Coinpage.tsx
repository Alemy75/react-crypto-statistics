import { useParams } from 'react-router-dom'
import { useGetCoinQuery } from '../../store/coins/coins.api'

const Coinpage = () => {
	const { id } = useParams()

	const {data} = useGetCoinQuery(id)

	// eslint-disable-next-line @typescript-eslint/no-unused-vars

	return (
		<div>{id} page</div>
	)
}

export default Coinpage