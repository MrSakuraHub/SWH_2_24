const sqlite3 = require('sqlite3')
const TransactionDatabase = require('sqlite3-transactions').TransactionDatabase
const logger = require('../utils/logger')

const DBSOURCE = 'db/taskImagesdb.sqlite'

module.exports = {
	uploadUserTaskImage: (userImageData) => {
		const { taskId, userId, mimetype, content, size } = userImageData

		const db = new TransactionDatabase(
			new sqlite3.Database(DBSOURCE, (err) => {
				if (err) {
					// Cannot open database
					logger.error(err.message)
					throw err
				} else {
					try {
						const insert =
							'INSERT INTO Tasks (Id, UserId, MimeType, Content, Size, DateCreated) VALUES (?,?,?,?,?,?)'
						db.run(insert, [
							taskId,
							userId,
							mimetype,
							content,
							size,
							Date('now'),
						])
					} catch (error) {
						logger.error(error)
						throw error
					}
				}
			})
		)
	},
}
