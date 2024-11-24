import React from 'react';

interface UpdatedUserJourneyTextProps {
  text: string;
}

const UpdatedUserJourneyText: React.FC<UpdatedUserJourneyTextProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default UpdatedUserJourneyText;