import React from 'react';

interface QuestionTextProps {
  text: string;
}

const QuestionText: React.FC<QuestionTextProps> = ({ text }) => {
  return (
    <div className="question-text">
      <h2>{text}</h2>
      <style jsx>{`
        .question-text {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default QuestionText;
