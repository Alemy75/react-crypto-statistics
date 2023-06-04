import { useAppSelector } from '../../hooks/hooks'

const GrowthTable = () => {
	const {absoluteGrowth, growthTemp} = useAppSelector(state => state.coins)

	return (
		<table className="iksweb">
			<tbody>
				<tr>
					<td>Абсолютный прирост</td>
					<td>Темп роста</td>
					<td>Темп прироста</td>
				</tr>
				<tr>
					<td>{absoluteGrowth.toFixed(2)} $</td>
					<td style={growthTemp > 0 ? {color: '#9cc49b'} : {color: '#D62676'}}>{growthTemp} %</td>
					<td style={growthTemp - 100 > 0 ? {color: '#c48074'} : {color: '#D62676'}}>{growthTemp - 100} %</td>
				</tr>
			</tbody>
		</table>
	)
}

export default GrowthTable