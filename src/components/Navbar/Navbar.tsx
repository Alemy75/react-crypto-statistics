import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className="container mx-auto">
				<div className={styles.wrap}>
					<h1 className='font-extralight'>CryptoCoin</h1>
					<span>
						<Link to='/'>Главная</Link>
						<Link to='/about'>О разработчиках</Link>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Navbar