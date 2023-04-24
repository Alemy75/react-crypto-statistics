import { useParams } from 'react-router-dom'
import { useGetCoinQuery } from '../../store/coins/coins.api'
import CoinChart from '../../components/CoinChart/CoinChart'
import { useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'

const Coinpage = () => {
	const { id } = useParams()

	const [days, setDays] = useState(14)

	const { data, isSuccess } = useGetCoinQuery(id)

	function onButtonClick (days: number) {
		return () => setDays(days)
	}

	return (
		<div className='container mx-auto '>
			<div className="mt-[4em] w-[100%] flex justify-between">
				<div className="w-[49%]">
					{isSuccess && <h2 className=''>{data.name}</h2>}
					<BreadCrumbs name={data?.name} />
					<CoinChart id={id} days={days} />
					<div className='flex justify-between'>
						<button onClick={onButtonClick(14)} className='button'>За 14 дней</button>
						<button onClick={onButtonClick(30)} className='button'>За 30 дней</button>
						<button onClick={onButtonClick(50)} className='button'>За 50 дней</button>
						<button onClick={onButtonClick(100)} className='button mr-0'>За 100 дней</button>
					</div>
				</div>
				<div className="w-[49%]">
					<h2>Данные первичного анализа</h2>
				</div>
			</div>
		</div>
	)
}

export default Coinpage