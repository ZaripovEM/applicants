import React from 'react'
import { NavLink } from 'react-router-dom'
import './FormOfEducation.css'
import formsEducation from './formsEducation'

const FormOfEducation = () => {
	return (
		<div>
			<ul className='directions'>
				{formsEducation.map((item, idx) => (
					<li key={`direction item ${idx}`}>
						<NavLink to={item.link}>{item.title}</NavLink>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FormOfEducation
