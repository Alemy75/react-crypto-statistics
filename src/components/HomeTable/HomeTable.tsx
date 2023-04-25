import s from './HomeTable.module.scss';
import { useGetCoinsQuery } from "../../store/coins/coins.api"
import { Link } from 'react-router-dom';

const HomeTable = () => {

	const { data: coins, isSuccess, isFetching, isError } = useGetCoinsQuery({
		refetchOnFocus: true,
	})
	
	return (
		<>
			<div className={s["mobile-table"]}>
				<table className={s.iksweb}>
					<thead>
						<tr>
							<th style={{ textAlign: 'left' }}>Монета</th>
							<th>Стоимость в $</th>
							<th>Изменение за 1 ч.</th>
							<th>Изменение за 24 ч.</th>
							<th>В обороте за 24 ч.</th>
							<th>Рыночная кап-ция</th>
						</tr>
					</thead>
					<tbody>
						{isSuccess &&
							coins.map((coin, index) => (
								<tr key={coin.id} className={index % 2 === 0 ? s.second : s.first}>
									<td>
										<Link to={coin.id + '/'}>
											<div className={s["coin-title"]}>
												<img src={coin.image.large} alt={coin.name} />
												<h3>{coin.name}</h3>
												<p>{coin.symbol}</p>
											</div>
										</Link>
									</td>
									<td>{coin.market_data.current_price.usd} $</td>
									<td className={coin.market_data.price_change_percentage_1h_in_currency.usd > 0 ? s.up : s.low}>
										{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}% {coin.market_data.price_change_percentage_1h_in_currency.usd > 0 ? "⏶" : "⏷"}
									</td>
									<td className={coin.market_data.price_change_percentage_24h_in_currency.usd > 0 ? s.up : s.low}>
										{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}% {coin.market_data.price_change_percentage_24h_in_currency.usd > 0 ? "⏶" : "⏷"}
									</td>
									<td>{coin.market_data.total_volume.usd} $</td>
									<td>{coin.market_data.market_cap.usd} $</td>
								</tr>
							))
						}

					</tbody>
				</table>

			</div>
			{isFetching && <h1 className='w-[100%] mt-[2em] text-center opacity-20'>...</h1>}
			{isError && <div className='w-[50%] mt-[2em] mx-auto text-center opacity-50'>Возникла ошибка. Сервис, предоставиляющий API заблокировал доступ к данным. Ожидайте в течении 5-10 минут до возобновления доступа.</div>}
		</>
	)
}

export default HomeTable