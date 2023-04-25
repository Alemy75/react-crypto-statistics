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

ChartJS.register(CategoryScale,LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const CoinChart: React.FC<ICoinChart> = ({id, days}) => {

	const { data, isSuccess } = useGetChartDataQuery({id,days: days + '',})

	let chartData = {
		labels: isSuccess ? data.prices.map((item, index) => item && index).reverse() : [],
		datasets: [
			{
				label: `Изменение цены за ${days} дней`,
				data: isSuccess ? data.prices.map(item => item[1]) : [],
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