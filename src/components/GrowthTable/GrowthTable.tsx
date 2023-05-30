import { useAppSelector } from '../../hooks/hooks'

type Props = {}

const GrowthTable = (props: Props) => {
	const {absoluteGrowth, growthTemp, pregrowthTemp} = useAppSelector(state => state.coins)

	return (
		<table className="iksweb">
			<tbody>
				<tr>
					<td>Абсолютный прирост</td>
					<td>Темп роста</td>
					<td>Темп прироста</td>
				</tr>
				<tr>
					<td className='font-blue'>{absoluteGrowth.toFixed(2)} $</td>
					<td style={growthTemp > 0 ? {color: 'rgb(54, 208, 102)'} : {color: '#D62676'}}>{growthTemp} %</td>
					<td style={growthTemp - 100 > 0 ? {color: 'rgb(54, 208, 102)'} : {color: '#D62676'}}>{growthTemp - 100} %</td>
				</tr>
			</tbody>
		</table>
	)
}

export default GrowthTable