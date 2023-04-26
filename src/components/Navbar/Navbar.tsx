import Cryptiger from '../icons/Cryptiger'
import styles from './Navbar.module.scss'

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className="container mx-auto">
				<div className={styles.wrap}>
					<span>Crypt<Cryptiger/></span>
				</div>
			</div>
		</div>
	)
}

export default Navbar