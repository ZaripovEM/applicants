import React, { useState } from 'react'
import './FullDirectionsList.css'
import ImageFinder from '../../assets/img/finder.svg'
import { Button } from '../Button/Button'

import ImageSortUp from '../../assets/img/sortUp.svg'
import ImageSortDown from '../../assets/img/sortDown.svg'
import { useSortFullDirections } from '../../hooks/useSortFullDirections'

export const FullDirectionsList = ({ links }) => {
	const { sortedDirections, isDescSort, setIsDescSort } = useSortFullDirections(
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
						<div className='nameFull'>{item.name}</div>
						<div className='codeFull'>
							<b>Код специальности:</b> {item.code}
						</div>
						<div className='scoreFull'>
							<b>Проходной балл в 2021 году:</b> {item.score}
						</div>
						<div className='cost_of_education'>
							<b>Стоимость обучения:</b> {item.cost_of_education} руб.
						</div>
						<div className='budget_places'>
							<b>Количество бюджетных мест:</b> {item.budget_places}
						</div>
						<div className='paid_places'>
							<b>Количество платных мест:</b> {item.paid_places}
						</div>
						<div className='description'>
							<b>Краткое описание:</b> {item.description}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
