import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home/Home'
import Scores from './pages/Scores/Scores'
import Professions from './pages/Professions/Professions'
import Calendar from './pages/Calendar/Calendar'

import CardOfDirectionsIANTE from './pages/CardOfDirections/CardOfDirectionsIANTE/CardOfDirectionsIANTE'
import CardOfDirectionsFMF from './pages/CardOfDirections/CardOfDirectionsFMF/CardOfDirectionsFMF'
import CardOfDirectionsIAEP from './pages/CardOfDirections/CardOfDirectionsIAEP/CardOfDirectionsIAEP'
import CardOfDirectionsIKTZI from './pages/CardOfDirections/CardOfDirectionsIKTZI/CardOfDirectionsIKTZI'
import CardOfDirectionsIRET from './pages/CardOfDirections/CardOfDirectionsIRET/CardOfDirectionsIRET'
import CardOfDirectionsIIEP from './pages/CardOfDirections/CardOfDirectionsIIEP/CardOfDirectionsIIEP'
import CardOfDirectionsVSPIT from './pages/CardOfDirections/CardOfDirectionsVSPIT/CardOfDirectionsVSPIT'

import CalendarBacFullBudg from './pages/Calendars/CalendarBacFullBudg/CalendarBacFullBudg'
import CalendarBacFullPaid from './pages/Calendars/CalendarBacFullPaid/CalendarBacFullPaid'
import CalendarBacCorresBudg from './pages/Calendars/CalendarBacCorresBudg/CalendarBacCorresBudg'
import CalendarBacCorresPaid from './pages/Calendars/CalendarBacCorresPaid/CalendarBacCorresPaid'

const useRoutes = isAuthenicated => {
	if (isAuthenicated) {
		return (
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/scores' element={<Scores />} />

				<Route path='/professions' element={<Professions />} />
				<Route
					path='/professions/cardofdirectionsiante'
					element={<CardOfDirectionsIANTE />}
				/>
				<Route
					path='/professions/cardofdirectionsfmf'
					element={<CardOfDirectionsFMF />}
				/>
				<Route
					path='/professions/cardofdirectionsiaep'
					element={<CardOfDirectionsIAEP />}
				/>
				<Route
					path='/professions/cardofdirectionsiktzi'
					element={<CardOfDirectionsIKTZI />}
				/>
				<Route
					path='/professions/cardofdirectionsiret'
					element={<CardOfDirectionsIRET />}
				/>
				<Route
					path='/professions/cardofdirectionsiiep'
					element={<CardOfDirectionsIIEP />}
				/>
				<Route
					path='/professions/cardofdirectionsvspit'
					element={<CardOfDirectionsVSPIT />}
				/>

				<Route path='/calendar' element={<Calendar />} />
				<Route
					path='/calendar/calendarbacfullbudg'
					element={<CalendarBacFullBudg />}
				/>
				<Route
					path='/calendar/calendarbacfullpaid'
					element={<CalendarBacFullPaid />}
				/>
				<Route
					path='/calendar/calendarbaccorresbudg'
					element={<CalendarBacCorresBudg />}
				/>
				<Route
					path='/calendar/calendarbaccorrespaid'
					element={<CalendarBacCorresPaid />}
				/>
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		)
	}
}

export default useRoutes
