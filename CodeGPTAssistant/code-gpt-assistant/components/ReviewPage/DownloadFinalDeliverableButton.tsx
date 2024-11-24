import React from 'react';

interface DownloadFinalDeliverableButtonProps {
  onClick: () => void;
}

const DownloadFinalDeliverableButton: React.FC<DownloadFinalDeliverableButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Download Final Deliverable</button>;
};

export default DownloadFinalDeliverableButton;