import styles from './Navbar.module.scss'

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className="container mx-auto">
				<div className={styles.wrap}>
					<h1>Crypton</h1>
				</div>
			</div>
		</div>
	)
}

export default Navbar