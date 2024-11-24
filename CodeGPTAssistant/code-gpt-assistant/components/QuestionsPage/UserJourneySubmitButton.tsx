import React from 'react';
import { useRouter } from 'next/router';

interface UserJourneySubmitButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

const UserJourneySubmitButton: React.FC<UserJourneySubmitButtonProps> = ({ onClick, isVisible }) => {
  if (!isVisible) return null;

  const router = useRouter();
  const handleClick = () => {
    onClick();
    router.push('/review');
  };

  return (
    <div className="user-journey-submit-button">
      <button onClick={handleClick}>Submit User Journey</button>
      <style jsx>{`
        .user-journey-submit-button {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default UserJourneySubmitButton;
