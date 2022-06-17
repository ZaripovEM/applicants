import React from 'react'
import './DirectionsList.css'
import directions from '../DirectionsList/directions'
import { NavLink } from 'react-router-dom'

export const DirectionsList = () => {
	return (
		<div>
			<ul className='directions'>
				{directions.map((item, idx) => (
					<li key={`direction item ${idx}`}>
						<div className='logo_of_institutions'>{item.linkLogo}</div>
						<NavLink to={item.link}>{item.title}</NavLink>
					</li>
				))}
			</ul>
		</div>
	)
}
