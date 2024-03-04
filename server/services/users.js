const logger = require('../utils/logger')
const userModel = require('../models/user')
const taskModel = require('../models/task')
const { uploadUserTaskImage } = require('../db/tasksImagesdb')

module.exports = {
	uploadUserTaskImage: async (data) => {
		logger.info('Inside uploadUserTaskImage service')

		const dbResult = uploadUserTaskImage(data)

		return dbResult
	},
}
