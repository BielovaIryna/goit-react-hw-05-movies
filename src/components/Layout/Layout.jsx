 import {NavLink} from 'react-router-dom';
import css from './Layout.module.css'
const Layout =({children})=>{
	return (
		<>
			<header className={css.headerPage}>
				<nav className={css.nav}>
					<NavLink className={css.navLink} to ="/" end>Home</NavLink>
					<NavLink className={css.navLink} to ="/movies">Movies</NavLink>

				</nav>
			</header>

			<main>{children}</main>
			
		</>
	)
}
export default Layout;