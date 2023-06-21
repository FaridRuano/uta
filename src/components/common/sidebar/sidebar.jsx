import React, { Fragment, useEffect, useState } from "react"
import { MENUITEMS } from './menu'
import { Link } from "react-router-dom"
import  logo from "../../../assets/images/logo-uta.png"
import { LogOut, Box } from "react-feather";
import "./style.scss"

const Sidebar = ({ isOpen }) => {
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
		<li className={!menuItem.active ?"option-sidebar":"option-sidebar active-op"} key={i}>							
			<Link
				to={`${process.env.PUBLIC_URL}${menuItem.path}`}
				className={!menuItem.active ? "option-header" : "option-header active-op-hd"}
				onClick={() => setNavActive(menuItem)}
			>
        		<menuItem.icon className={!isOpen ? "option-header-icon" : "option-header-icon closed-ops"}/>
        		<span>{menuItem.title}</span>        
      		</Link>						
		</li>
	));	

	const mainMenuClosed = mainmenu.map((menuItem, i) => (
		<li className={!menuItem.active ?"option-sidebar-cl":"option-sidebar-cl active-op"} key={i}>							
			<Link
				to={`${process.env.PUBLIC_URL}${menuItem.path}`}
				className={!menuItem.active ? "option-header" : "option-header active-op-hd"}
				onClick={() => setNavActive(menuItem)}
			>
        		<menuItem.icon className={!isOpen ? "option-header-icon" : "option-header-icon closed-ops"}/>
      		</Link>						
		</li>
	));	
	

	return (
		<Fragment>
			<div className={!isOpen ? "page-sidebar" : "page-sidebar closed"}>
				<div className={!isOpen ? "header-sidebar" : "header-sidebar closed-hd"}>
					<div className="header-sidebar-logo">
						<Link to={`${process.env.PUBLIC_URL}/inicio`}>
							<img className={!isOpen ? "uta-logo" : "uta-logo closed-lg"} src={logo} alt="Inicio"/>
						</Link>            
					</div>
					<div className={!isOpen ? "header-sidebar-title" : "header-sidebar-title closed-ti"}>
						<span className="title-name">Universidad</span>
						<span className="title-subname">Tecnica de Ambato</span>
					</div>
				</div>
				<div className="body-sidebar">
					{!isOpen ? (
						<span className="menu-span">Menu</span>							
					) : (
						<div className="menu-icon-side">
							<Box/>
						</div>
					)}	
					<div className="separator"/>
					<div className="body-sidebar-options">
						{!isOpen ? mainMenu : mainMenuClosed}
						<li className={!isOpen ? "option-sidebar logout-sidebar" : "option-sidebar-cl logout-sidebar"}>
							<Link to={`${process.env.PUBLIC_URL}/`} className="option-header">
								{!isOpen ? (
									<Fragment>
										<LogOut className="option-header-icon"/>
										<span>Cerrar Sesion</span>
									</Fragment>
								) : (
									<LogOut className="option-header-icon"/>
								)}
								
							</Link>
						</li>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Sidebar