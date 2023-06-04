const AboutPage = () => {
	return (
		<>
			<div className="container mx-auto">
				<div className="mb-[1em] mt-[4em] flex justify-between items-center">
					<h2>О разработчиках: </h2>
				</div>
				<div>Приложение было разработано студентами группы ЭИС-38 для курсового проекта на тему "Первичный статистический анализ данных". В разработке приложения принимали участие: </div>
				<div className="flex justify-between mt-4">
					<div className="carddev">
						<img
							className="imground"
							src="https://cdn-edge.kwork.ru/files/avatar/large/19/14815809-2.jpg"
							alt=""
						/>
						<div>Алексеев Максим</div>
						<p>Руководитель проекта, программист</p>
					</div>
					<div className="carddev">
						<img
							className="imground"
							src="https://sun9-57.userapi.com/impg/JESPLiEtPxVVTEOlbS14w4IGnWWW-SWFnwHs8Q/XjV-bFLNH1s.jpg?size=1440x1440&quality=95&sign=1a09a40ed8fa6b7d810b9e834e4dd8e2&type=album"
							alt=""
						/>
						<div>Аверьянов Илья</div>
						<p>Документовид, программист</p>
					</div>
					<div className="carddev">
						<img
							className="imground"
							src="https://sun9-13.userapi.com/impf/c848524/v848524094/39115/1UhJtUEO-p8.jpg?size=2048x1363&quality=96&sign=eb25a15088906afdc9607298d4397905&type=album"
							alt=""
						/>
						<div>Рожик Дана</div>
						<p>Документовид, программист</p>
					</div>
					<div className="carddev">
						<img
							className="imground"
							src="https://sun9-7.userapi.com/impg/-nMs6sQJ8vOM3FTv-_N9dCwQ9mEjD31IFJXmEQ/0-uZWrEC_-o.jpg?size=1439x2160&quality=95&sign=d53776540ae1939348e5e0d601d0847d&type=album"
							alt=""
						/>
						<div>Бабенко Анастасия</div>
						<p>Документовид, программист</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutPage