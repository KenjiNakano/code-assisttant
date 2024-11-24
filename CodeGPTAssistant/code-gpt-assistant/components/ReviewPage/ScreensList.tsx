import React from 'react';

interface ScreensListProps {
  screens: {
    name: string;
    components: string[];
  }[];
}

const ScreensList: React.FC<ScreensListProps> = ({ screens }) => {
  return (
    <div>
      {screens.map((screen, index) => (
        <div key={index}>
          <h3>{screen.name}</h3>
          <ul>
            {screen.components.map((component, i) => (
              <li key={i}>{component}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ScreensList;