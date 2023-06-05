import { Outlet } from "react-router-dom"
import Sidebar from "../components/common/sidebar/sidebar"
import '../assets/scss/app_page.scss'
import { Fragment } from "react"

const App = () => {
	
	return (
		<Fragment className="main-page">
			<div className="page-container">
				<Sidebar/>
				<div>
					<Outlet/>
				</div>
			</div>
		</Fragment>
	)
}
export default App