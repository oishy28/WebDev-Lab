
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/'; // Replace with your MongoDB URI

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('quiz'); // Replace 'your-database-name' with your actual database name
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = connectToMongoDB;
