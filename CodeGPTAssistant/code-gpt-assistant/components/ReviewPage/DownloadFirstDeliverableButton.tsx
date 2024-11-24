import React from 'react';
import { Button } from '@mui/material';

type DownloadFirstDeliverableButtonProps = {
  onClick: () => void;
};

const DownloadFirstDeliverableButton: React.FC<DownloadFirstDeliverableButtonProps> = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Download First Deliverable
    </Button>
  );
};

export default DownloadFirstDeliverableButton;
