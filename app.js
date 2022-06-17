const express = require('express') // подключили Express.js
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('config')

const app = express() // это наш будущий сервер

app.use(express.json({ extended: true }))
app.use('/api', require('./routes/link.routes'))

const PORT = config.get('port') || 5000 // получаем из config номер порта, устанавливая по умолчанию 5000

async function start() {
	try {
		await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser: true,
		})
		app.listen(PORT, () =>
			console.log(`App has been started on port ${PORT}... `)
		)
	} catch (err) {
		console.log('Server Error', err.message)
		process.exit(1) // завершим нам процесс, если что-то пошло не так
	}
}
start()
