import { useParams } from 'react-router-dom'
import { useGetChartDataQuery, useGetCoinQuery } from '../../store/coins/coins.api'
import CoinChart from '../../components/CoinChart/CoinChart'
import { useEffect, useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { useActions, useAppSelector } from '../../hooks/hooks'

const Coinpage = () => {
	const { id } = useParams()

	const [days, setDays] = useState(14)

	const {median, variance} = useAppSelector(state => state.coins)

	const { data, isSuccess } = useGetCoinQuery(id)

	const { data: chartData, isSuccess: isChartSuccess } = useGetChartDataQuery({ id, days: days + '', })


	const {countMedian, countVariance} = useActions()

	function onButtonClick(days: number) {
		return () => setDays(days)
	}

	let dataArray = isChartSuccess ? chartData.prices.map(item => item[1]) : []
	
	countMedian(dataArray)
	countVariance(dataArray)

	return (
		<div className='container mx-auto '>
			<div className="mt-[4em] w-[100%] flex justify-between">
				<div className="w-[49%]">
					{isSuccess && (
						<div className='flex'>
							<img className='w-[1.5em] h-[1.5em] mr-4' src={data.image.small} alt='' />
							<h2 className=''>{data.name}</h2>
						</div>
					)}
					<BreadCrumbs name={data?.name} />
					<CoinChart id={id} days={days} />
					<div className='flex justify-between'>
						<button onClick={onButtonClick(14)} className='button'>За 14 дней</button>
						<button onClick={onButtonClick(30)} className='button'>За 30 дней</button>
						<button onClick={onButtonClick(50)} className='button'>За 50 дней</button>
						<button onClick={onButtonClick(1)} className='button mr-0'>За 1 день</button>
					</div>
				</div>
				<div className="w-[49%]">
					{isSuccess &&
						<section className='mb-[2em]'>
							<h2 className='mb-[2em]'>О монете</h2>
							<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
								<h3>Наименование:</h3>
								<span className='font-bold font-blue'>{data.name}</span>
							</div>
							<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
								<h3>Цена на бирже в данный момент:</h3>
								<span className='font-bold font-blue'>{data.market_data.current_price.usd} $</span>
							</div>
							<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
								<h3>Последнее обновление:</h3>
								<span className='font-bold font-blue'>{new Date(data.last_updated).toLocaleString()}</span>
							</div>
						</section>
					}
					<section>
						<h2 className='mb-[2em]'>Данные первичного анализа</h2>
						<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
							<h3>Дисперсия:</h3>
							<span className='font-bold font-blue'>{variance.toFixed(2)}</span>
						</div>
						<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
							<h3>Нормальное отклонение:</h3>
							<span>0.6</span>
						</div>
						<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
							<h3>Медиана:</h3>
							<span className='font-bold font-blue'>{median.toFixed(2)}</span>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Coinpage