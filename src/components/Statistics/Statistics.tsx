import React, { useState } from 'react'
import GrowthTable from '../GrowthTable/GrowthTable'

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
}

const Statistics: React.FC<IProps> = ({ name, current_price, last_updated, mean, variance, days, median, difference}) => {
	const [showVariance, setShowVariance] = useState(false)

	return (
		<section className='my-8'>
			<h2>О монете</h2>
			<ul>
				<li>
					<h3 className='mb-4 mt-4 pb-[0.5em] font-bold'>Характеристики монеты <span className='font-blue'>за последние {days = 730} дней</span>:</h3>
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
				<li>
					<h3 className='mb-4 pb-[0.5em]'>Провели первичный статистический анализ временных рядов, включая вычисление среднего значения, меры разброса. Сделали соответствующие выводы:</h3>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Дисперсия:</h3>
						<span title='Показать формулы' onClick={() => setShowVariance(prev => !prev)} className='font-blue cursor-pointer'>
							{showVariance && <span className='text-black'><img className='h-[50px] inline mr-[100px]' src="https://studfile.net/html/2706/745/html_wycoi0re4I.nJRU/img-G7pJH7.png" alt="" /></span>}
							{variance}
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Среднее арифметическое:</h3>
						<span title='Показать формулы' onClick={() => setShowVariance(prev => !prev)} className='font-blue cursor-pointer'>
							{showVariance && <span className='text-black'><img className='h-[50px] inline mr-[100px]' src="https://excel2.ru/sites/default/files/pic_node/Statistica/stat-19.png" alt="" /></span>}
							{mean} $
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Медиана:</h3>
						<span title='Показать формулы' onClick={() => setShowVariance(prev => !prev)} className='font-blue cursor-pointer'>
							{showVariance && <span className='text-black'><img className='h-[50px] inline mr-[100px]' src="https://www.univer-nn.ru/statistics/mediana.jpg" alt="" /></span>}
							{median} $
						</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Разброс:</h3>
						<span title='Показать формулы' onClick={() => setShowVariance(prev => !prev)} className='font-blue cursor-pointer'>
							{showVariance && <span className='text-black'><img className='h-[30px] inline mr-[100px]' src="https://studfile.net/html/2706/1073/html_SKjk9_4Dct.RP3X/img-y_FC2x.png" alt="" /></span>}
							{difference} $
						</span>
					</div>
				</li>
				<li>
					<h3 className='mb-4 mt-6 pb-[0.5em]'>После были рассчитаны основные показатели динамики:</h3>
				</li>
				<GrowthTable/>
			</ul>
		</section >
	)
}

export default Statistics