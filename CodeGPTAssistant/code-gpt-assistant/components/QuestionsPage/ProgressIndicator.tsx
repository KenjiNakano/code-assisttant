import React from 'react';

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ current, total }) => {
  return (
    <div className="progress-indicator">
      <p>
        Question {current} of {total}
      </p>
      <style jsx>{`
        .progress-indicator {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ProgressIndicator;
