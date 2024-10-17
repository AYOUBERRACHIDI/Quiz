import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { quizzes } from './components/Data';
import './App.css';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizSelection = (quizKey) => {
    setSelectedQuiz(quizKey);
    setShowResults(false);
    setScore(0);
  };

  const handleFinishQuiz = (finalScore) => {
    setScore(finalScore);
    setShowResults(true);
  };

  const handleRestart = () => {
    setSelectedQuiz(null);
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="App">
      <h1>Quiz</h1>
      {!selectedQuiz && (
        <div>
          <button onClick={() => handleQuizSelection('html')}>HTML</button>
          <button onClick={() => handleQuizSelection('javascript')}>JavaScript</button>
          <button onClick={() => handleQuizSelection('laravel')}>Laravel</button>
          <button onClick={() => handleQuizSelection('sql')}>SQL</button>
          <button onClick={() => handleQuizSelection('csharp')}>C#</button>
          <button onClick={() => handleQuizSelection('python')}>Python</button>
        </div>
      )}

      {selectedQuiz && !showResults && quizzes[selectedQuiz] && quizzes[selectedQuiz].length > 0 && (
        <Quiz 
          quizData={quizzes[selectedQuiz]} 
          onFinish={handleFinishQuiz}
        />
      )}

      {showResults && quizzes[selectedQuiz] && quizzes[selectedQuiz].length > 0 && (
        <Results 
          score={score} 
          totalQuestions={quizzes[selectedQuiz]?.length}
          onRestart={handleRestart}
        />
      )}

      {selectedQuiz && quizzes[selectedQuiz] && quizzes[selectedQuiz].length === 0 && (
        <p>Ce quiz n'a pas encore de questions. Veuillez en choisir un autre.</p>
      )}
    </div>
  );
}

export default App;
