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
	const [days, setDays] = useState(100)

	useStatistics(id, days)

	const { mean, variance, min, max, median} = useAppSelector(state => state.coins)
	const { data, isSuccess, isFetching } = useGetCoinQuery(id)

	return (
		<div className='container mx-auto '>
			{isSuccess && (
				<div className='mt-[4em]'>
					<div className='flex items-start justify-between'>
						<div className='flex'>
							<img className='w-[1.5em] h-[1.5em] mr-4' src={data.image.small} alt='' />
							<h2 className=''>{data.name}</h2>
						</div>
						<button className='flex	'>
							<span className='mr-2' onClick={() => window.print()}>Печать</span>						
						</button>
					</div>
					<BreadCrumbs name={data?.name} />
					<CoinChart id={id} days={days} />
					<ChartButtons onClick={setDays} />
					<Statistics
						name={data.name}
						current_price={data.market_data.current_price.usd}
						last_updated={data.last_updated}
						mean={mean}
						min={min}
						max={max}
						variance={variance}
						days={days}
						median={median}
					/>
				</div>
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
	)
}

export default Coinpage