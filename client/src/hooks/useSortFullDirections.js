import { useState, useMemo } from 'react'

export const useSortFullDirections = (links = []) => {
	const [isDescSort, setIsDescSort] = useState(false)

	const sortedDirections = useMemo(() => {
		const sortableDirections = [...links]

		sortableDirections.sort((a, b) => {
			if (+a.cost_of_education < +b.cost_of_education)
				return isDescSort ? 1 : -1
			if (+a.cost_of_education > +b.cost_of_education)
				return isDescSort ? -1 : 1

			return 0
		})

		return sortableDirections
	}, [isDescSort, links])

	return {
		sortedDirections,
		isDescSort,
		setIsDescSort,
	}
}
