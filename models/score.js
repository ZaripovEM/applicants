const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScoreSchema = new Schema({
	code: String,
	name: String,
	score: Number,
	institute: String,
	budget_places: Number,
	cost_of_education: Number,
	paid_places: Number,
	description: String,
})

const Score = mongoose.model('score', ScoreSchema)

module.exports = Score


