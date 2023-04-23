import { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import s from './CoinChart.module.scss'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { useGetChartDataQuery } from '../../store/coins/coins.api';
import { TCoinId } from '../../models/coins.model';

interface ICoinChart {
	id: TCoinId
}

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
		},
	},
};

const CoinChart: React.FC<ICoinChart> = ({ id }) => {
	const [days, setDays] = useState(14)

	const { data } = useGetChartDataQuery({
		id,
		days: days + '',
	})
	let chartData = {
		labels: data && data.prices.map((item, index) => item && index).reverse(),
		datasets: [
			{
				label: `Изменение за ${days} дней`,
				data: data && data.prices.map(item => item[1]),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				fill: true
			},
		]
	}

	const onDaysHandler = (days: number) => {
		setDays(days)
	}

	return (
		<div className={s.chart}>
			<Line data={chartData} options={options} />
			<div>
				<button className='button' onClick={() => onDaysHandler(100)}>За 100 дней</button>
				<button className='button' onClick={() => onDaysHandler(50)}>За 50 дней</button>
				<button className='button' onClick={() => onDaysHandler(30)}>За 30 дней</button>
				<button className='button' onClick={() => onDaysHandler(14)}>За 14 дней</button>
			</div>
		</div>
	);
};

export default CoinChart;