import React from 'react'
import { NavLink } from 'react-router-dom'
import menu from './menu'
import MenuImage from '../../assets/img/menu.svg'
import './Header.css'

const Header = () => {
	return (
		<div className='header'>
			<ul className='menu'>
				{menu.map((item, idx) => (
					<li key={`menu item ${idx}`}>
						{item.icon}
						<NavLink to={item.link}>{item.title}</NavLink>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Header
