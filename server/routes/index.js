const express = require('express')
const router = express.Router()
const userRoutes = require('./users')

router.get('/', (req, res) => {
	res.send({
		data: 'Server working',
	})
})
router.use('/users', userRoutes)

module.exports = router
