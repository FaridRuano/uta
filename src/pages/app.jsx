import { Outlet } from "react-router-dom"
import Sidebar from "../components/common/sidebar/sidebar"
import '../assets/scss/app_page.scss'
import { Fragment, useState } from "react"
import Header from "../components/common/header/header"

const App = () => {
	const [sideOpen, setSideOpen] = useState(true)

	const toggleOpen = () => {
		setSideOpen(!sideOpen)
		console.log(sideOpen)
	}

	return (
		<div className="main-page">
			<div className="page-container">
				<Sidebar className="sidebar-page" isOpen={sideOpen}/>
				<Header activeNav={toggleOpen} isOpen={sideOpen}/>	
				<div className={!sideOpen ? "main-content" : "main-content-cl"}>
					<Outlet/>
				</div>
			</div>
		</div>
	)
}
export default App