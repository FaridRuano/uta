import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/sidebar/sidebar";
import "../assets/scss/app_page.scss";
import React, { useState } from "react";
import Header from "../components/common/header/header";

export const Context = React.createContext();

const App = () => {
  const [sideOpen, setSideOpen] = useState(true);

  const toggleOpen = () => {
    setSideOpen(!sideOpen);
  };

  return (
    <Context.Provider value={[sideOpen, setSideOpen]}>
      <div className="main-page">
        <div className="page-container">
          <Sidebar className="sidebar-page" isOpen={sideOpen} />
          <Header activeNav={toggleOpen} isOpen={sideOpen} />
          <div className={!sideOpen ? "main-content" : "main-content-cl"}>
            <Outlet />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};
export default App;
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
