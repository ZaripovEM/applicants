import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { LinksList } from '../../components/LinksList/LinksList'

export const Scores = () => {
	const [links, setLinks] = useState([])
	const { loading, request } = useHttp()

	const fetchLinks = useCallback(async () => {
		try {
			const fetched = await request('/api/score', 'GET')
			setLinks(fetched)
		} catch (e) {}
	}, [request])

	useEffect(() => {
		fetchLinks()
	}, [fetchLinks])

	return (
		<>
			<LinksList links={links} />
		</>
	)
}

export default Scores
