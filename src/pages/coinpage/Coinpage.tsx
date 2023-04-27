import { useParams } from 'react-router-dom'
import { useGetCoinQuery } from '../../store/coins/coins.api'
import CoinChart from '../../components/CoinChart/CoinChart'
import { useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { useAppSelector } from '../../hooks/hooks'
import { Audio } from 'react-loader-spinner'
import useStatistics from '../../hooks/useStatistics'
import ChartButtons from './../../components/ChartButtons/ChartButtons';
import Statistics from '../../components/Statistics/Statistics'

const Coinpage = () => {
	const { id } = useParams()
	const [days, setDays] = useState(14)

	useStatistics(id, days)

	const { median, variance, min, max } = useAppSelector(state => state.coins)
	const { data, isSuccess, isFetching } = useGetCoinQuery(id)

	return (
		<div className='container mx-auto '>
			<div className="mt-[4em] max-w-[100%] flex justify-between flex-col">
				{isSuccess && (
					<>
						<div className='flex'>
							<img className='w-[1.5em] h-[1.5em] mr-4' src={data.image.small} alt='' />
							<h2 className=''>{data.name}</h2>
						</div>
						<BreadCrumbs name={data?.name} />
						<CoinChart id={id} days={days} />
						<ChartButtons onClick={setDays} />
						<Statistics
							name={data.name}
							current_price={data.market_data.current_price.usd}
							last_updated={data.last_updated}
							median={median}
							min={min}
							max={max}
							variance={variance}
							days={days}
						/>
					</>
				)}
				{isFetching &&
					<div className='w-[80px] mt-[10em] opacity-5 mx-auto'>
						<Audio
							height="80"
							width="80"
							color="grey"
							ariaLabel="loading"
						/>
					</div>
				}
			</div>
		</div>
	)
}

export default Coinpage