import React from 'react'

export const Button = ({
	containerClassName = '',
	className = '',
	onClick = () => null,
	children = '',
	isBackButton = false,
}) => {
	return (
		<div className={containerClassName}>
			<span className='filter' onClick={onClick}>
				{children}
			</span>
		</div>
	)
}
