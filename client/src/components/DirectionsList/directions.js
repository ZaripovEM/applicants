import React from 'react'
import LogoIANTE from '../../assets/imgInst/1.png'
import LogoFMF from '../../assets/imgInst/2.png'
import LogoIAEP from '../../assets/imgInst/3.png'
import LogoIKTZI from '../../assets/imgInst/4.png'
import LogoIRET from '../../assets/imgInst/5.png'
import LogoIIEP from '../../assets/imgInst/6.png'
import LogoVSPIT from '../../assets/imgInst/7.png'

const menu = [
	{
		title: 'Институт авиации, наземного транспорта и энергетики',
		link: '/professions/cardofdirectionsiante',
		linkLogo: <img src={LogoIANTE} alt='logo_of_IANTE' height='50px' />,
	},
	{
		title: 'Физико-математичесий факультет',
		link: '/professions/cardofdirectionsfmf',
		linkLogo: <img src={LogoFMF} alt='logo_of_IANTE' height='50px' />,
	},
	{
		title: 'Институт автоматики и электронного приборостроения',
		link: '/professions/cardofdirectionsiaep',
		linkLogo: <img src={LogoIAEP} alt='logo_of_IANTE' height='50px' />,
	},
	{
		title: 'Институт компьютерных технологий и защиты информации',
		link: '/professions/cardofdirectionsiktzi',
		linkLogo: <img src={LogoIKTZI} alt='logo_of_IANTE' height='50px' />,
	},
	{
		title: 'Институт радиоэлектронники, фотоники и цифровых технологий',
		link: '/professions/cardofdirectionsiret',
		linkLogo: <img src={LogoIRET} alt='logo_of_IANTE' height='50px' />,
	},
	{
		title: 'Институт инженерной экономики и предпринимательтсва',
		link: '/professions/cardofdirectionsiiep',
		linkLogo: <img src={LogoIIEP} alt='logo_of_IANTE' height='50px' />,
	},
	{
		title: 'Высшая школа прикладных информационных технологий',
		link: '/professions/cardofdirectionsvspit',
		linkLogo: <img src={LogoVSPIT} alt='logo_of_IANTE' height='50px' />,
	},
]

export default menu
