const { DB_URL, DB_NAME } = require('../config/config')
const { connect } = require('mongoose')

module.exports = {
	mongoInit: async () => {
		try {
			await connect(DB_URL, { dbName: DB_NAME })
			console.log('Database Connected')
		} catch (err) {
			console.log(`Error while connecting to database: ${err}`)
			client.close()
		}
	},
}
