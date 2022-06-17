import { useState, useMemo } from 'react'

export const useSortDirections = (links = []) => {
	const [isDescSort, setIsDescSort] = useState(false)

	const sortedDirections = useMemo(() => {
		const sortableDirections = [...links]

		sortableDirections.sort((a, b) => {
			if (+a.score < +b.score) return isDescSort ? 1 : -1
			if (+a.score > +b.score) return isDescSort ? -1 : 1

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
