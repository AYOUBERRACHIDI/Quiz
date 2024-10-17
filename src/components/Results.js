    import React from 'react';

    function Results({ score, totalQuestions, onRestart }) {
    return (
        <div>
        <h2>Résultats</h2>
        <p>
            Vous avez obtenu {score} sur {totalQuestions} questions.
        </p>
        <button onClick={onRestart}>Recommencer</button>
        </div>
    );
    }

    export default Results;
