import React, { useState } from 'react'
import './LinksList.css'
import ImageFinder from '../../assets/img/finder.svg'
import { useSortDirections } from '../../hooks/useSortDirections'
import { Button } from '../Button/Button'

import ImageSortUp from '../../assets/img/sortUp.svg'
import ImageSortDown from '../../assets/img/sortDown.svg'

export const LinksList = ({ links }) => {
	const { sortedDirections, isDescSort, setIsDescSort } = useSortDirections(
		links || []
	)

	const [value, setValue] = useState('')

	const filteredDirections = sortedDirections.filter(sortedDirections => {
		return sortedDirections.name.toLowerCase().includes(value.toLowerCase())
	})

	return (
		<div>
			<div className='form'>
				<form className='search_form'>
					<input
						type='text'
						placeholder='Поиск по специальностям...'
						className='search_input'
						onChange={event => setValue(event.target.value)}
					/>
					<img
						src={ImageFinder}
						alt='img'
						className='search_img'
						height='8px'
					/>
					<Button onClick={() => setIsDescSort(!isDescSort)}>
						{isDescSort ? (
							<img
								className='sort_down_image'
								src={ImageSortDown}
								alt=''
								height='20px'
							/>
						) : (
							<img
								className='sort_up_image'
								src={ImageSortUp}
								alt=''
								height='20px'
							/>
						)}
					</Button>
				</form>
			</div>
			<ul className='directions'>
				{filteredDirections.map((item, idx) => (
					<li key={`links item ${idx}`}>
						<div className='code'>{item.code}</div>
						<div className='name'>{item.name}</div>
						<div className='score'>{item.score}</div>
					</li>
				))}
			</ul>
		</div>
	)
}
