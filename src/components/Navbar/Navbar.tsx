import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className="container mx-auto">
				<div className={styles.wrap}>
					<h1 className='font-extralight'>крипто</h1>
					<span>
						<Link to='/'>Главная</Link>
						<Link to='/favourites'>Избранное</Link>
						<Link to='/'>Войти</Link>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Navbar