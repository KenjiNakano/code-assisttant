import React from 'react';

interface EditButtonProps {
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Edit</button>;
};

export default EditButton;