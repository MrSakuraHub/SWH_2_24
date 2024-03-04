const multer = require('multer')
const fs = require('node:fs')
const path = require('node:path')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const filePath = path.join(__dirname, '../uploads')
		fs.mkdirSync(filePath, { recursive: true })
		cb(null, filePath)
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname)
	},
})

const upload = multer({ storage: storage })

module.exports = upload
