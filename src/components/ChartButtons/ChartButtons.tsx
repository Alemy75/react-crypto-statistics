
import { useState } from 'react';
import { useActions } from '../../hooks/hooks';

interface IChartButtonProps {
	onClick(days: number): void
}

const ChartButtons: React.FC<IChartButtonProps> = ({ onClick }) => {
	const [inputValue, setInputValue] = useState('')

	const { setForecastValue } = useActions()

	

	return (
		<> 
			<div className='flex justify-between w-[100%]'>
				<div className='w-[100%]'>
					<input className='forecast__input' type="number" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
					<button className='button border-right-none' onClick={() => setForecastValue(Number(inputValue))}>Спрогнозировать</button>
				</div>
				<select onChange={(event) => onClick(Number(event.target.value))} className='button '>
					<option value={100}>100 дней</option>
					<option value={182}>Пол года</option>
					<option value={365}>Год</option>
					<option value={730}>2 года</option>
				</select>
			</div>
		</>
	)
}

export default ChartButtons

{/* <div className='flex justify-between'>
				<button onClick={() => onClick(100)} className='button'>За 100 дней</button>
				<button onClick={() => onClick(182)} className='button'>За пол года</button>
				<button onClick={() => onClick(365)} className='button'>За год</button>
				<button onClick={() => onClick(720)} className='button mr-0'>За 2 года</button>
			</div> */}