// import React from 'react';
 
// const ScoreCard = ({ quizResult, questions, name }) => {
//     const passPercentage = 60;
 
//     const percentage = (quizResult.score / (questions.length * 5)) * 100;
//     const status = percentage >= passPercentage ? 'Pass' : 'Fail';
 
//     return (
//         <>
//             <div className='card p-4'>
//                 <h3>Hello, {name}. Here is your Result Analysis</h3>
//                 <table className='table'>
//                     <tbody>
//                         <tr>
//                             <td>Total Questions:</td>
//                             <td>{questions.length}</td>
//                         </tr>
//                         <tr>
//                             <td>Total Score:</td>
//                             <td>{quizResult.score}</td>
//                         </tr>
//                         <tr>
//                             <td>Correct Answers:</td>
//                             <td>{quizResult.correctAnswers}</td>
//                         </tr>
//                         <tr>
//                             <td>Wrong Answers:</td>
//                             <td>{quizResult.wrongAnswers}</td>
//                         </tr>
//                         <tr>
//                             <td>Percentage:</td>
//                             <td>{percentage}%</td>
//                         </tr>
//                         <tr>
//                             <td>Status:</td>
//                             <td>{status}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <button
//                     onClick={() => window.location.reload()}
//                     className='btn btn-primary mt-3'
//                 >
//                     Restart
//                 </button>
//             </div>
//         </>
//     );
// };
 
// export default ScoreCard;

import React, { useState } from 'react';
import axios from 'axios'; 

const ScoreCard = ({ quizResult, questions, name }) => {
    const passPercentage = 60;

    const percentage = (quizResult.score / (questions.length * 5)) * 100;
    const status = percentage >= passPercentage ? 'Pass' : 'Fail';


    const [resultsSaved, setResultsSaved] = useState(false);


    const saveResultsToMongoDB = async () => {
        try {
            await axios.post('/api/quizResults', {
                name,
                score: quizResult.score,
                correctAnswers: quizResult.correctAnswers,
                wrongAnswers: quizResult.wrongAnswers,
                percentage:percentage,
                status:status
            });
            console.log('Quiz result saved to MongoDB');
            setResultsSaved(true);
        } catch (error) {
            console.error('Error saving quiz result to MongoDB:', error);
        }
    };

    return (
        <>
            <div className='card p-4'>
                <h3>Hello, {name}. Here is your Result Analysis</h3>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>Total Questions:</td>
                            <td>{questions.length}</td>
                        </tr>
                        <tr>
                            <td>Total Score:</td>
                            <td>{quizResult.score}</td>
                        </tr>
                        <tr>
                            <td>Correct Answers:</td>
                            <td>{quizResult.correctAnswers}</td>
                        </tr>
                        <tr>
                            <td>Wrong Answers:</td>
                            <td>{quizResult.wrongAnswers}</td>
                        </tr>
                        <tr>
                            <td>Percentage:</td>
                            <td>{percentage}%</td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td>{status}</td>
                        </tr>
                    </tbody>
                </table>
                {!resultsSaved && (
                    <button
                        onClick={saveResultsToMongoDB}
                        className='btn btn-primary mt-3'
                    >
                        Save Results to Database
                    </button>
                )}
                <button
                    onClick={() => window.location.reload()}
                    className='btn btn-primary mt-3 ms-3'
                >
                    Restart
                </button>
            </div>
        </>
    );
};

export default ScoreCard;

