import React from 'react';

interface AnswerInputProps {
  answer: string;
  setAnswer: (answer: string) => void;
}

const AnswerInput: React.FC<AnswerInputProps> = ({ answer, setAnswer }) => {
  return (
    <div className="answer-input">
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter your answer here"
      />
      <style jsx>{`
        .answer-input {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default AnswerInput;
