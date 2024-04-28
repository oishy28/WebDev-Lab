// pages/api/quizResults.js

import connectToMongoDB from '../../db'; // Import the MongoDB connection function

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, score, correctAnswers, wrongAnswers,percentage,status } = req.body;

        // Connect to MongoDB
        const db = await connectToMongoDB();

        // Insert quiz result into MongoDB
        try {
            await db.collection('quizResults').insertOne({
                name,
                score,
                correctAnswers,
                wrongAnswers,
                percentage,
                status,
                timestamp: new Date(),
            });
            console.log('Quiz result saved to MongoDB');
            res.status(201).json({ success: true });
        } catch (error) {
            console.error('Error saving quiz result to MongoDB:', error);
            res.status(500).json({ success: false, error: 'Error saving quiz result to MongoDB' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
