import React, { useCallback, useEffect, useState } from 'react'
import { FullDirectionsList } from '../../../components/FullDirectionsList/FullDirectionsList'
import { useHttp } from '../../../hooks/http.hook'

const CardOfDirectionsIANTE = () => {
	const [links, setLinks] = useState([])
	const { loading, request } = useHttp()

	const fetchLinks = useCallback(async () => {
		try {
			const fetched = await request('/api/iante', 'GET')
			setLinks(fetched)
		} catch (e) {}
	}, [request])

	useEffect(() => {
		fetchLinks()
	}, [fetchLinks])
	return (
		<div>
			<>
				<FullDirectionsList links={links} />
			</>
		</div>
	)
}

export default CardOfDirectionsIANTE
