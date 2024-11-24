import React from 'react';

interface UserJourneyInputProps {
  journey: string;
  setJourney: (journey: string) => void;
  isVisible: boolean;
}

const UserJourneyInput: React.FC<UserJourneyInputProps> = ({ journey, setJourney, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="user-journey-input">
      <textarea
        value={journey}
        onChange={(e) => setJourney(e.target.value)}
        rows={4}
        cols={50}
        placeholder="Enter your user journey here"
      />
      <style jsx>{`
        .user-journey-input {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default UserJourneyInput;
