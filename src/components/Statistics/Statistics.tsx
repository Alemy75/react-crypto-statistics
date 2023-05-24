import React from 'react'

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
}

const Statistics: React.FC<IProps> = ({ name, current_price, last_updated, mean, min, max, variance, days, median }) => {
	return (
		<section className='my-8'>
			<h2>О монете</h2>
			<ul>
				<li>
					<h3 className='mb-4 mt-6 pb-[0.5em] font-bold'>Характеристики монеты <span className='font-blue'>за последние {days} дней</span>:</h3>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Наименование:</h3>
						<span className='font-bold font-blue'>{name}</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Цена на бирже в данный момент:</h3>
						<span className='font-bold font-blue'>{current_price} $</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Последнее обновление:</h3>
						<span className='font-bold font-blue'>{new Date(last_updated).toLocaleString()}</span>
					</div>
				</li>
				<li>
					<h3 className='mb-4 mt-6 pb-[0.5em] font-bold'>Первичная статистика <span className='font-blue'>за последние {days} дней</span>:</h3>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Дисперсия:</h3>
						<span className='font-bold font-blue'>{variance.toFixed(6)}</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Нормальное отклонение:</h3>
						<span className='font-bold font-blue'>{Math.sqrt(variance).toFixed(6)}</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Математическое ожидание за период:</h3>
						<span className='font-bold font-blue'>{mean} $</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Минимальное значение за период:</h3>
						<span className='font-bold font-blue'>{min} $</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Максимально значение за период:</h3>
						<span className='font-bold font-blue'>{max} $</span>
					</div>
					<div className="mb-4 flex justify-between items-center pb-[0.5em] border-b border-b-slate-100">
						<h3>Медиана за период:</h3>
						<span className='font-bold font-blue'>{median} $</span>
					</div>
				</li>
			</ul>
		</section >
	)
}

export default Statistics