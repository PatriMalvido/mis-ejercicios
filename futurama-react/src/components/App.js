import CallToApi from '../services/CallToApi';
import '../styles/App.scss';
import '../styles/Header.scss';
import { useState, useEffect } from 'react';
import CharactersList from './CharactersList';
import AboutFuturama from './AboutFuturama';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import CharacterDetail from './CharacterDetail';

function App() {
  const [characters, setCharacteres] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = [
    {
      questionText: 'Quién dice la frase: ¿Todas las pruebas van a implicar beber?',
      answerOptions: [
        { answerText: 'Fry', isCorrect: false },
        { answerText: 'Brannigan', isCorrect: false },
        { answerText: 'Bender', isCorrect: true },
        { answerText: 'Farnsworth', isCorrect: false },
      ],
    },
    {
      questionText: 'Quién dice la frase: Estaba teniendo el sueño más maravilloso. ¡Salvo que tú estabas allí, y estabas allí, y estabas allí! ',
      answerOptions: [
        { answerText: 'Carol', isCorrect: false },
        { answerText: 'Leela', isCorrect: true },
        { answerText: 'Zoidberg', isCorrect: false },
        { answerText: 'Scruffington', isCorrect: false },
      ],
    },
    {
      questionText: 'Quién dice la frase: Fry, han pasado años desde la escuela de medicina, así que recuérdame. El destripamiento en su especie: ¿fatal o no fatal?"',
      answerOptions: [
        { answerText: 'Zoidberg', isCorrect: true },
        { answerText: 'Conrad', isCorrect: false },
        { answerText: 'Kroker', isCorrect: false },
        { answerText: 'Fry', isCorrect: false },
      ],
    },
    {
      questionText: 'Quién dice la frase: Mi peso es apropiado y atractivo',
      answerOptions: [
        { answerText: 'Bender', isCorrect: false },
        { answerText: 'Kroker', isCorrect: false },
        { answerText: 'Scruffington', isCorrect: false },
        { answerText: 'Lrrr', isCorrect: true },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const Quiz = () => {
    return (
      <div className='container'>
         <Link className="modal__text" to="/">
        Volver al inicio
        <i  className="modal__close icon fas fa-times"></i>
      </Link>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            Tu puntuación es {score} de {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Pregunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button 
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      </div>
    );
    
  };

  //------------------------------------------------------------------------
  useEffect(() => {
    CallToApi().then((data) => setCharacteres(data));
  }, []);

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === +characterId;
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    }
  };
  //----------------------------------------------------------------------

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <CharactersList characters={characters} />
        </Route>
        <Route path="/AboutFuturama">
          <AboutFuturama />
        </Route>
        <Route path="/Quiz">
        <Quiz />
        </Route>
        <Route
          path="/character/:characterId"
          render={renderCharacterDetail}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
