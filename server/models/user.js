const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		createdAt: {
			type: Date,
		},
	},
	{ timestamps: true, versionKey: false }
)

userSchema.plugin(mongoosePaginate)
const userModel = mongoose.model('User', userSchema)
module.exports = userModel
