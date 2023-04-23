import { useParams } from 'react-router-dom'
import { useGetCoinQuery } from '../../store/coins/coins.api'
import CoinChart from '../../components/CoinChart/CoinChart'

const Coinpage = () => {
	const { id } = useParams()

	const {data} = useGetCoinQuery(id)
	
	return (
		<div className='container mx-auto'>
			<h1>{data?.name}</h1>
			<CoinChart id={id}/>
		</div>

	)
}

export default Coinpage