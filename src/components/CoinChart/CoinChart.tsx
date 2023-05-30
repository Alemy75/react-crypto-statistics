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
import { useAppSelector } from "../../hooks/hooks";

ChartJS.register(CategoryScale,LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const CoinChart: React.FC<ICoinChart> = ({id, days}) => {

	const { forecastValue } = useAppSelector(store => store.coins)

	const { data, isSuccess } = useGetChartDataQuery({id,days: days + '',})

	let forecastDateArray = Utils.createForecastDatesArray(forecastValue)

	let forecastArray = isSuccess ? [...data.prices.map(item => item[1]), ...Utils.linearRegressionForecast(data.prices.map(item => item[1]), forecastValue)] : []

	let chartData = {
		labels: isSuccess ? [...Utils.createReverseDateArray(data.prices.map((item, index) => item && index)), ...forecastDateArray] : [],
		datasets: [
			{
				label: `Изменение цены за ${days} дней`,
				data: isSuccess ? data.prices.map(item => item[1]) : [],
			},
			{
				label: `Прогнозирование`,
				data: forecastArray,
				borderColor: '#D62676',
				backgroundColor: '#D6267650',			
			},
			{
				label: `Линия тренда`,
				data: isSuccess ? Utils.calculateTrendLine(data.prices.map(item => item[1])) : [],
				borderColor: '#6DA58440',
				backgroundColor: '#6DA58410',
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