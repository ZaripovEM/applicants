import React from 'react'
import './Home.css'

import ImageLogo from '../../assets/img/logo.svg'
import ImageRector from '../../assets/img/rector.svg'

const Home = () => {
	return (
		<div className='welcome'>
			<div className='wripper'>
				<div className='card'>
					<img src={ImageRector} alt='' />
					<h3>Алибаев Тимур Лазович</h3>
					<h4>И.о. ректора КНИТУ-КАИ</h4>
					<div className='description'>
						<p>
							Созданный в далеком 1932 году КНИТУ-КАИ прошел вместе со страной
							все этапы её развития. Нашу прочную основу составляют
							высокопрофессиональный научный состав и умные студенты. Мы ставим
							высокие цели и достигаем их.
						</p>
					</div>
				</div>
			</div>
			<div className='logo'>
				<img src={ImageLogo} alt='' height='100px' />
			</div>
		</div>
	)
}

export default Home
