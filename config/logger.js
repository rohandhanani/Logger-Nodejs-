const {
    createLogger,
    format,
    transports
} = require('winston');
require('winston-mongodb');

// get output in terminal console.log.

// const logger = createLogger({
//     transports: [
//         new transports.Console({
//             level: 'info',
// format: format.combine(format.timestamp(), format.json())
//             format: format.combine(format.timestamp(), format.simple())
//         })
//     ]
// });

// get output in new file.

const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'info.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
                // format: format.combine(format.timestamp(), format.simple())
        }),

        // get output in MongoDB
        new(transports.MongoDB)({
            db: 'mongodb://localhost:27017/Book-catalog',
            collection: 'logs',
            level: 'error',
            options: { useUnifiedTopology: true },
            format: format.combine(format.timestamp(), format.json())
        })
    ]
});

module.exports = logger;