import React from 'react'

import '../CalendarBacFullBudg/CalendarBacCorresBudg.css'

import ImageJuneBacFullBudg from '../../../assets/imgCalendars/juneBacFullBudg.png'
import ImageJulyBacFullBudg from '../../../assets/imgCalendars/julyBacFullBudg.png'
import ImageAugustBacFullBudg from '../../../assets/imgCalendars/augustBacFullBudg.png'

const CalendarBacFullPaid = () => {
	return (
		<div>
			<h1>Бакалавриат / Специалитет – Очная форма обучения – Платные места</h1>
			<div className='calendars_img'>
				<img src={ImageJuneBacFullBudg} alt='' height='250px' />
				<img src={ImageJulyBacFullBudg} alt='' height='250px' />
				<img src={ImageAugustBacFullBudg} alt='' height='250px' />
			</div>
			<div className='table'>
				<table>
					<tr>
						<td className='date_in_table'>20 июня</td>
						<td className='information_in_table'>
							СРОК НАЧАЛА ПРИЕМА ДОКУМЕНТОВ, НЕОБХОДИМЫХ ДЛЯ ПОСТУПЛЕНИЯ
						</td>
					</tr>
					<tr>
						<td className='date_in_table'>20 июля</td>
						<td className='information_in_table'>
							Срок завершения приема документов от поступающих на обучение по
							результатам вступительных испытаний, проводимых КНИТУ-КАИ
							самостоятельно
						</td>
					</tr>
					<tr>
						<td className='date_in_table'>25 июля</td>
						<td className='information_in_table'>
							Срок завершения вступительных испытаний, проводимых КНИТУ-КАИ
							самостоятельно
						</td>
					</tr>
					<tr>
						<td className='date_in_table'>25 июля</td>
						<td className='information_in_table'>
							СРОК ЗАВЕРШЕНИЯ ПРИЕМА ДОКУМЕНТОВ ОТ ПОСТУПАЮЩИХ НА ОБУЧЕНИЕ
						</td>
					</tr>
					<tr>
						<td className='date_in_table'>27 июля</td>
						<td className='information_in_table'>
							Публикация конкурсных списков
						</td>
					</tr>
					<tr>
						<td className='date_in_table'>28 июля</td>
						<td className='information_in_table'>
							<b>~Нулевая волна~</b>
							<br />В 18:00 завершается прием{' '}
							<b>
								оригиналов документов установленного образца об образовании
							</b>{' '}
							и <b>заявлений о согласии на зачисление</b> от лиц, поступающих
							без вступительных испытаний (олимпиадники), на места в пределах
							квоты приема лиц, имеющих особые права, поступающих на места в
							пределах квоты целевого приема
						</td>
					</tr>
					<tr>
						<td className='date_in_table'>30 июля</td>
						<td className='information_in_table'>
							Издание и размещение ПРИКАЗОВ приоритетного этапа зачисления
						</td>
					</tr>
					<tr>
						<td className='date_in_table'>3 августа</td>
						<td className='information_in_table'>
							<b>~Первая волна~</b>
							<br />В 18:00 завершается прием{' '}
							<b>
								оригиналов документов установленного образца об образовании
							</b>{' '}
							и <b>заявлений о согласии на зачисление</b> от лиц, включенных в
							конкурсный список, желающих быть зачисленными по общему конкурсу
						</td>
					</tr>
					<tr>
						<td className='date_in_table'>9 августа</td>
						<td className='information_in_table'>
							Издание и размещение ПРИКАЗОВ основного этапа зачисления
						</td>
					</tr>
				</table>
			</div>
		</div>
	)
}

export default CalendarBacFullPaid
