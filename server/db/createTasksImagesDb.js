const sqlite3 = require('sqlite3')
const TransactionDatabase = require('sqlite3-transactions').TransactionDatabase
const logger = require('../utils/logger')

const DBSOURCE = 'db/taskImagesdb.sqlite'

const db = new TransactionDatabase(
	new sqlite3.Database(DBSOURCE, (err) => {
		if (err) {
			// Cannot open database
			logger.error(err.message)
			throw err
		} else {
			db.run(
				`CREATE TABLE Tasks (
                    Id INTEGER PRIMARY KEY UNIQUE,            
                    UserId INTEGER, 
                    Mimetype TEXT,                         
                    Content BLOB,                         
                    Size INTEGER,                   
                    DateModified DATE,
                    DateCreated DATE
                    )`
			)
		}
	})
)
