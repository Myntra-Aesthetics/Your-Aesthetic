import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scores = location.state?.scores;

  if (!scores) {
    navigate('/');
    return null;
  }

   // Get an array of [style, score] pairs and sort by score in descending order
   const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);

  // Get the top score
  const maxScore = sortedScores[0][1];

  // Get styles with the top score or within one point of the top score
  const topResults = sortedScores.filter(([, score]) => maxScore - score <= 1);

  // Ensure we don't have more than two results, but at least one
  const results = topResults.slice(0, 2).map(([style]) => style);

  return (
    <div className="results-container">
      <h1>Your Personality Style is:</h1>
      {results.map((style, index) => (
        <div key={index} className="result-style">
          {style}
        </div>
      ))}
    </div>
  );
};

export default Results;