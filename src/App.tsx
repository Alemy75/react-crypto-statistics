import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import Coinpage from './pages/coinpage/Coinpage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Homepage/>}/>
			<Route path='/:id' element={<Coinpage/>}/>
		</Routes>
	)
}

export default App
