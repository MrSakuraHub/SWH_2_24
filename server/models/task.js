const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const taskSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		userId: {
			type: String,
			required: true,
		},
		taskId: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
		},
	},
	{ timestamps: true, versionKey: false }
)

taskSchema.plugin(mongoosePaginate)
const taskModel = mongoose.model('Task', taskSchema)
module.exports = taskModel
