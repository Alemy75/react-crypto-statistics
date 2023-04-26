import { useParams } from 'react-router-dom'
import { useGetChartDataQuery, useGetCoinQuery } from '../../store/coins/coins.api'
import CoinChart from '../../components/CoinChart/CoinChart'
import { useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { useActions, useAppSelector } from '../../hooks/hooks'
import { Audio } from 'react-loader-spinner'

const Coinpage = () => {
	const { id } = useParams()

	const [days, setDays] = useState(14)

	const { median, variance, min, max } = useAppSelector(state => state.coins)

	const { data, isSuccess, isFetching } = useGetCoinQuery(id)

	const { data: chartData, isSuccess: isChartSuccess } = useGetChartDataQuery({ id, days: days + '', })


	const { countMedian, countVariance, findMinMax } = useActions()

	function onButtonClick(days: number) {
		return () => setDays(days)
	}

	let dataArray = isChartSuccess ? chartData.prices.map(item => item[1]) : []

	countMedian(dataArray)
	countVariance(dataArray)
	findMinMax(dataArray)

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
						<button onClick={onButtonClick(100)} className='button mr-0'>За 100 дней</button>
					</div>
				</div>
				<div className="w-[49%]">
					{isSuccess &&
						<section className='mb-[2em]'>
							<h2 className='mb-[1rem]'>О монете</h2>
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
							<h3 className='mb-4 mt-8 pb-[0.5em] font-bold'>Точки изменения цены <span className='font-blue'>за {days} дней</span>:</h3>
							<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
								<h3>Среднее значение за период:</h3>
								<span className='font-bold font-blue'>{median.toFixed(6)} $</span>
							</div>
							<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
								<h3>Минимальное значение за период:</h3>
								<span className='font-bold font-blue'>{min.toFixed(6)} $</span>
							</div>
							<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
								<h3>Максимально значение за период:</h3>
								<span className='font-bold font-blue'>{max.toFixed(6)} $</span>
							</div>
							<h3 className='mb-4 mt-6 pb-[0.5em] font-bold'>Первичная статистика <span className='font-blue'>за {days} дней</span>:</h3>
							<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
								<h3>Дисперсия:</h3>
								<span className='font-bold font-blue'>{variance.toFixed(6)}</span>
							</div>
							<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
								<h3>Нормальное отклонение:</h3>
								<span className='font-bold font-blue'>{Math.sqrt(variance).toFixed(6)}</span>
							</div>
						</section>
					}
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
		</div>
	)
}

export default Coinpage