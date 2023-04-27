interface IChartButtonProps {
	onClick(days: number): void
}

const ChartButtons: React.FC<IChartButtonProps> = ({onClick}) => {
	return (
		<div className='flex justify-between'>
			<button onClick={() => onClick(14)} className='button'>За 14 дней</button>
			<button onClick={() => onClick(30)} className='button'>За 30 дней</button>
			<button onClick={() => onClick(50)} className='button'>За 50 дней</button>
			<button onClick={() => onClick(100)} className='button mr-0'>За 100 дней</button>
		</div>
	)
}

export default ChartButtons