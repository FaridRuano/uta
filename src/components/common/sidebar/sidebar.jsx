import React, { Fragment, useEffect, useState } from "react"
import { MENUITEMS } from './menu'
import { Link } from "react-router-dom"
import  logo from "../../../assets/images/logo-uta.png"
import { LogOut } from "react-feather";
const Sidebar = () => {
  const [mainmenu, setMainMenu] = useState(MENUITEMS)
	const [isChange, setIsChange] = useState(false)

  useEffect(() => {
		const currentUrl = window.location.pathname;
		mainmenu.map((items) => {
			mainMenu.filter((Items) => {
				if (Items.path === currentUrl) setNavActive(Items);
				if (!Items.children) return false;
				Items.children.filter((subItems) => {
					if (subItems.path === currentUrl) setNavActive(subItems);
					if (!subItems.children) return false;
					subItems.children.filter((subSubItems) => {
						if (subSubItems.path === currentUrl) {
							setNavActive(subSubItems);
							return true;
						} else {
							return false;
						}
					});
					return subItems;
				});
				return Items;
			});
			return items;
		});
		return () => {
			setMainMenu(MENUITEMS);
		};
	},[isChange]);

  const setNavActive = (item) => {
		setIsChange(!isChange)
		MENUITEMS.filter((menuItem) => {
			if (menuItem !== item) menuItem.active = false;			
			return false;
		});
		item.active = !item.active;
		setMainMenu(MENUITEMS);
	};
	
	const mainMenu = mainmenu.map((menuItem, i) => (
		<li className="active" key={i}>							
      <Link
        to={`${process.env.PUBLIC_URL}${menuItem.path}`}
        className="sidebar-header active"
        onClick={() => setNavActive(menuItem)}
      >
        <menuItem.icon />
        <span>{menuItem.title}</span>        
      </Link>						
		</li>
	));
	

	return (
		<Fragment>
			<div className="page-sidebar">
				<div className="main-header-left d-none d-lg-block">
					<div className="logo-wrapper">
						<Link to={`${process.env.PUBLIC_URL}/inicio`}>
							<img className="blur-up lazyloaded" src={logo} alt="" style={{height: '66px'}}/>
						</Link>            
					</div>
				</div>
				<div className="sidebar custom-scrollbar">
					<ul className="sidebar-menu">
            {mainMenu}
            <li>
              <Link to={`${process.env.PUBLIC_URL}/`}>
                <LogOut/>
                <span>Cerrar Sesion</span>
              </Link>
            </li>
          </ul>
				</div>
			</div>
		</Fragment>
	);
};

export default Sidebar