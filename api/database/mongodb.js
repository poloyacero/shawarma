const mongoose = require('mongoose');

// db connection
try {
    // deprecated options settings
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
} catch (error) {
    console.log(error);
}
const db = mongoose.connection;

// check db connection
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// check db errors
db.on('error', (error) => {
    console.log(error);
});