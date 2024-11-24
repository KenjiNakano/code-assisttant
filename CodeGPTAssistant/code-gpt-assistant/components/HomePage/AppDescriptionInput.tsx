import React from 'react';

interface AppDescriptionInputProps {
  description: string;
  setDescription: (desc: string) => void;
}

const AppDescriptionInput: React.FC<AppDescriptionInputProps> = ({ description, setDescription }) => {
  return (
    <div className="app-description-input">
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={25}
        cols={120}
        placeholder=""
      />
      <style jsx>{`
        .app-description-input {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default AppDescriptionInput;
