const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const cursor = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Database connected successfully at ${cursor.connection.host}`);
    } catch (e) {
        console.log(e);
        process.exit(1) //close the app in case of error
    }
}

module.exports = connectDB