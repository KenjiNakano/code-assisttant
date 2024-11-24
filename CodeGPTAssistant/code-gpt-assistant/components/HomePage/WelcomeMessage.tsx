import React from 'react';

const WelcomeMessage: React.FC = () => {
  return (
    <div className="welcome-message">
      <h1>Welcome to code-gpt-assistant</h1>
      <p>Please describe the application you want to create:</p>
      <style jsx>{`
        .welcome-message {
          text-align: center;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default WelcomeMessage;