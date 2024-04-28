"use client";
import React, { useState } from "react";
import Quiz from "../Components/Quiz";
import { quiz as QuestionSet } from "../Data/QuestionSet";
import { quiz as QuestionSet2 } from "../Data/QuestionSet2";
import './style.css';

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface QuestionSetType {
  questions: Question[];
}

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [name, setName] = useState("");
  const [selectedQuestionSet, setSelectedQuestionSet] = useState<QuestionSetType | null>(
    null
  );

  const handleQuestionSetSelect = (questionSet: QuestionSetType) => {
    setSelectedQuestionSet(questionSet);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="container mt-10 full-background">
      <div className="text-center ">
        <h1 className="text-gradient">Welcome to the Trivia Quiz</h1>
        <h3>Quiz App</h3>
      </div>

      {!quizStarted && (
        <>
          <div className="row justify-content-center mb-3">
            <div className="col-md-6">
              <label htmlFor="nameInput" className="form-label">
                Enter Your Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="row justify-content-center mb-3">
            <div className="col-md-6">
              <button
                onClick={() => handleQuestionSetSelect(QuestionSet)}
                className="btn btn-primary btn-lg btn-block mb-2"
              >
                Engineering
              </button>
              <button
                onClick={() => handleQuestionSetSelect(QuestionSet2)}
                className="btn btn-primary btn-lg btn-block"
              >
                Physics
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <button
                onClick={handleStartQuiz}
                className="btn btn-primary btn-lg btn-block"
                disabled={!name.trim() || !selectedQuestionSet}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </>
      )}

      {quizStarted && <Quiz name={name} questionSet={selectedQuestionSet!} />}
    </div>
  );
}
