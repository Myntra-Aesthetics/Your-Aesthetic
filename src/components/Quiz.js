import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
// Import images
import retro from "../Assets/retro.jpg";
import rock_or_punk from "../Assets/rock or punk.jpg";
import soft_or_soothing from "../Assets/soft or soothing.jpg";
import summer from "../Assets/summer.jpg";
import winter from "../Assets/winter.jpg";
import spring from "../Assets/spring.jpg";
import autumn from "../Assets/autumn.jpg";
import retromovie from "../Assets/retromovie.jpg";
import horror from "../Assets/horror.jpg";
import bollywood from "../Assets/bollywood.jpg";
import comedy from "../Assets/comedy.jpg";
import neutral from "../Assets/neutral earthy tones.jpg";
import pastel from "../Assets/pastel tone.jpg";
import bright from "../Assets/bright bold.jpg";
import dark from "../Assets/dark.jpg";
import quiet from "../Assets/quiet.jpg";
import gothic from "../Assets/gothic.jpg";
import lavish from "../Assets/lavish.jpg";
import black from "../Assets/black.jpg";
import tea from "../Assets/tea.jpg";
import latte from "../Assets/latte.jpg";
import ice from "../Assets/ice.jpg";
import golf from "../Assets/golf.jpg";
import music from "../Assets/music.jpg";
import party from "../Assets/party.jpg";
import family from "../Assets/family.jpg";
import london from "../Assets/london.jpg";
import newyork from "../Assets/newyork.jpg";
import india from "../Assets/india.jpg";
// Add more image imports as needed

const Quiz = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState({
    Vintage: 0,
    Goth: 0,
    Y2K: 0,
    OldMoney: 0,
    Fairycore: 0,
    Desi: 0,
  });

  const questions = [
    {
      question: "What is your favourite movie genre?",
      options: {
        "90's": { Vintage: 1 },
        Horror: { Goth: 1 },
        Bollywood: { Desi: 1 },
        Comedy: {
          Vintage: 1,
          Goth: 1,
          Desi: 1,
          OldMoney: 1,
          Fairycore: 1,
          Y2K: 1,
        },
      },
      images: {
        "90's": retromovie,
        Horror: horror,
        Bollywood: bollywood,
        Comedy: comedy,
      },
    },
    {
      question: "What music genre do you enjoy the most?",
      options: {
        Retro: { Vintage: 1 },
        "Rock or Punk": { Goth: 1, Y2K: 1 },
        "Soft or Soothing": { OldMoney: 1, Fairycore: 1, Desi: 1 },
      },
      images: {
        Retro: retro,
        "Rock or Punk": rock_or_punk,
        "Soft or Soothing": soft_or_soothing,
      },
    },
    {
      question: "Your favourite wardrobe color choice is...",
      options: {
        "Neutral Earthy Tones": { Vintage: 1, OldMoney: 1 },
        Dark: { Goth: 1 },
        "Bright Bold": { Desi: 1, Y2K: 1 },
        Pastel: { Vintage: 1, Fairycore: 1 },
      },
      images: {
        "Neutral Earthy Tones": neutral,
        Dark: dark,
        "Bright Bold": bright,
        Pastel: pastel,
      },
    },
    {
      question: "Your ideal wedding venue is...",
      options: {
        "Lavish Hotel": { Y2K: 1, Desi: 1 },
        "Gothic Cathedral": { Goth: 1 },
        "Quiet Courtyard": { Vintage: 1 },
      },
      images: {
        "Lavish Hotel": lavish,
        "Gothic Cathedral": gothic,
        "Quiet Courtyard": quiet,
      },
    },
    {
      question: "Your favorite season?",
      options: {
        Summer: { Fairycore: 1, Y2K: 1, Desi: 1 },
        Winter: { Goth: 1 },
        Spring: { OldMoney: 1 },
        Autumn: { Vintage: 1 },
      },
      images: {
        Summer: summer,
        Winter: winter,
        Spring: spring,
        Autumn: autumn,
      },
    },
    {
      question: "What is your favourite type of coffee?",
      options: {
        Latte: { Fairycore: 1, Y2K: 1 },
        Black: { Goth: 1 },
        "Ice with caramel Drizzle": { Vintage: 1 },
        "I prefer tea": { Desi: 1 },
      },
      images: {
        Latte: latte,
        Black: black,
        "Ice with caramel Drizzle": ice,
        "I prefer tea": tea,
      },
    },
    {
      question: "The perfect day involves...",
      options: {
        "Golf Game": { OldMoney: 1 },
        "Party hard": { Goth: 1, Y2K: 1 },
        "Listening to Music": { Vintage: 1, Fairycore: 1 },
        "Spending time with family": { Desi: 1 },
      },
      images: {
        "Golf Game": golf,
        "Party hard": party,
        "Listening to Music": music,
        "Spending time with family": family,
      },
    },
    {
      question: "Finally, where would you live happily forever? ",
      options: {
        "London/ Paris": { OldMoney: 1, Vintage: 1 },
        "New York/ Las Vegas": { Fairycore: 1, Y2K: 1 },
        India: { Desi: 1 },
      },
      images: {
        "London/ Paris": london,
        "New York/ Las Vegas": newyork,
        India: india,
      },
    },
    // Add more questions here with appropriate image imports
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerClick = (option) => {
    const newScores = { ...scores };

    for (const [key, value] of Object.entries(option)) {
      newScores[key] += value;
    }

    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/results", { state: { scores: newScores } });
    }
  };

  console.log("Current Question:", questions[currentQuestion]);

  return (
    <div className="quiz-container">
      <h1 className="header">Here answer some questions...</h1>
      <div className="questionGrid">
        <div className="question">{questions[currentQuestion].question}</div>

          {Object.entries(questions[currentQuestion].options).map(
            ([optionText, optionValues], index) => (
              <div
                key={index}
                className="option"
                onClick={() => handleAnswerClick(optionValues)}
              >
                <img
                  src={questions[currentQuestion].images[optionText]}
                  alt={optionText}
                />
                <span>{optionText}</span>
              </div>
            )
          )}
        {currentQuestion < questions.length - 1 && (
          <button
            className="next-button"
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
