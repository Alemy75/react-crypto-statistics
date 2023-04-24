import HomeTable from "../../components/HomeTable/HomeTable"
import Navbar from "../../components/Navbar/Navbar"

const Homepage = () => {

	return (
		<>
			<div className="container mx-auto">
				<h2 className="mb-[1em] mt-[4em]">Все монеты:</h2>
				<HomeTable/>
			</div>
		</>
	)
}

export default Homepage