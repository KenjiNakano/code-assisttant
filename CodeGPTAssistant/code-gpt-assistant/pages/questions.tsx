import React, { useState } from 'react';
import ProgressIndicator from '../components/QuestionsPage/ProgressIndicator';
import QuestionText from '../components/QuestionsPage/QuestionText';
import AnswerInput from '../components/QuestionsPage/AnswerInput';
import UserJourneyInput from '../components/QuestionsPage/UserJourneyInput';
import UserJourneySubmitButton from '../components/QuestionsPage/UserJourneySubmitButton';

const questions = [
  'Question 1',
  'Question 2',
  'Question 3',
];

const QuestionsPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [userJourney, setUserJourney] = useState('');
  const [userJourneyInputVisible, setUserJourneyInputVisible] = useState(false);

  const handleSubmitAnswer = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer('');
    } else {
      setUserJourneyInputVisible(true);
    }
  };

  const handleUserJourneySubmit = () => {
    console.log('User journey submitted:', userJourney);
    // Navigate to the review page or process the user journey as required
  };

  return (
    <div className="questions-page">
      <ProgressIndicator current={currentQuestion + 1} total={questions.length} />
      <QuestionText text={questions[currentQuestion]} />
      <AnswerInput answer={answer} setAnswer={setAnswer} />
      <UserJourneyInput journey={userJourney} setJourney={setUserJourney} isVisible={userJourneyInputVisible} />
      <UserJourneySubmitButton onClick={handleUserJourneySubmit} isVisible={userJourneyInputVisible} />
      <div className="submit-answer-button">
        {!userJourneyInputVisible && <button onClick={handleSubmitAnswer}>Submit Answer</button>}
      </div>
      <style jsx>{`
        .questions-page {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .submit-answer-button {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default QuestionsPage;
