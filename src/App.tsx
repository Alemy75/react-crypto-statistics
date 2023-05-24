import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import Coinpage from './pages/coinpage/Coinpage'
import Navbar from './components/Navbar/Navbar'
import Favpage from './pages/favpage/Favpage'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/:id' element={<Coinpage />} />
				<Route path='/favourites' element={<Favpage/>} />
			</Routes>
		</>
	)
}

export default App
