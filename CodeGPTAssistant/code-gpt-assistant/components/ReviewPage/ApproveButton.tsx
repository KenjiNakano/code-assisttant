import React from 'react';

interface ApproveButtonProps {
  onClick: () => void;
}

const ApproveButton: React.FC<ApproveButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Approve</button>;
};

export default ApproveButton;