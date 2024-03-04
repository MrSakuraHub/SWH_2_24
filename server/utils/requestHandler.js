module.exports = {
	handleResponse: ({
		res,
		statusCode = 200,
		msg = 'Success',
		data = {},
		result = 1,
	}) => {
		res.status(statusCode).send({ result, msg, data })
	},

	handleError: ({
		res,
		statusCode = 500,
		err_msg = 'Error',
		err = 'error',
		data = {},
		result = 0,
	}) => {
		res.status(statusCode).send({
			result,
			err_msg,
			msg: err instanceof Error ? err.message : err.msg || err,
			data,
		})
	},
}
