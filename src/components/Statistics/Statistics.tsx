import React, { useState } from 'react'
import GrowthTable from '../GrowthTable/GrowthTable'
import BarChart from '../CoinChart/BarChart'
import { Utils } from '../../utils/coin.utils'

interface IProps {
	name: string
	current_price: number
	last_updated: string
	mean: number
	min: number
	max: number
	variance: number
	days: number
	median: number
	difference: number
	showChart: boolean
	finalData: any[][]
	roundedData: number[]
}

const Statistics: React.FC<IProps> = ({ name, current_price, last_updated, mean, variance, days, median, difference, finalData, showChart, roundedData }) => {
	const [showTable, setShowTable] = useState(false)

	let mode = Utils.calculateMode(roundedData)
	
	return (
		<section className='my-8'>
			<h2>О монете</h2>
			<ul>
				<li>
					<h3 className='mb-4 mt-4 pb-[0.5em]'>Характеристики монеты <span className='font-blue'>за последние {days = 730} дней</span>:</h3>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Наименование:</h3>
						<span className='font-blue'>{name}</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Цена на бирже в данный момент:</h3>
						<span className='font-blue'>{current_price} $</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Последнее обновление:</h3>
						<span className='font-blue'>{new Date(last_updated).toLocaleString()}</span>
					</div>
				</li>
				<h2>Расчет показателей</h2>
				<li>
					
				</li>
				<li>
					<h3 className='mb-4 mt-6 pb-[0.5em]'>После были рассчитаны основные показатели динамики:</h3>
				</li>
				<GrowthTable />
				<li>
					<h3 className='mb-4 mt-6 pb-[0.5em]'>Рассет и отображение частотности:</h3>
					{showChart && <BarChart finalData={finalData} />}

					<div className="mt-6 mb-4 flex justify-between text-justify border-b border-b-slate-100">
						<h3 className='mb-4 pb-[0.5em] w-[20%]'>Все варианты ряда: <div className='mt-4'>Отобразить все: <span className='font-blue' onClick={() => setShowTable(prev => !prev)}>{showTable ? "Вкл" : "Выкл"}</span></div></h3>
						<div className={showTable ? "w-[70%] style-2" : "w-[70%] style-2 h-[200px]"}>{roundedData.sort((a,b) => a - b).join(', ')}</div>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Объем совокупности:</h3>
						<span className='font-blue cursor-pointer'>
							{roundedData.length - 1}
						</span>
					</div>
					<div className="mt-6 mb-4 flex justify-between text-justify border-b border-b-slate-100">
						<h3 className='mb-4 pb-[0.5em] w-[20%]'>Частота ряда: <div className='mt-4'>Отобразить все: <span className='font-blue' onClick={() => setShowTable(prev => !prev)}>{showTable ? "Вкл" : "Выкл"}</span></div></h3>
						{/* <div className='w-[70%]'>{finalData.join(', ')}</div> */}
						<div className={showTable ? "w-[70%] style-2" : "w-[70%] style-2 h-[200px]"}>
							<table className='iksweb'>
								<tbody>
									<tr>
										<td>Число</td>
										<td>Количество</td>
									</tr>
									{finalData.map(el => (
										<tr>
											<td>{el[0]}</td>
											<td>{el[1]}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Cумма частот:</h3>
						<span className='font-blue cursor-pointer'>
							{roundedData.length - 1}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Дисперсия:</h3>
						<span className='font-blue cursor-pointer'>
							
							{variance}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Среднее арифметическое:</h3>
						<span className='font-blue cursor-pointer'>
							
							{mean}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Медиана:</h3>
						<span className='font-blue cursor-pointer'>
							{median}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Мода:</h3>
						<span className='font-blue cursor-pointer'>
							{mode.length === 1 ? mode[0] : mode.join(', ')}
						</span>
					</div>	
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Размах вариаций:</h3>
						<span className='font-blue cursor-pointer'>
							{difference}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Среднее линейное отклонение:</h3>
						<span className='font-blue cursor-pointer'>
							{Utils.calculateStandardDeviation(roundedData)}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Среднее квадратическое отклонение:</h3>
						<span className='font-blue cursor-pointer'>
							{Math.pow(variance, 2)}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Коэффициент вариации:</h3>
						<span className='font-blue cursor-pointer'>
							{Utils.calculateCoefficientOfVariation(roundedData)}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Коэффициент распределения Пирсона:</h3>
						<span className='font-blue cursor-pointer'>
							{Utils.calculateSkewness(roundedData)}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Скошенность ряда:</h3>
						<span className='font-blue cursor-pointer'>
							{Utils.determineSkewness(Utils.calculateSkewness(roundedData))}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Скошенность ряда:</h3>
						<span className='font-blue cursor-pointer'>
							{Utils.determineKurtosisSignificance(Utils.calculateKurtosis(roundedData))}
						</span>
					</div>
				</li>

			</ul>
		</section >
	)
}

export default Statistics