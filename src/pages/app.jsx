import { Outlet } from "react-router-dom"
import Sidebar from "../components/common/sidebar/sidebar"

const App = () => {
	
	return (
		<div>
			<div>
				<div>
                    <Sidebar/>
					<div><Outlet/></div>
				</div>
			</div>			
		</div>
	)
}
export default App