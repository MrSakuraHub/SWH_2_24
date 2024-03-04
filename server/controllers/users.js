const fs = require('node:fs')
const logger = require('../utils/logger')
const { handleResponse, handleError } = require('../utils/requestHandler')
const { uploadUserTaskImage } = require('../services/users')

module.exports = {
	uploadUserTaskImage: async (req, res) => {
		try {
			logger.info('Inside uploadUserTaskImage controller')

			const { userAddress: userId, taskId } = req.body
			const { path, mimetype, size } = req.file

			const content = fs.readFileSync(path)

			const result = await uploadUserTaskImage({
				taskId,
				userId,
				mimetype,
				content: content.toString(),
				size,
			})

			return handleResponse({ res, data: result })
		} catch (error) {
			logger.error(error)
			return handleError(res, error)
		}
	},
}
