const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect(
			'mongodb+srv://node-tdd:node-tdd@cluster0.svlok.mongodb.net/node-tdd?retryWrites=true&w=majority',
			{ useNewUrlParser: true }
		);
	} catch (err) {
		console.error(err);
		throw new Error('Error connecting to mongodb');
	}
}

module.exports = { connect };
