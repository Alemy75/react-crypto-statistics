import { Line } from "react-chartjs-2";
import s from './CoinChart.module.scss'
import { options } from './ChartSettings';
import { useGetChartDataQuery } from '../../store/coins/coins.api';
import { ICoinChart } from '../../models/coins.model';

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
import { Utils } from "../../utils/coin.utils";

ChartJS.register(CategoryScale,LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const CoinChart: React.FC<ICoinChart> = ({id, days, forecastArray}) => {

	const { data, isSuccess } = useGetChartDataQuery({id,days: days + '',})

	let chartData = {
		labels: isSuccess ? data.prices.map((item, index) => item && index).reverse() : [],
		datasets: [
			{
				label: `Изменение цены за ${days} дней`,
				data: isSuccess ? data.prices.map(item => item[1]) : [],
			},
			{
				label: `Прогнозирование`,
				data: isSuccess ? Utils.exponentialSmoothing(data.prices.map(item => item[1]), 0.2) : [],
				borderColor: '#D62676',
				backgroundColor: '#D6267650',			
			},
			{
				label: `Прямая изменения`,
				data: isSuccess ? Utils.calculateLineGraphData(data.prices.map(item => item[1])) : [],
				borderColor: '#6DA584',
				backgroundColor: '#6DA58450',
			},
		]
	}

	return (
		<div className={s.chart}>
			<Line data={chartData} options={options} />
		</div>
	);
};

export default CoinChart;