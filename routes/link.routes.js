const { Router } = require('express')
const Score = require('../models/score')
const router = Router()

router.get('/score', async (req, res) => {
	try {
		const score = await Score.find({})
		res.json(score)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
	}
})

router.get('/iante', async (req, res) => {
	try {
		const score = await Score.find({
			institute: 'Институт авиации, наземного транспорта и энергетики',
		})
		res.json(score)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
	}
})

router.get('/fmf', async (req, res) => {
	try {
		const score = await Score.find({
			institute: 'Физико-математичесий факультет',
		})
		res.json(score)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
	}
})

router.get('/iaep', async (req, res) => {
	try {
		const score = await Score.find({
			institute: 'Институт автоматики и электронного приборостроения',
		})
		res.json(score)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
	}
})

router.get('/iktzi', async (req, res) => {
	try {
		const score = await Score.find({
			institute: 'Институт компьютерных технологий и защиты информации',
		})
		res.json(score)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
	}
})

router.get('/iret', async (req, res) => {
	try {
		const score = await Score.find({
			institute: 'Институт радиоэлектронники, фотоники и цифровых технологий',
		})
		res.json(score)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
	}
})

router.get('/iiep', async (req, res) => {
	try {
		const score = await Score.find({
			institute: 'Институт инженерной экономики и предпринимательтсва',
		})
		res.json(score)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
	}
})

router.get('/vspit', async (req, res) => {
	try {
		const score = await Score.find({
			institute: 'Высшая школа прикладных информационных технологий',
		})
		res.json(score)
	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
	}
})

module.exports = router
