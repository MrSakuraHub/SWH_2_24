const winston = require('winston')

module.exports = winston.createLogger({
	format: winston.format.combine(
		winston.format.errors({ stack: true }),
		winston.format.label({ label: '[LOGGER]' }),
		winston.format.timestamp({ format: 'YY-MM-DD HH:MM:SS' }),
		winston.format.printf(
			(log) =>
				` ${log.label}  ${log.timestamp}  ${log.level} : ${
					log.message
				} ${log.stack ?? ''}`
		)
	),
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize({ all: true })
			),
			level: 'info',
		}),
		new winston.transports.File({
			filename: './logs/exceptions.log',
			level: 'error',
			maxsize: 1000000,
			maxFiles: 20,
			tailable: true,
			zippedArchive: true,
		}),
	],
})
