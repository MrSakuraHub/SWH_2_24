const Router = require('express')
const router = Router()
const upload = require('../middleware/upload')
const { uploadUserTaskImage } = require('../controllers/users')

router.post('/upload-task-image', upload.single('file'), uploadUserTaskImage)

module.exports = router
