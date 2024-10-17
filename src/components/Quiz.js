    import React, { useState } from 'react';

    function Quiz({ quizData, onFinish }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (selectedAnswer) => {
        const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
        if (selectedAnswer === correctAnswer) {
        setScore(score + 1);
        }

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < quizData.length) {
        setCurrentQuestionIndex(nextQuestion);
        } else {
        onFinish(score + (selectedAnswer === correctAnswer ? 1 : 0));
        }
    };

    return (
        <div>
        <h2>{quizData[currentQuestionIndex].question}</h2>
        <div>
            {Object.keys(quizData[currentQuestionIndex].answers).map((key) => (
            <button key={key} onClick={() => handleAnswer(key)}>
                {quizData[currentQuestionIndex].answers[key]}
            </button>
            ))}
        </div>
        </div>
    );
    }

    export default Quiz;
