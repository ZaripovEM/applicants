import React from 'react'
import ImageHomeOut from '../../assets/img/homeOut.svg'
import ImageHomeIn from '../../assets/img/homeIn.svg'
import ImageScoresOut from '../../assets/img/scoresOut.svg'
import ImageScoresIn from '../../assets/img/scoresIn.svg.svg'
import ImageProfessionsOut from '../../assets/img/professionOut.svg'
import ImageProfessionsIn from '../../assets/img/professionIn.svg.svg'
import ImageCalendarOut from '../../assets/img/calendarOut.svg'
import ImageCalendarIn from '../../assets/img/calendarIn.svg'

const menu = [
	{
		title: 'Поехали!',
		link: '/',
		icon: <img src={ImageHomeOut} alt='' height='50px' />,
	},
	{
		title: 'Проходные баллы',
		link: '/scores',
		icon: <img src={ImageScoresOut} alt='' height='50px' />,
	},
	{
		title: 'Направления подготовки',
		link: '/professions',
		icon: <img src={ImageProfessionsOut} alt='' height='50px' />,
	},
	{
		title: 'Календарь приема',
		link: '/calendar',
		icon: <img src={ImageCalendarOut} alt='' height='50px' />,
	},
]

export default menu
